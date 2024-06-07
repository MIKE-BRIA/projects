// pages/account.js

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
// import Image from "next/image";

export default async function Account() {
  const session = await getServerSession(options);

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">
          Please log in to access your account
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* User Info Section */}
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 mr-4">
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="User Avatar"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Hello, <b className="uppercase">{session?.user?.name}</b>
            </h1>
            <p className="text-gray-600">{session?.user?.email}</p>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <span>Change Password</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <span>Update Email</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <span>Manage Subscriptions</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Other Information</h2>
          <div className="p-4 bg-gray-100 rounded-md">
            <p>
              Additional information about the user or related content can go
              here.
            </p>
          </div>
        </div>

        {/* Log Out Section */}
        <div className="text-center">
          <button
            // onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md "
          >
            {session ? (
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            ) : (
              <Link href="/api/auth/signin?callbackUrl=/">Login</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
