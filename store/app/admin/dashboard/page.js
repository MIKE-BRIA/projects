import { getServerSession } from "next-auth";
import AdminLayout from "@/components/admin/adminlayout";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Dashboard() {
  const session = await getServerSession(options);
  return (
    <AdminLayout>
      {session && (
        <p>
          Hello admin <b>{session?.user?.name}</b>
        </p>
      )}
      <p>dashboard</p>
    </AdminLayout>
  );
}
