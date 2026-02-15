import { IJwtTokenResponseTypeInterface } from "../interface/loginSessionInterface";

declare global {
  namespace Express {
    interface Request {
      user?: IJwtTokenResponseTypeInterface;
    }
  }
}

export {};