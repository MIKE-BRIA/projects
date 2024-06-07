import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String },
    description: String,
    price: Number,
    category: String,
    images: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);
