import AddProduct from "@/components/admin/addproduct";
import AdminLayout from "@/components/admin/adminlayout";

export default function NewProduct() {
  return (
    <>
      <AdminLayout>
        <h1 className="mb-4 text-xl">Add New Products</h1>
        <AddProduct />
      </AdminLayout>
    </>
  );
}
