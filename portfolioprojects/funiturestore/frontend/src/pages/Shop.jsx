import useGetProducts from "../hooks/useGetProduct";
import { ClipLoader } from "react-spinners";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products, loading, error } = useGetProducts(
    "/api/products/getProducts"
  );

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
            shop with us
          </p>
        </div>

        <div>
          {loading && (
            <div className="flex justify-center items-center h-96">
              <ClipLoader color="#000" loading={true} size={50} />
            </div>
          )}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-4 gap-4 mx-4">
              {products.map((product) => (
                <Link
                  key={product._id}
                  to={`${product.category}/${product._id}`}
                >
                  <ProductCard
                    img={product.img}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
