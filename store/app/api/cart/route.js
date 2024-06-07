import { mongooseConnect } from "@/lib/mongoose";
import { Cart } from "@/models/cart";

export async function POST(req) {
  try {
    await mongooseConnect();

    const cartData = await req.json(); // Parse JSON body from the request
    const newCart = new Cart(cartData);
    await newCart.save();

    return new Response(JSON.stringify(newCart), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req) {
  const cart = await Cart.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(cart), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
