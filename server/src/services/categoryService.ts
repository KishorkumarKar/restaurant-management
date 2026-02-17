import { ICategory } from "../interface/categoryInterface";
import Category from "../models/categoryModel";

export const addCategory = (data: ICategory) => {
    const category = new Category(data);
    return category.save();
}