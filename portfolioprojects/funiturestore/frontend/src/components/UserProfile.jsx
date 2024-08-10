import { useState } from "react";
// import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import OverView from "./OverView";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="images/dining.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 object-cover border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-semibold">John Doe</h1>
          <button className="mt-2 flex items-center text-blue-500">
            <FaUserEdit className="mr-1" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs for Navigation */}
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 p-2 ${
            activeTab === "overview"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <FaUserEdit /> Overview
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 p-2 ${
            activeTab === "orders"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <HiOutlineClipboardList /> Orders
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={`flex items-center gap-2 p-2 ${
            activeTab === "saved"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <AiOutlineHeart /> Saved Items
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 p-2 ${
            activeTab === "settings"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <CiSettings /> Settings
        </button>
      </div>

      {/* Content Sections */}
      <div>
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Overview</h2>
            <p className="mb-2">
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 1234 Elm Street, Springfield
            </p>
            <p className="mb-2">
              <strong>Contact Number:</strong> (123) 456-7890
            </p>
            <OverView />
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
            <div className="border p-4 mb-4 rounded">
              <h3 className="text-xl font-semibold">Order #12345</h3>
              <p>
                <strong>Date:</strong> August 1, 2024
              </p>
              <p>
                <strong>Status:</strong> Shipped
              </p>
              <p>
                <strong>Total:</strong> $120.00
              </p>
            </div>
            <div className="border p-4 mb-4 rounded">
              <h3 className="text-xl font-semibold">Order #12346</h3>
              <p>
                <strong>Date:</strong> August 3, 2024
              </p>
              <p>
                <strong>Status:</strong> Delivered
              </p>
              <p>
                <strong>Total:</strong> $75.00
              </p>
            </div>
          </div>
        )}

        {activeTab === "saved" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Saved Items</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="border p-4 rounded">
                <img
                  src="/product1.jpg"
                  alt="Product 1"
                  className="w-full h-40 object-cover mb-2"
                />
                <p className="font-semibold">Product Name 1</p>
                <p>$50.00</p>
              </div>
              <div className="border p-4 rounded">
                <img
                  src="/product2.jpg"
                  alt="Product 2"
                  className="w-full h-40 object-cover mb-2"
                />
                <p className="font-semibold">Product Name 2</p>
                <p>$30.00</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1">
                  <strong>Change Email:</strong>
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">
                  <strong>Change Password:</strong>
                </label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
