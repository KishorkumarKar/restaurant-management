import { Request, Response } from "express";
import { validateCustomerLogin } from "../services/authService";
import expressAsyncHandler from "express-async-handler";

export const login = expressAsyncHandler(async (req: Request, res: Response) => {
    const loginData = req.body;
    console.log(loginData);
    const responseData = await validateCustomerLogin(loginData);
    if (responseData.token) {
        res.status(200).json(
            {
                success: true, message: "Login", token: responseData.token, type: responseData.type
            }
        );
    } else {
        res.status(403).json(
            {
                success: false, message: "Invalid User"
            }
        );

    }
});

export const logout = async (req: Request, res: Response) => {
    return res.status(200).json(
        {
            success: true, message: "Logout"
        }
    )
};