import mongoose from "mongoose";
export interface ILoginSessionInterface {
    id?: string,
    token: string,
    userId: mongoose.Schema.Types.ObjectId,
    expiryTime: Date,
}