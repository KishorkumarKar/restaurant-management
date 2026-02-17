import express from "express";
import * as ImportController from "../controllers/importController";
import { multerMiddleWare } from "../middlewares/importMiddleware";
import { validateUser } from "../middlewares/authMiddleware";
const router = express.Router();
router.route("/category").post(validateUser, multerMiddleWare("upload_file"), ImportController.importCategory);
router.route("/tag").post(validateUser, multerMiddleWare("upload_file"), ImportController.importTag);
router.route("/restaurant").post(validateUser, multerMiddleWare("upload_file"), ImportController.importRestaurant);
export default router;