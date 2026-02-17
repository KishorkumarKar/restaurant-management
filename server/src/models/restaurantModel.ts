import mongoose from "mongoose";
import { IRestaurant, IRestaurantCategory, IRestaurantTag } from "../interface/restaurantInterface";

interface IRestaurantDoc extends Omit<IRestaurant, "id">, mongoose.Document {
}


const CategorySchema = new mongoose.Schema<IRestaurantCategory>({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
}, { _id: false });

const TagSchema = new mongoose.Schema<IRestaurantTag>({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
        required: true,
    },
}, { _id: false });

const restaurantSchema = new mongoose.Schema<IRestaurantDoc>({
    code: {
        type: String,
        required: true,
        unique: true,
        match: [/^RES_[a-zA-Z0-9]+$/, "Invalid Code format it should be like HOTEL_{text}"],
    },
    name: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        require: true,
    },
    description: {
        type: String
    },
    isOpen: {
        enum: ["open", "close"],
        type: String,
        required: true,
        default: "close"
    },
    status: {
        enum: ["enable", "disable"],
        type: String,
        required: true,
        default: "disable"
    },
    category: [CategorySchema],
    tag: [TagSchema],
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

restaurantSchema.set("toJSON", {
    transform: ((_doc, returnedObj, option) => {
        returnedObj.id = returnedObj._id;
        delete returnedObj._id;
        delete returnedObj.__v;
        return returnedObj;
    }) as ToJSONTransform<IRestaurantDoc>,
});

export default mongoose.model<IRestaurantDoc>("Restaurant", restaurantSchema);