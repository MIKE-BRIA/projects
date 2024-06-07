"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./spinner";
// import categorysection from "./CategorySection";

export default function ProductHome() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      const product = response.data;
      setProducts(product);
    });
  }, []);

  const CategorySection = ({ title, products }) => (
    <div>
      <div className="flex justify-between w-full m-auto bg-slate-500 p-4">
        <h1>{title}</h1>
        <p>See more</p>
      </div>
      <div className="flex flex-row flex-wrap p-2 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  const productsByCategory = (category) =>
    products.filter((products) => products.category === category).slice(0, 5);

  return (
    <div className="bg-slate-100 min-h-screen">
      {!products ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <CategorySection
            title="Electronics"
            products={productsByCategory("electronics")}
          ></CategorySection>

          <CategorySection
            title="Books"
            products={productsByCategory("books")}
          />
          <CategorySection
            title="Others"
            products={productsByCategory("other")}
          />
        </>
      )}
    </div>
  );
}
