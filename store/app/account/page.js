import Login from "@/components/signin";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Account from "@/components/accountpage";

export default async function Accounthome() {
  const session = await getServerSession(options);
  return (
    <>
      {!session && <Login />}
      <Account />
    </>
  );
}
