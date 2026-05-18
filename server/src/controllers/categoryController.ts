import { Request, Response } from "express";
import * as categoryService from "../services/categoryService";
import expressAsyncHandler from "express-async-handler";
import config from "../config";

export const list = expressAsyncHandler(async (req: Request, res: Response) => {
    const pageNumber = req.header("page") ? Number(req.header("page")) : 1;
    const searchData = req.header("searchData") ? req.header("searchData") : "";
    const fields = req.header("fields") ? req.header("fields") : "";
    const countNumber = req.header("count") ? Number(req.header("count")) : config.filterLimit;

    console.log("fields --",fields);
    const categoryData = await categoryService.list(countNumber, ((pageNumber - 1) * countNumber), searchData, fields);
    if (categoryData) {
        res.status(200).json(
            {
                success: true, count: countNumber, category: categoryData
            }
        );
    } else {
        res.status(403).json(
            {
                success: false, message: "Invalid User", category: categoryData
            }
        );
    }

});

