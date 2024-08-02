import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast.js";

const AdminProducts = () => {
  const showToast = useShowToast();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products/getProducts");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setProducts(data.reverse());
      } catch (error) {
        showToast("Error", "cannot retrieve products", "error");
      }
    }
    fetchProducts();
  }, [showToast]);
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1>All Products</h1>
          <Link
            to="add"
            className="flex items-center justify-center gap-2 p-2 bg-gray-500 text-white rounded-md hover:bg-blue-600"
          >
            <IoMdAddCircle size={24} />
            <button className=" font-medium">ADD NEW PRODUCT</button>
          </Link>
        </div>
        <div className="mt-4 scrollable-div">
          <table className="basic">
            <thead>
              <tr>
                <td>image</td>
                <td>name</td>
                <td>brand</td>
                <td>category</td>
                <td>quantity</td>
                <td>price</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="product-image"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`/admin/products/edit/${product._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </Link>
                    <button
                      className=" btn-cancel"
                      // onClick={() => deleteHouse(house)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
