import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import csv from "csv-parser";
import fs from "fs";
import { ICategory } from "../interface/categoryInterface";
import { addCategory } from "../services/categoryService";
import { ITag } from "../interface/tagInterface";
import { addTag } from "../services/tagService";
import { ParamsDictionary } from "express-serve-static-core";
import { Document, DefaultSchemaOptions, Types } from "mongoose";
import { ParsedQs } from "qs";
import { importFromCSV } from "../util/importUtils";

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
