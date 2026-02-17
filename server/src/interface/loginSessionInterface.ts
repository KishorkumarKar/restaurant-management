import mongoose from "mongoose";
export interface ILoginSessionInterface {
    id?: string;
    token: string;
    userId: mongoose.Schema.Types.ObjectId;
    expiryTime: Date;
}


export interface IJwtTokenResponseTypeInterface {
    name?: string;
    email?: string;
    id: string;
    type: string;
    iat?: number;
    exp?: number;
}