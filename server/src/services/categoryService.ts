import { ICategory } from "../interface/categoryInterface";
import Category from "../models/categoryModel";

export const addCategory = (data: ICategory) => {
    const category = new Category(data);
    return category.save();
}

export const getByNames = (names: string[], fields: {} = {}) => {
    return Category.find({ name: { $in: names } }, fields);
}
export const getByName = (names: string) => {
    return Category.findOne({ name: names });
}