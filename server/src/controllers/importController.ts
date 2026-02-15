import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import csv from "csv-parser";
import fs from "fs";

export const importCategory = expressAsyncHandler(
    async (req: Request, res: Response) => {

        console.log("********",req.user);
        // 1️⃣ Check file
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
            return;
        }

        const results: Record<string, string>[] = [];

        // 2️⃣ Read CSV
        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on("data", (data: Record<string, string>) => {
                results.push(data);
            })
            .on("end", () => {
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
