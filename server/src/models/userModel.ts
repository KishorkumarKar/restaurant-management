import mongoose from "mongoose";
import { IUser, IUserAddress } from "../interface/userInterface";
import { comparePassword, hashThePassword } from "../util/managePasswordUtil";

interface IUserDoc extends Omit<IUser, "id">, mongoose.Document {
     compareUserPassword(plainPassword: string): Promise<boolean>;
}
const userAddress = new mongoose.Schema<IUserAddress>({
    name: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema<IUserDoc>({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: userAddress,
        required: false
    },
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



// Generic helper type for Mongoose toJSON transform
type ToJSONTransform<T> = (
    doc: T,
    ret: Partial<T> & { _id?: any; id?: any; __v?: number },
    options: Record<string, any>,
) => any;

userSchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<IUserDoc>,
});



userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await hashThePassword(this.password);
    }
});


userSchema.methods.compareUserPassword = async function (
    candidatePassword: string,
): Promise<boolean> {
    try {
        return comparePassword(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};


export default mongoose.model<IUserDoc>("User", userSchema);