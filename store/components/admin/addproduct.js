"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddProduct({
  _id,
  title: existingTitle,
  description: existingDescription,
  category: existingcategory,
  price: existingPrice,
  images: existingImages,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [category, setCategory] = useState(existingcategory || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
      category,
      images,
    };

    console.log(data);
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }

    setGoToProducts(true);
  }

  useEffect(() => {
    if (goToProducts) {
      router.push("/admin/products");
    }
  }, [goToProducts, router]);

  //*uploading images
  async function uploadImages(e) {
    const files = e.target?.files;

    if (files?.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/images", data);

      setImages((oldImages) => {
        return [...oldImages, ...res.data];
      });
    }
  }

  function handlecancel(e) {
    e.preventDefault();
    setGoToProducts(true);
  }

  return (
    <>
      <form onSubmit={saveProduct}>
        <label htmlFor="">Product name</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Product name"
        />
        <label htmlFor="">Category</label>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="">Price</label>
        <input
          type="text"
          placeholder="Price in dollars($)"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label htmlFor="">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter a Description of the product"
        ></textarea>
        <div className="mb-2 flex  flex-wrap flex-row gap-1">
          {Array.isArray(images) && images.length > 0 ? (
            images.map((link) => (
              <div className="h-24" key={link}>
                <img src={link} alt="" className="rounded-lg h-24" />
              </div>
            ))
          ) : (
            <p className="justify-center">No image selected</p>
          )}

          <label
            htmlFor="image"
            className="w-32 h-32 cursor-pointer border flex flex-col items-center rounded-lg bg-gray-200 justify-center text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Upload</div>
            <input
              id="image"
              name="image"
              type="file"
              onChange={uploadImages}
              className="hidden"
              // accept="png, jpeg"
            />
          </label>
        </div>
        <div className="flex gap-3 justify-end">
          <button type="button" onClick={handlecancel} className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
