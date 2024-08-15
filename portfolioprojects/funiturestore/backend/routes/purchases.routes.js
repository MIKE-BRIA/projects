import express from "express";
import { addPurchase } from "../controllers/purchases.controller.js";

const router = express.Router();

router.post("/added", addPurchase);

export default router;
