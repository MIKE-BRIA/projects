// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../ProductCard";
// import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "@/store/slices/cart-slice";
// import { sendCartData } from "@/store/slices/actions/cart-actions";
// import { fetchCartData } from "@/store/slices/actions/cart-actions";

// // import sourceImage from "/public/images/image1.avif";

// export default function Mainproduct(product) {
//   const [productInfo, setProductInfo] = useState(null);
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const [cartExists, setCartExists] = useState(false);

//   const category = product.category;

//   useEffect(() => {
//     // Fetch cart data when the component mounts
//     dispatch(fetchCartData());
//   }, [dispatch]);

//   const addToCartHandler = async () => {
//     const productData = {
//       id: product._id,
//       title: product.title,
//       price: product.price,
//     };

//     dispatch(cartActions.addItemToCart(productData));

//     try {
//       if (cartExists) {
//         dispatch(updateCartData(cart));
//       }
//     } catch (error) {
//       console.error("Error updating cart:", error);
//     }
//   };

//   useEffect(() => {
//     if (cart.items.length > 0) {
//       dispatch(sendCartData(cart));
//       setCartExists(true);
//     }
//   }, [cart, dispatch]);

//   useEffect(() => {
//     console.log("product", product);
//     if (!category) return;
//     axios.get("/api/products?category=" + category).then((response) => {
//       setProductInfo(response.data);
//       // console.log(response.data);
//     });
//   }, [category]);

//   return (
//     <>
//       <section className="p-0 md:p-6 bg-gray-100 justify-center flex flex-col md:flex-row gap-4 max-w-7xl mx-auto items-stretch">
//         {product && (
//           <div className="flex-1 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden ">
//             <div className="md:flex-shrink-0 ">
//               <Image
//                 src={product.images?.[0]}
//                 width={500} // Set the width property
//                 height={500} // Set the height property
//                 alt={product.title}
//                 className=" md:h-xl h-96 p-4 object-cover w-full md:w-58"
//               />
//             </div>
//             <div className="p-8 flex flex-col justify-between">
//               <div>
//                 <h1 className="text-xl mb-4 md:mb-20 font-bold text-gray-900 ">
//                   {product.title}
//                 </h1>
//                 <h2 className="mt-2 text-2xl font-bold text-gray-600">
//                   USD: ${product.price}
//                 </h2>
//                 <p className="mt-4 text-gray-700">{product.description}</p>
//               </div>
//               <button
//                 onClick={addToCartHandler}
//                 className="mt-4 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-700 self-start"
//               >
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="flex-2 bg-white shadow-md rounded-lg p-8 flex justify-center text-gray-700">
//           <div>
//             <h1>DELIVERY & RETURNS</h1>
//             <p>Product details and return policy here.</p>
//           </div>
//         </div>
//       </section>
//       <section className="p-0 md:p-6 bg-gray-100 flex flex-col md:flex-row gap-4 max-w-7xl mx-auto min-h-screen">
//         {productInfo && (
//           <div>
//             <div className="mb-4 text-3xl">
//               <h1>Similar Products</h1>
//             </div>
//             <div className="flex flex-wrap justify-center p-4 bg-gray-200 rounded-lg">
//               {productInfo.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/slices/cart-slice";
import {
  sendCartData,
  fetchCartData,
} from "@/store/slices/actions/cart-actions";

export default function Mainproduct(product) {
  const [productInfo, setProductInfo] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartExists, setCartExists] = useState(false);

  const category = product.category;

  useEffect(() => {
    // Fetch cart data when the component mounts
    const fetchCart = async () => {
      const fetchedCart = await dispatch(fetchCartData());
      if (fetchedCart && fetchedCart.items && fetchedCart.items.length > 0) {
        setCartExists(true);
      }
    };
    fetchCart();
  }, [dispatch]);

  const addToCartHandler = async () => {
    const productData = {
      id: product._id,
      title: product.title,
      price: product.price,
    };

    dispatch(cartActions.addItemToCart(productData));

    try {
      if (cartExists) {
        await axios.put("/api/cart", cart);
      } else {
        await axios.post("/api/cart", cart);
        setCartExists(true);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  // useEffect(() => {
  //   if (cart.items.length > 0) {
  //     const sendCart = async () => {
  //       await dispatch(sendCartData(cart));
  //     };
  //     sendCart();
  //   }
  // }, [cart, dispatch]);

  useEffect(() => {
    console.log("product", product);
    if (!category) return;
    axios.get("/api/products?category=" + category).then((response) => {
      setProductInfo(response.data);
    });
  }, [category]);

  return (
    <>
      <section className="p-0 md:p-6 bg-gray-100 justify-center flex flex-col md:flex-row gap-4 max-w-7xl mx-auto items-stretch">
        {product && (
          <div className="flex-1 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden ">
            <div className="md:flex-shrink-0 ">
              <Image
                src={product.images?.[0]}
                width={500} // Set the width property
                height={500} // Set the height property
                alt={product.title}
                className=" md:h-xl h-96 p-4 object-cover w-full md:w-58"
              />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-xl mb-4 md:mb-20 font-bold text-gray-900 ">
                  {product.title}
                </h1>
                <h2 className="mt-2 text-2xl font-bold text-gray-600">
                  USD: ${product.price}
                </h2>
                <p className="mt-4 text-gray-700">{product.description}</p>
              </div>
              <button
                onClick={addToCartHandler}
                className="mt-4 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-700 self-start"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
        <div className="flex-2 bg-white shadow-md rounded-lg p-8 flex justify-center text-gray-700">
          <div>
            <h1>DELIVERY & RETURNS</h1>
            <p>Product details and return policy here.</p>
          </div>
        </div>
      </section>
      <section className="p-0 md:p-6 bg-gray-100 flex flex-col md:flex-row gap-4 max-w-7xl mx-auto min-h-screen">
        {productInfo && (
          <div>
            <div className="mb-4 text-3xl">
              <h1>Similar Products</h1>
            </div>
            <div className="flex flex-wrap justify-center p-4 bg-gray-200 rounded-lg">
              {productInfo.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
