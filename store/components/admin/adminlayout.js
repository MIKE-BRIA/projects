import AdminNav from "./adminnav";

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="bg-slate-100 rounded-r-xl flex-grow h-screen p-4">
          {children}
        </div>
      </div>
    </>
  );
}
