
import { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
import { IRestaurant } from "../interface/restaurantInterface";
import path from "path";

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


export const downloadSampleFile = async <T>(
    req: Request,
    res: Response
): Promise<void> => {

    const { type } = req.params;
    let filePath = "";
    if (type == "tag") {
        filePath = path.join(process.cwd(), "files/tag.csv");
    }
    else if (type == "category") {
        filePath = path.join(process.cwd(), "files/category.csv");
    }
    else if (type == "restaurant") {
        filePath = path.join(process.cwd(), "files/restaurant.csv");
    } else {
        res.status(404).json({ status: false, message: "Invalid Request" });
        return;
    }

    if (!fs.existsSync(filePath)) {
        res.status(404).json({ status: false, message: "File not found" });
        return;
    }
    res.download(filePath);
};


