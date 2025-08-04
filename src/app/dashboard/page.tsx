// import React from "react";
// import Image from "next/image";
// import { LogOut, User, Edit } from "lucide-react";

// // Main dashboard overview page component
// const DashboardOverviewPage = () => {
//   // Mock user data with Pexels image URLs
//   const user = {
//     name: "Abraham Demsew",
//     membership: "VIP Member",
//     profilePic:
//       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     backgroundImg:
//       "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     activeBookings: 2,
//     loyaltyPoints: 150,
//   };

//   return (
//     <div className="flex-1 overflow-y-auto">
//       {/* User Profile Banner */}
//       <div className="rounded-xl overflow-hidden shadow-lg m-8 relative">
//         <div className="relative w-full h-[200px]">
//           <Image
//             src={user.backgroundImg}
//             alt="Hotel Lobby"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-md">
//                 <Image
//                   src={user.profilePic}
//                   alt="Profile"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="ml-6 text-white">
//                 <h3 className="text-3xl font-bold">{user.name}</h3>
//                 <span className="inline-block bg-white text-blue-600 text-xs font-bold px-3 py-1 mt-1 rounded-full">
//                   {user.membership}
//                 </span>
//                 <p className="mt-2 text-lg">Welcome back to your account!</p>
//               </div>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <button className="flex items-center justify-center w-36 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
//                 <LogOut className="mr-2 h-4 w-4" />
//                 Logout
//               </button>
//               <button className="flex items-center justify-center w-36 px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-md">
//                 <Edit className="mr-2 h-4 w-4" />
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dashboard Overview Section */}
//       <div className="mx-8 mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
//         <p className="text-gray-500 mt-2">
//           Your personal dashboard with quick access to your important details.
//         </p>
//       </div>

//       {/* Dashboard Cards */}
//       <div className="grid gap-6 mx-8 mb-8">
//         {/* Active Bookings Card */}
//         <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
//           <div className="relative w-32 h-20">
//             <Image
//               src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt="Booking Calendar"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-md"
//             />
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Active Bookings</h3>
//             <p className="text-gray-500 mt-1">
//               You have {user.activeBookings} active bookings.
//             </p>
//             <div className="flex space-x-4 mt-3 text-blue-600 font-semibold">
//               <a href="#" className="hover:underline">
//                 View
//               </a>
//               <a href="#" className="hover:underline">
//                 Modify
//               </a>
//               <a href="#" className="hover:underline">
//                 Cancel
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Loyalty Points Card */}
//         <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
//           <div className="relative w-32 h-20">
//             <Image
//               src="https://images.pexels.com/photos/4592233/pexels-photo-4592233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//               alt="Loyalty Points"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-md"
//             />
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">Loyalty Points</h3>
//             <p className="text-gray-500 mt-1">
//               You currently have {user.loyaltyPoints} loyalty points.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardOverviewPage;
import React from "react";
import Image from "next/image";
import {
  // LogOut,
  // User,
  // Edit,
  Calendar,
  Star,
  CreditCard,
  Bell,
  Settings,
  ArrowRight,
} from "lucide-react";

const DashboardOverviewPage = () => {
  const user = {
    name: "Abraham Demsew",
    membership: "VIP Member",
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    backgroundImg:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    activeBookings: 2,
    loyaltyPoints: 150,
    upcomingStay: {
      date: "Nov 15-20, 2023",
      room: "Deluxe Ocean View",
      hotel: "Grand Hotel, Maldives",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Profile Header with contained background image */}
      <div className="relative h-64 w-full overflow-hidden px-6">
        <div className="absolute inset-0 ">
          <Image
            src={user.backgroundImg}
            alt="Hotel Lobby"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto px-6 pt-8">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full border-4 border-white/90 shadow-lg">
                  <Image
                    src={user.profilePic}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-600/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {user.membership}
                    </span>
                    <span className="text-white/80 text-sm">Welcome back!</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Settings size={20} />
                </button>
                <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Bell size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content with solid white background */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Active Bookings
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.activeBookings}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Loyalty Points
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {user.loyaltyPoints}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm font-medium">
                    Payment Methods
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">3 Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Stay Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Upcoming Stay</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                View All <ArrowRight size={16} />
              </button>
            </div>

            {user.upcomingStay ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-48 w-full md:w-1/3 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                    alt="Upcoming Stay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {user.upcomingStay.hotel}
                  </h3>
                  <p className="text-gray-500 mt-1">{user.upcomingStay.room}</p>
                  <p className="text-gray-500 mt-1">{user.upcomingStay.date}</p>

                  <div className="flex gap-3 mt-6">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Booking Details
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Modify Reservation
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming stays booked</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="p-2 rounded-full bg-gray-100 text-gray-600">
                    <Bell size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Your booking #GH{item}234 has been confirmed
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
