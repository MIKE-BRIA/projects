import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const AdminProducts = () => {
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
      </div>
    </>
  );
};

export default AdminProducts;
