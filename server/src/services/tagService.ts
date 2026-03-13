import { ITag } from "../interface/tagInterface";
import Tag, { ITagDoc } from "../models/tagModel";
import { QueryFilter } from "mongoose";

export const addTag = (data: ITag) => {
    const tagObject = new Tag(data);
    return tagObject.save();
}

export const getByNames = (names: string[], fields: {} = {}) => {
    return Tag.find({ name: { $in: names } }, fields);
}

export const list = async (count: number, startFrom: number, searchData: string = "") => {
    let query: QueryFilter<ITagDoc> = {};
    if (searchData) {
        query.name = { $regex: searchData, $options: "i" }; // case-insensitive search
    }
    const [total, data] = await Promise.all([
        Tag.countDocuments(query),
        Tag.find(query).limit(count).skip(startFrom).sort({ createdAt: -1 })
    ])
    return { total, data }
}