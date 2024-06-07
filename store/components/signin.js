import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Login() {
  // const session = await getServerSession(options);
  const session = await getServerSession(options);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <article className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            Signin using your Google account
          </h2>
          <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            {session ? (
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </button>
        </article>
      </div>
    </>
  );
}
