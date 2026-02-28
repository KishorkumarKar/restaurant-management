import { ITag } from "../interface/tagInterface";
import Tag from "../models/tagModel";

export const addTag = (data: ITag) => {
    const tagObject = new Tag(data);
    return tagObject.save();
}

export const getByNames = (names: string[], fields: {} = {}) => {
    return Tag.find({ name: { $in: names } }, fields);
}

export const list = async (count: number, startFrom: number) => {
    const [total, data] = await Promise.all([
        Tag.find().countDocuments(),
        Tag.find().limit(count).skip(startFrom).sort({ createdAt: -1 })
    ])
    return { total, data }
}