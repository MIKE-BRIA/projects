import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/getProduct/:id", getProduct);
router.post("/addProduct", protectRoute, addProduct);
router.delete("/removeProduct/:id", protectRoute, deleteProduct);
router.put("/updateProduct/:id", protectRoute, updateProduct);

export default router;
