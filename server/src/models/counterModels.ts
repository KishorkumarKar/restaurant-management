import mongoose from "mongoose";
import { ICounter } from "../interface/counterInterface";
interface ICounterDoc extends Omit<ICounter, "id">, mongoose.Document {
}

const counterSchema = new mongoose.Schema<ICounterDoc>({
    name: { type: String, required: true },
    seq: { type: Number, default: 0 }
}, {
    timestamps: true
});



// Generic helper type for Mongoose toJSON transform
type ToJSONTransform<T> = (
    doc: T,
    ret: Partial<T> & { _id?: any; id?: any; __v?: number },
    options: Record<string, any>,
) => any;

counterSchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<ICounterDoc>,
});

export default mongoose.model<ICounterDoc>("Counter", counterSchema);