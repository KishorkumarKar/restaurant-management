import { Request, Response } from "express";
import * as TagService from "../services/tagService";
import expressAsyncHandler from "express-async-handler";
import config from "../config";

export const list = expressAsyncHandler(async (req: Request, res: Response) => {
    const pageNumber = req.header("page") ? Number(req.header("page")) : 1;
    const countNumber = req.header("count") ? Number(req.header("count")) : config.filterLimit;
    const tagData = await TagService.list(countNumber, ((pageNumber - 1) * countNumber));
    if (tagData) {
        res.status(200).json(
            {
                success: true, tag: tagData
            }
        );
    } else {
        res.status(403).json(
            {
                success: false, message: "Invalid User", tag: tagData
            }
        );
    }

});