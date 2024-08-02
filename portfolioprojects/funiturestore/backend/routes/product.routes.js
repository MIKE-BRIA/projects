import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/getProduct/:id", getProduct);
router.get("/getProducts", getProducts);
router.post("/addProduct", protectRoute, addProduct);
router.delete("/removeProduct/:id", protectRoute, deleteProduct);
router.put("/updateProduct/:id", protectRoute, updateProduct);

export default router;
