
import { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
import { IRestaurant } from "../interface/restaurantInterface";

export const importFromCSV = async <T>(
    req: Request,
    res: Response,
    serviceFunction: (data: T) => Promise<T>
): Promise<void> => {
    if (!req.file) {
        res.status(400).json({
            success: false,
            message: "No file uploaded",
        });
        return;
    }

    const results: T[] = [];
    const promises: Promise<void>[] = [];

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", (data: T) => {
            const promise = serviceFunction(data)
                .then((savedObject) => {
                    results.push(savedObject);
                })
                .catch((error) => {
                    results.push({
                        ...data,
                        error: error.message,
                    });
                });

            promises.push(promise);
        })
        .on("end", async () => {
            await Promise.all(promises);
            fs.unlinkSync(req.file!.path);

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
};
