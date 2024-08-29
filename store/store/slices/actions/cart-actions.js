import axios from "axios";
import { cartActions } from "../cart-slice";

export function sendCartData(cart) {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await axios.post("/api/cart", cart);

      if (response !== 201) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchCartData() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("/api/cart");

      if (response !== 200) {
        throw new Error("could not fetch cart data");
      }

      console.log(response.data);
      return response.data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateCartData(cart) {
  return async (dispatch) => {
    const updateData = async () => {
      const response = await axios.put("/api/cart", cart);

      if (response !== 200) {
        throw new Error("could not update cart data");
      }
    };

    try {
      await updateData();
    } catch (err) {
      console.log(err);
    }
  };
}
