import { Application } from "express";
import config from "../config";
import auth from "./auth";
import importRouter from "./import";
import tagRouter from "./tag";
const version = "/" + config.version;

const route = config.route;
const routeManagement = (app: Application) => {
    app.use(version + "/" + route.auth, auth);
    app.use(version + "/" + route.admin + '/' + route.import, importRouter);
    app.use(version + "/" + route.admin + '/' + route.tag, tagRouter);
};
export default routeManagement;
