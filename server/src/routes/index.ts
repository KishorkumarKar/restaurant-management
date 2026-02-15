import { Application } from "express";
import config from "../config";
import auth from "./auth";
import importRouter from "./import";
// import { isValidAdminUser } from "../middlewares/adminUserMiddleware";
const version = "/" + config.version;

const route = config.route;
const routeManagement = (app: Application) => {
    app.use(version + "/" + route.auth, auth);
    app.use(version + "/" + route.admin + '/' + route.import, importRouter);
};
export default routeManagement;
