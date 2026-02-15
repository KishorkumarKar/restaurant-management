import { IJwtTokenResponseTypeInterface } from "../interface/loginSessionInterface";
import * as express from 'express';
declare global {
    namespace Express {
        interface Request {
            user?: IJwtTokenResponseTypeInterface;
        }
    }
}
export { };