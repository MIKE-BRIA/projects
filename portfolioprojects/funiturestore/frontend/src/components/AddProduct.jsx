import { useNavigate } from "react-router-dom";
import InputArea from "./InputArea";
import { FcAddImage } from "react-icons/fc";
import { useRef } from "react";
import usePreviewImg from "../hooks/usePreviewImg";

const AddProduct = () => {
  const navigate = useNavigate();
  const imageRef = useRef();
  const { handleImageChange, imgUrl } = usePreviewImg();

  function handleCancel() {
    navigate("/admin/products");
  }
  return (
    <>
      <section>
        <h1>Adding Product</h1>
        <div className="bg-slate-100 mt-4 rounded-lg">
          <div className="flex p-4 gap-6">
            <div className="flex-1">
              <form action="">
                <InputArea
                  title={"Product Name"}
                  type={"text"}
                  placeholder={"Type Product Name here"}
                />
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-700 font-semibold">
                    Description
                  </label>
                  <textarea
                    placeholder="Type description here"
                    className="px-4 py-2 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                </div>

                <InputArea
                  title={"Category"}
                  type={"text"}
                  placeholder={"Type Category here"}
                />
                <InputArea
                  title={"Brand Name"}
                  type={"text"}
                  placeholder={"Type brand name here"}
                />
                <input
                  type="file"
                  hidden
                  ref={imageRef}
                  onChange={handleImageChange}
                />
                <button
                  className="flex cursor-pointer gap-2 my-2 border border-1 border-blue-200 p-2 rounded-lg"
                  onClick={() => imageRef.current.click()}
                >
                  <FcAddImage size={24} />
                  <label htmlFor=""> Add Product Image</label>
                </button>
                <div className="flex gap-2">
                  <InputArea
                    title={"Stock Quantity"}
                    type={"text"}
                    placeholder={"Type brand name here"}
                    className="flex-1"
                  />
                  <InputArea
                    title={"Sale Price"}
                    type={"text"}
                    placeholder={"Type brand name here"}
                    className="flex-1"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="mb-2 font-semibold text-gray-700">Image Preview</p>
              <div className="border border-gray-300 rounded-lg p-4 w-full h-full flex items-center justify-center bg-white">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt="Preview"
                    className="max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-gray-500">No image selected</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
