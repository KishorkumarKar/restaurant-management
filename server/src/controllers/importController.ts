import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import csv from "csv-parser";
import fs from "fs";
import { ICategory } from "../interface/categoryInterface";
import { addCategory } from "../services/categoryService";

export const importCategory = expressAsyncHandler(
    async (req: Request, res: Response) => {
        // 1️⃣ Check file
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
            return;
        }
        const results: ICategory[] = [];
        const promises: Promise<void>[] = [];

        // 2️⃣ Read CSV
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on("data", (data: ICategory) => {
                const promise = addCategory(data)
                    .then(categoryObject => {
                        results.push(categoryObject);
                    })
                    .catch(error => {
                        results.push({
                            ...data,
                            error: error.message
                        });

                    })
                promises.push(promise);
            })
            .on("end", async () => {
                await Promise.all(promises)
                fs.unlinkSync(req.file!.path); // cleanup
                // ✅ ONLY response
                res.status(200).json({
                    success: true,
                    rows: results.length,
                    data: results,
                });
            })
            .on("error", (err: Error) => {
                res.status(500).json({
                    success: false,
                    message: err.message,
                });
            });
    }
);
