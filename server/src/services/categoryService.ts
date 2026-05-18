import { ICategory } from "../interface/categoryInterface";
import Category, { ICategoryDoc } from "../models/categoryModel";
import { QueryFilter } from "mongoose";

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


export const list = async (count: number, startFrom: number, searchData: string = "", fields = "") => {
    let query: QueryFilter<ICategoryDoc> = {};
    if (searchData) {
        query.name = { $regex: searchData, $options: "i" }; // case-insensitive search
    }
    const selectFields = fields.split(",").join(" ");

    const [total, data] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query).select(selectFields).limit(count).skip(startFrom).sort({ createdAt: -1 })
    ])
    return { total, data }
}