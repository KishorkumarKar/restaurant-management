import { IRestaurant } from "../interface/restaurantInterface";
import Restaurant from "../models/restaurantModel";
import * as CategoryService from "./categoryService";
import * as TagService from "./tagService";

export const addRestaurant = (data: IRestaurant) => {
    const tagObject = new Restaurant(data);
    return tagObject.save();
}
export const addImporterData = async (data: IRestaurant) => {
    const finalData = await formatTheRequestPayload(data);
    const tagObject = new Restaurant(finalData);
    return tagObject.save();
    // return finalData;
}

export const formatTheRequestPayload = async (data: IRestaurant) => {
    const finalData = data;
    finalData.code = finalData.code ? finalData.code : "RES_01";
    if (typeof data.category === "string" && data.category) {
        const catData = await CategoryService.getByNames((data.category as string).split(","), { _id: 1, name: 1 });
        const formatted = catData.map(cat => ({
            id: cat.id.toString(),
            name: cat.name
        }));
        finalData.category = formatted;

    }
    if (typeof data.tag === "string" && data.tag) {
        const tagData = await TagService.getByNames((data.tag as string).split(","), { _id: 1, name: 1 });
        const formatted = tagData.map(tag => ({
            id: tag.id.toString(),
            name: tag.name
        }));
        finalData.tag = formatted;
    }
    return data;
}