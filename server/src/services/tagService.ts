import { ITag } from "../interface/tagInterface";
import Tag from "../models/tagModel";

export const addTag = (data: ITag) => {
    const tagObject = new Tag(data);
    return tagObject.save();
}

export const getByNames = (names: string[], fields: {} = {}) => {
    return Tag.find({ name: { $in: names } }, fields);
}