import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { ICategory } from "../interface/categoryInterface";
import { addCategory } from "../services/categoryService";
import { ITag } from "../interface/tagInterface";
import { addTag } from "../services/tagService";
import { downloadSampleFile, importFromCSV } from "../util/importUtils";
import { IRestaurant } from "../interface/restaurantInterface";
import { addImporterData, addRestaurant,formatTheRequestPayload } from "../services/restaurantService";
import path from "path";
import fs from "fs";

export const importCategory = expressAsyncHandler(
    async (req: Request, res: Response) => {
        return importFromCSV<ICategory>(req, res, addCategory);
    }
);

export const importTag = expressAsyncHandler(
    async (req: Request, res: Response) => {
        return importFromCSV<ITag>(req, res, addTag);
    }
);

export const importRestaurant = expressAsyncHandler(
    async (req: Request, res: Response) => {
        return importFromCSV<IRestaurant>(req, res, addImporterData);
    }
);

export const download= expressAsyncHandler(
    async (req: Request, res: Response) => {
        return downloadSampleFile<IRestaurant>(req, res);
    }
);
