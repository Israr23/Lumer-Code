"use client";
import Image from "next/image";
import placeholder from "/src/app/public/placeholder.png";
import withAuth from "/src/app/privateRoute/withAuth";

const Dashboard = () => {
  console.log((window.location.href.split("/")[3] = "dashboard"), "currentUrl");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-green-600">Foody.</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Dashboard</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Order List</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Analytics</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Foods</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Calendar</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Chat</span>
            </li>
            <li className="flex items-center p-4 text-gray-600 hover:bg-gray-200">
              <span className="ml-3">Wallet</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Good Morning!</h2>
            <p className="text-gray-500">Hi, Sara. Welcome back!</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Sara hike</p>

              <Image
                src={placeholder} // Replace with actual path to the profile image
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">75</h3>
            <p className="text-gray-500">Total Orders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">357</h3>
            <p className="text-gray-500">Total Delivered</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">65</h3>
            <p className="text-gray-500">Total Canceled</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">$128</h3>
            <p className="text-gray-500">Total Revenue</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default withAuth(Dashboard);
