import { Link } from "react-router-dom";
import RangeCard from "../components/RangeCard";
import useGetProducts from "../hooks/useGetProduct";
import ProductCard from "../components/productCard";

const Home = () => {
  const { products, loading, error } = useGetProducts(
    "/api/products/getProducts"
  );

  const displayedProducts = products.slice(0, 8);

  return (
    <>
      <div className="relative">
        <img
          src="/images/housebadge.jpg"
          className="w-full object-cover"
          alt="House Badge"
          style={{ height: "500px" }}
        />
        <div className="absolute top-28 right-28 w-96 m-4 p-4 bg-white bg-opacity-80 rounded shadow-lg">
          <p className="font-mono text-black">NEW ARRIVAL</p>
          <h1 className="my-3 text-yellow-600">Discover our New Collection</h1>
          <p className="my-3 text-lg font-medium text-black">
            Do shopping for your house furniture and if you are not able to
            style your home we are willing to be your interior designers
          </p>
          <Link to="/shop">
            <button className="btn-primary">Shop with us</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-center my-4 text-black">Browse The Range </h1>
          <p className="text-center my-4 text-lg text-black">
            Choose from a selection of our products for your house or office
          </p>
        </div>
        <div className="flex gap-2 mx-14">
          <RangeCard source={"images/dining.jpg"} title={"Dining"} />
          <RangeCard source={"images/living.jpg"} title={"Living"} />
          <RangeCard source={"images/bedroom.jpg"} title={"Bedroom"} />
          <RangeCard source={"images/kitchen.jpg"} title={"Kitchen"} />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center my-6 text-black">Our Products</h1>
        </div>
      </div>
      {/* //map some products here */}
      {/* <p className="text-black">Home</p> */}
      <div>
        {loading && (
          <p className="text-center text-black">Loading products...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-4 gap-4 mx-4">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product._id}
                img={product.img}
                name={product.name}
                brand={product.brand}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
