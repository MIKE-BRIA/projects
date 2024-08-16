import express from "express";
import {
  addPurchase,
  getAllPurchase,
} from "../controllers/purchases.controller.js";

const router = express.Router();

router.post("/added", addPurchase);
router.get("/getPurchases", getAllPurchase);

export default router;
