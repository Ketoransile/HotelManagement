import React from "react";
// import { User, Lock, Edit } from "lucide-react";

const ProfileSettingsPage = () => {
  return (
    <div className="p-8 font-['Inter']">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Profile Settings</h2>
        <p className="text-gray-500 mt-2">Update your personal information.</p>
      </div>

      {/* Profile Settings Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
        <div className="grid gap-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Abraham"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="abraham@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              defaultValue="(123) 456-7890"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              defaultValue="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 shadow-md">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
