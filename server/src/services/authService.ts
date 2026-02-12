
import User from "../models/userModel";
import LoginSessionServerModel from "../models/loginSessionServerModel";
import { IUserLogin } from "../interface/userInterface";
import { getWebToken } from "../util/managePasswordUtil";
import config from "../config"
export const validateCustomerLogin = async (loginData: IUserLogin): Promise<{ token: string | null, type: string | null }> => {
    let token = null;
    let type = null;
    const user = await User.findOne({ email: loginData.email });
    if (user && await user.compareUserPassword(loginData.password)) {
        token = await getWebToken(user, user.type);
        const expiryTime = new Date();
        expiryTime.setSeconds(expiryTime.getSeconds() + config.jwtExpiryTime);
        const loginSessionServerModel = new LoginSessionServerModel({
            token: token,
            userId: user.id,
            expiryTime: expiryTime
        });
        loginSessionServerModel.save();
        type = user.type;
    }
    return { token: token, type: type };
}