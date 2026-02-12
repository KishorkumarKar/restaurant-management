import mongoose, { Document } from "mongoose";
import { ILoginSessionInterface } from "../interface/loginSessionInterface";

export interface IMLoginSessionDocument extends Omit<ILoginSessionInterface, "id">, Document {

}


const LoginSessionSchema = new mongoose.Schema<IMLoginSessionDocument>(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refer: "Blogger",
        },
        expiryTime: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

LoginSessionSchema.index({ expiryTime: 1 }, { expireAfterSeconds: 0 }); // TTL (Time To Live) this is to delete record automatically

type ToJSONTransform<T> = (
    doc: T,
    ret: Partial<T> & { _id?: any; id?: any; __v?: number },
    options: Record<string, any>,
) => any;


LoginSessionSchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<IMLoginSessionDocument>,
});
export default mongoose.model<IMLoginSessionDocument>("LoginSession", LoginSessionSchema);