import express from "express";
import * as AuthController from "../controllers/authController";
import register from "../controllers/registerController";
import { validateUser } from "../middlewares/authMiddleware";
const router = express.Router();

router.route("/login").post(AuthController.login);
router.route("/logout").get(AuthController.logout);
router.route("/validate").get(validateUser,AuthController.validate);
router.route("/register").post(register);

export default router;