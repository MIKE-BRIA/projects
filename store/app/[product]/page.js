"use client";
import Mainproduct from "@/components/product/mainproduct";
import { useState, useEffect } from "react";
import axios from "axios";

export default function IndividualProduct({ params }) {
  const [productInfo, setProductInfo] = useState();

  const productId = params.product;
  useEffect(() => {
    if (!productId) return;
    axios.get("/api/products?id=" + productId).then((response) => {
      setProductInfo(response.data);
      console.log(response.data);
    });
  }, [productId]);
  return (
    <>
      <Mainproduct {...productInfo} />
    </>
  );
}
