import { ICounter } from "../interface/counterInterface";
import Counter from "../models/counterModels";

export const addCounter = (data: ICounter) => {
    const tagObject = new Counter(data);
    return tagObject.save();
}

export const findOneAndUpdateCounter = (names: string) => {
    return Counter.findOneAndUpdate(
        { name: names },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
}