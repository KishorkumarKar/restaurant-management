import mongoose from "mongoose";
import { ITag } from "../interface/tagInterface";
interface ITagDoc extends Omit<ITag, "id">, mongoose.Document {
}

const tagSchema = new mongoose.Schema<ITagDoc>({
    name: {
        type: String,
        required: true,
        unique: true,
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

tagSchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<ITagDoc>,
});

export default mongoose.model<ITagDoc>("Tag", tagSchema);