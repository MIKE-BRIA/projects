import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

router.get("/signup", userController.signup);

export default router;
