import { Application } from "express";
import config from "../config";
import auth from "./auth";
import importRouter from "./import";
import userCategoryRouter from "./user/category";
import tagRouter from "./tag";
const version = "/" + config.version;

const route = config.route;
const routeManagement = (app: Application) => {
    // admin section
    app.use(version + "/" + route.auth, auth);
    app.use(version + "/" + route.admin + '/' + route.import, importRouter);
    app.use(version + "/" + route.admin + '/' + route.tag, tagRouter);

    //user section
    app.use(version + "/" + route.user + '/' + route.category, userCategoryRouter);
};
export default routeManagement;
