// import Purchase from "../models/PurchaseModel.js";

// export async function addPurchase(req, res) {
//   try {
//     const { payerName, transactionId, amount, products } = req.body;

//     if (!payerName || !products || !amount)
//       return res
//         .status(404)
//         .json({ error: "all required entries are required" });

//     const newPurchase = await Purchase.create({
//       products: {
//         productId: products.id,
//         name: products.name,
//         quantity: products.quantity,
//         price: products.price,
//       },
//       totalAmount: amount,
//       paymentMethod: transactionId,
//     });

//     res
//       .status(200)
//       .json({ message: "Purchase done successfully", purchase: newPurchase });
//   } catch (error) {
//     console.log("Error in addPurchase: ", error.message);
//     return res.status(500).json({ error: error.message });
//   }
// }
import Purchase from "../models/PurchaseModel.js";

export async function addPurchase(req, res) {
  try {
    const { payerName, transactionId, amount, products, userId } = req.body;

    const convertedUserId = mongoose.Types.ObjectId(userId);

    if (!payerName || !products || !amount)
      return res
        .status(404)
        .json({ error: "all required entries are required" });

    console.log(products);

    if (!Array.isArray(products) || products.length === 0)
      return res.status(404).json({ error: "products array is required" });

    const productsArray = products.map((product) => {
      if (!product.id || !product.name || !product.quantity || !product.price)
        return res
          .status(404)
          .json({ error: "all product entries are required" });

      return {
        user: convertedUserId,
        productId: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      };
    });

    if (productsArray.length === 0)
      return res.status(404).json({ error: "products array is required" });

    const newPurchase = await Purchase.create({
      products: productsArray,
      totalAmount: amount,
      paymentMethod: transactionId,
    });

    res
      .status(200)
      .json({ message: "Purchase done successfully", purchase: newPurchase });
  } catch (error) {
    console.log("Error in addPurchase: ", error.message);
    return res.status(500).json({ error: error.message });
  }
}
