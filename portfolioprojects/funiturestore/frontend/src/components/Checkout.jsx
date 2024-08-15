import { useSelector } from "react-redux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUserDetails from "../hooks/useUserDetails";

const Checkout = () => {
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const selectedProducts = useSelector((state) => state.cart.cartItems);
  const { userDetails } = useUserDetails();
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("products", selectedProducts);
    console.log("userdetails", userDetails);
  });

  const initialOptions = {
    "client-id":
      "ASoL3yDsjHTdhXjmbdbw7hp3Ikxu9St5Yh8G31SVAOPhFmoSR_vhlER6mu07cNd1QztT6ndIuN3FaZo3",
    currency: "EUR",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="bg-yellow-100 p-4 rounded-md">
        <h2>CART SUMMARY</h2>
        <div className="flex justify-between my-4">
          <p className="text-lg">Subtotal</p>
          <p className="text-xl">{formattedPrice}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="paypal-button-container">
            <PayPalButtons
              style={{
                layout: "vertical",
                color: "blue",
                shape: "rect",
                label: "checkout",
                height: 55,
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice.toFixed(2),
                        currency_code: "EUR",
                      },
                    },
                  ],
                  application_context: {
                    shipping_preference: "NO_SHIPPING",
                    user_action: "PAY_NOW",
                  },
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const payerName = details.payer.name.given_name;
                  const transactionId = details.id;
                  const amount = details.purchase_units[0].amount.value;

                  fetch("/api/purchases/added", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      payerName,
                      transactionId,
                      amount,
                      products: selectedProducts,
                      userId: userDetails?._id,
                    }),
                  }).then(() => {
                    navigate("/payment-success", {
                      state: { payerName, transactionId, amount: `€${amount}` },
                    });
                  });
                });
              }}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Checkout;
