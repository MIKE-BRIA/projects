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

export async function PUT(req) {
  try {
    await mongooseConnect();

    const cartData = await req.json();
    const existingCart = await Cart.findOne({ userId: cartData.userId });

    if (!existingCart) {
      return new Response(JSON.stringify({ error: "Cart does not exist" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    existingCart.products = existingCart.products.concat(cartData.products);
    await existingCart.save();

    return new Response(JSON.stringify(existingCart), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let status = 500;
    let message = "Internal Server Error";

    return new Response(JSON.stringify({ error: message }), {
      status: status,
      headers: { "Content-Type": "application/json" },
    });
  }
}
