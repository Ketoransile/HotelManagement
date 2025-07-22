// components/BookingForm.js
"use client";
import React, { useState } from "react";

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [addons, setAddons] = useState({
    breakfast: false,
    airportPickup: false,
  });

  const handleAddonToggle = (addonName) => {
    setAddons((prevAddons) => ({
      ...prevAddons,
      [addonName]: !prevAddons[addonName],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Information:", {
      checkInDate,
      checkOutDate,
      numberOfGuests,
      addons,
    });
    alert("Checking Availability!");
  };

  const handleCancel = () => {
    console.log("Booking cancelled.");
    setCheckInDate("");
    setCheckOutDate("");
    setNumberOfGuests("");
    setAddons({
      breakfast: false,
      airportPickup: false,
    });
  };

  return (
    <div className="max-w-md  bg-white p-2  mt-12 ">
      <h1 className="text-3xl font-bold my-10">Booking Information</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Check-in Date */}
        <div>
          <label
            htmlFor="checkInDate"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Check-in Date
          </label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label
            htmlFor="checkOutDate"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label
            htmlFor="numberOfGuests"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Number of Guests
          </label>
          <input
            type="number"
            id="numberOfGuests"
            placeholder="1"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>

        {/* Add-ons */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Add-ons
          </label>
          <div className="flex flex-wrap gap-4 justify-center">
            {" "}
            {/* Added justify-center for better alignment */}
            <button
              type="button"
              onClick={() => handleAddonToggle("breakfast")}
              className={`flex-1 min-w-[120px] px-5 py-3 rounded-xl border-2 font-medium text-center transition duration-300 ease-in-out transform hover:scale-105 ${
                addons.breakfast
                  ? "bg-blue-600 text-white border-blue-700 shadow-md"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Breakfast
            </button>
            <button
              type="button"
              onClick={() => handleAddonToggle("airportPickup")}
              className={`flex-1 min-w-[120px] px-5 py-3 rounded-xl border-2 font-medium text-center transition duration-300 ease-in-out transform hover:scale-105 ${
                addons.airportPickup
                  ? "bg-blue-600 text-white border-blue-700 shadow-md"
                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Airport Pickup
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start gap-4 pt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200 ease-in-out font-semibold"
          >
            Check Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
