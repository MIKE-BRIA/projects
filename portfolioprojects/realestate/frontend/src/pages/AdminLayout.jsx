import { Outlet } from "react-router-dom";
import AdminNav from "../components/admin/AdminNav";

const AdminLayout = () => {
  return (
    <>
      <div className="flex mt-2">
        <AdminNav />
        <main className="bg-slate-100 rounded-xl flex-grow h-screen p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
