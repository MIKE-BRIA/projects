import Product from "../models/productModel.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

export async function addProduct(req, res) {
  try {
    const { name, price, description, category, quantity, brand } = req.body;
    let { img } = req.body;

    if (!name || !price || !description || !category)
      return res.status(404).json({ error: "Enter all required fields" });

    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }

    const newProduct = await Product.create({
      name,
      price,
      description,
      category,
      img,
      quantity,
      brand,
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in addProduct: ", error.message);
  }
}

export async function getProduct(req, res) {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({
        error: "The Product id provided does not exists in our catalogue",
      });

    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in getProduct: ", error.message);
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({
        error: "Product id provided does not exists in the catalogue",
      });

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in deleteProduct: ", error.message);
  }
}

export async function updateProduct(req, res) {
  try {
    const { name, price, description, category, productPic, quantity } =
      req.body;
    const { id } = req.params;

    if (!name || !price || !description || !category) {
      return res.status(400).json({ error: "Enter all required fields" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category, productPic, quantity },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
    console.log("Error in updateProduct", error.message);
  }
}
