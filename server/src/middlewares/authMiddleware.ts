import { NextFunction, Request, Response } from "express";
import { AppError } from "../util/errorUtils";
import { verifyToken } from "../util/managePasswordUtil";
import { isTokenValid } from "../services/authService";

export const validateUser = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    let token = req.headers.authorization;
    try {
        if (!token?.startsWith("Bearer ")) {
            return next(AppError.forbidden("Token missing"));
        }


        token = token.replace("Bearer ", "");
        const verifyTokenData = verifyToken(token);
        const sessionData = await isTokenValid(token);
        if (!sessionData) {
            return next(AppError.forbidden("Session expired"));
        }

        (req as any).user = {
            id: verifyTokenData.id,
            type: verifyTokenData.type,
        };

       /*  (req as any).body = {...req.body,
            user:{
            id: verifyTokenData.id,
            type: verifyTokenData.type,
                
            }
        }; */

        next();

        /*  if (token != undefined) {
             token = token.replace("Bearer ", "");
             const verifyTokenData = await verifyToken(token);
             if (verifyTokenData) {
                 const sessionData = await isTokenValid(token);
                 if (sessionData) {
                     req.headers.loginUserId = verifyTokenData.id;
                     req.headers.loginUserType = verifyTokenData.type;
                     return next();
                 }
             }
         } */
    } catch (error) {
        return next(
            error instanceof Error
                ? AppError.loginValidation(error.message)
                : AppError.forbidden("Invalid token")
        );
    }
    // throw new AppError("invalid user", 400);
}