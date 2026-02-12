import { Application } from "express";
import config from "../config";
import auth from "./auth";
// import { isValidAdminUser } from "../middlewares/adminUserMiddleware";
const version = "/" + config.version;

const route = config.route;
const routeManagement = (app: Application) => {
    app.use(version + "/" + route.auth, auth);
};
export default routeManagement;
