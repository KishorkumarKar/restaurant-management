import mongoose from "mongoose";
import { ICategory } from "../interface/categoryInterface";

interface ICategoryDoc extends Omit<ICategory, "id">, mongoose.Document {
}

const categorySchema = new mongoose.Schema<ICategoryDoc>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    shortDescription: {
        type: String,
        require: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
}, {
    timestamps: true
});



// Generic helper type for Mongoose toJSON transform
type ToJSONTransform<T> = (
    doc: T,
    ret: Partial<T> & { _id?: any; id?: any; __v?: number },
    options: Record<string, any>,
) => any;

categorySchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<ICategoryDoc>,
});

export default mongoose.model<ICategoryDoc>("Category", categorySchema);