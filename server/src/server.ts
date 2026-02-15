import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const env = dotenv.config();
import config from "./config";
import indexRoute from "./routes";
import mongoose from "./config/mongooseConfig";
import logger from "./util/loggerUtil";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

const app = express();


//---------deb Connect-------
mongoose();
//---------deb Connect-------
//--------cors-------
app.use(cors({
    origin: config.frontendUrl, // your Next.js app
    methods: config.allowedMethods,
    allowedHeaders: config.allowedHeaders,
    credentials: true,
}));
//--------cors-------
//---------middleware-------
app.use(express.json());
//---------middleware-------
//---------Route-------
indexRoute(app);


//---------error handler-------
app.use(errorHandlerMiddleware);
//---------error handler-------

const collectServer = async () => {
    try {
        app
            .listen(config.port, () => {
                logger.info(`Express is listening at http://localhost:${config.port}`);
            })
            .on("error", (err) => {
                logger.info(`Error on serve listening ${err}`);
            });
    } catch (error) {
        console.error("server Error:- " + error);
    }
};
collectServer();


//unhandled promise rejection
process.on("unhandledRejection", (reason, promise) => {
    logger.error("Unhandled Rejection at", promise, "reason:", reason);
});