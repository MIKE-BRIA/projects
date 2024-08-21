import Cart from "../models/cartModel.js";

export async function addToCart(req, res) {
  try {
    const { name, img, price, quantity, user, productId } = req.body;

    if (!name || !img || !quantity || !price)
      return res
        .status(400)
        .json({ error: "all product required fields must be provided" });

    const cartItem = await Cart.create({
      name,
      img,
      price,
      quantity,
      user,
      productId,
    });

    return res
      .status(200)
      .json({ message: "cart added successfully", cartItem: cartItem });
  } catch (error) {
    console.log("error in addtocart: ", error.message);
    return res.status(500).json({ error: error.message });
  }
}

export async function getCart(req, res) {
  try {
    const { userId } = req.params;
    const cart = await Cart.find({ user: userId });
    res.status(200).json(cart);
  } catch (error) {
    console.log("error in getCart: ", error.message);
    return res.status(500).json({ error: error.message });
  }
}
