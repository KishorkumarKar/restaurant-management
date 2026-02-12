import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import { IUser } from "../interface/userInterface";

export const hashThePassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(config.saltRound);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};

export const getWebToken = async (
  user: IUser,
  type: String
): Promise<string> => {
  const data = {
    name: user.name,
    email: user.email,
    id: user.id,
    type: type
  };
  return jwt.sign(data, config.jwtSecret, { expiresIn: config.jwtExpiryTime });
};

export const verifyToken = async (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
