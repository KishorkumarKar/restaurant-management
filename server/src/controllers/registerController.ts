import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    return res.status(200).json(
        {
            success: true, message: "Register"
        }
    )
}
export default register;