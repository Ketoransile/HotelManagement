import React from "react";
import Image from "next/image";
import { LogOut, User, Edit } from "lucide-react";

// Main dashboard overview page component
const DashboardOverviewPage = () => {
  // Mock user data with Pexels image URLs
  const user = {
    name: "Abraham Demsew",
    membership: "VIP Member",
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    backgroundImg:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    activeBookings: 2,
    loyaltyPoints: 150,
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {/* User Profile Banner */}
      <div className="rounded-xl overflow-hidden shadow-lg m-8 relative">
        <div className="relative w-full h-[200px]">
          <Image
            src={user.backgroundImg}
            alt="Hotel Lobby"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-md">
                <Image
                  src={user.profilePic}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="ml-6 text-white">
                <h3 className="text-3xl font-bold">{user.name}</h3>
                <span className="inline-block bg-white text-blue-600 text-xs font-bold px-3 py-1 mt-1 rounded-full">
                  {user.membership}
                </span>
                <p className="mt-2 text-lg">Welcome back to your account!</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-center w-36 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
              <button className="flex items-center justify-center w-36 px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-md">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Overview Section */}
      <div className="mx-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-gray-500 mt-2">
          Your personal dashboard with quick access to your important details.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-6 mx-8 mb-8">
        {/* Active Bookings Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
          <div className="relative w-32 h-20">
            <Image
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Booking Calendar"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Active Bookings</h3>
            <p className="text-gray-500 mt-1">
              You have {user.activeBookings} active bookings.
            </p>
            <div className="flex space-x-4 mt-3 text-blue-600 font-semibold">
              <a href="#" className="hover:underline">
                View
              </a>
              <a href="#" className="hover:underline">
                Modify
              </a>
              <a href="#" className="hover:underline">
                Cancel
              </a>
            </div>
          </div>
        </div>

        {/* Loyalty Points Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
          <div className="relative w-32 h-20">
            <Image
              src="https://images.pexels.com/photos/4592233/pexels-photo-4592233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Loyalty Points"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Loyalty Points</h3>
            <p className="text-gray-500 mt-1">
              You currently have {user.loyaltyPoints} loyalty points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
