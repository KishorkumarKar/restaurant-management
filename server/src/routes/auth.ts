import express from "express";
import * as AuthController from "../controllers/authController";
import register from "../controllers/registerController";
const router = express.Router();

router.route("/login").post(AuthController.login);
router.route("/logout").get(AuthController.logout);
router.route("/register").post(register);

export default router;