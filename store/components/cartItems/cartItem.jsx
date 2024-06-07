"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cart-slice";
import { useEffect } from "react";
import { fetchCartData } from "@/store/slices/actions/cart-actions";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  useEffect(() => {
    // Fetch cart data when the component mounts
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems
        .slice()
        .reverse()
        .map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-300 py-2"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => removeItemHandler(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold">Total Quantity: {totalQuantity}</p>
          <p className="font-semibold">Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}
