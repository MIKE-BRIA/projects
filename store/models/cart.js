import { Schema, model, models } from "mongoose";

const CartSchema = new Schema(
  {
    items: [
      {
        id: String,
        title: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalQuantity: Number,
    totalPrice: Number,
  },
  {
    timestamps: true,
  }
);

export const Cart = models.Cart || model("Cart", CartSchema);
