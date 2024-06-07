"use client";

import AddProduct from "@/components/admin/addproduct";
import AdminLayout from "@/components/admin/adminlayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditProduct({ params }) {
  const [productInfo, setProductInfo] = useState(null);

  console.log(params.editProduct);
  const productId = params.editProduct;

  useEffect(() => {
    if (!productId) return;
    axios.get("/api/products?id=" + productId).then((response) => {
      setProductInfo(response.data);
      console.log(response.data);
    });
  }, [productId]);
  return (
    <>
      <AdminLayout>
        <h1 className="mb-4 text-xl">Edit Product</h1>
        {productInfo && <AddProduct {...productInfo} />}
      </AdminLayout>
    </>
  );
}
