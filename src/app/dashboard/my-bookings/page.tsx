import React from "react";
import Image from "next/image";

const MyBookingsPage = () => {
  // Mock data for bookings in a single hotel
  const hotelName = "Grand Hotel";

  const reservations = [
    {
      type: "Current Reservation",
      roomType: "Deluxe Suite",
      stayFrom: "10th Oct",
      stayTo: "15th Oct",
      status: "Confirmed",
      imageUrl:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      actions: ["View", "Modify", "Cancel"],
    },
    {
      type: "Upcoming Reservation",
      roomType: "Standard Room",
      stayFrom: "20th Oct",
      stayTo: "25th Oct",
      status: "Confirmed",
      imageUrl:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      actions: ["View", "Modify", "Cancel"],
    },
    {
      type: "Past Reservation",
      roomType: "Luxury King Room",
      checkedOut: "5th Oct",
      imageUrl:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      actions: ["View Invoice"],
    },
  ];

  const recentBookings = [
    {
      status: "Completed",
      imageUrl:
        "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      roomType: "Executive Suite",
      stayFrom: "June 2024",
    },
    {
      status: "Pending",
      imageUrl:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      roomType: "Twin Room",
      stayFrom: "September 2024",
    },
    {
      status: "Cancelled",
      imageUrl:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      roomType: "Deluxe King Room",
      stayFrom: "January 2024",
    },
  ];

  return (
    <div className="p-8 font-['Inter']">
      {/* My Bookings Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">My Bookings</h2>
        <p className="text-gray-500 mt-2">
          Manage your room reservations at {hotelName}.
        </p>
      </div>

      {/* Reservation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col"
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src={reservation.imageUrl}
                alt={reservation.type}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              {reservation.type}
            </h3>
            {reservation.roomType && (
              <p className="text-gray-500 mt-1">
                Room Type: {reservation.roomType}
              </p>
            )}
            {reservation.stayFrom && reservation.stayTo && (
              <p className="text-gray-500">
                Stay from: {reservation.stayFrom} to {reservation.stayTo}
              </p>
            )}
            {reservation.status && (
              <p className="text-gray-500">
                Status:{" "}
                <span className="font-semibold text-green-600">
                  {reservation.status}
                </span>
              </p>
            )}
            {reservation.checkedOut && (
              <p className="text-gray-500">
                Checked out on: {reservation.checkedOut}
              </p>
            )}

            <div className="flex space-x-4 mt-4 text-blue-600 font-semibold">
              {reservation.actions.map((action, actionIndex) => (
                <a
                  key={actionIndex}
                  href="#"
                  className="hover:underline text-sm"
                >
                  {action}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Recent Bookings</h2>
        <p className="text-gray-500 mt-2">
          Your recent stays and reservations at {hotelName}.
        </p>
      </div>

      {/* Recent Booking Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentBookings.map((booking, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg">
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              <Image
                src={booking.imageUrl}
                alt={booking.roomType}
                layout="fill"
                objectFit="cover"
              />
              <span
                className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full
                               ${
                                 booking.status === "Completed"
                                   ? "bg-green-500"
                                   : booking.status === "Pending"
                                   ? "bg-yellow-500"
                                   : "bg-red-500"
                               }`}
              >
                {booking.status}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                {booking.roomType}
              </h3>
              <p className="text-gray-500 mt-1">Stayed: {booking.stayFrom}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
