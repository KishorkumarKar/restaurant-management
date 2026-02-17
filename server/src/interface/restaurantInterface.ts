import { ICategory } from "./categoryInterface";
import { ITag } from "./tagInterface";
import { IUserAddress } from "./userInterface";
export type IRestaurantCategory = Pick<ICategory, "id" | "name">;
export type IRestaurantTag = Pick<ITag, "id" | "name">;
export interface IRestaurant {
    id?: string,
    code: string,
    name: string,
    shortDescription: string,
    status: "enable" | "disable",
    isOpen: "open" | "close",
    rating: number,
    description?: string,
    category?: IRestaurantCategory[];
    tag?: IRestaurantTag[],
    address?: IUserAddress,
    image?: string,
}