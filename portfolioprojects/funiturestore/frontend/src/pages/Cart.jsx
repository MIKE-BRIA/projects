import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";

const Cart = () => {
  return (
    <>
      <div>
        <div className="relative mb-4">
          <img
            src="images/dining.jpg"
            alt="dining table image"
            className="h-52 w-full object-cover opacity-40"
          />
          <p className="absolute font-bold inset-0 flex items-center justify-center text-2xl text-black">
            Finish Your Shopping By Checking out
          </p>
        </div>
        <div className="flex mt-4 gap-4 p-6 mx-8">
          <div className="w-3/5">
            <CartItems />
          </div>
          <div className="w-2/5">
            <div className="w-full">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
