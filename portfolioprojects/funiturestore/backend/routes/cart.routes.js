import express from "express";
import { addToCart, getCart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/addtocart", addToCart);
router.get("/getCart/:userId", getCart);

export default router;
