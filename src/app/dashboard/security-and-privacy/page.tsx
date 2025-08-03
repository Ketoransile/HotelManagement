"use client";
import React, { useState } from "react";
import {
  Lock,
  History,
  Download,
  ShieldCheck,
  Mail,
  Smartphone,
  ArrowRight,
  XCircle,
} from "lucide-react";

const SecurityPrivacyPage = () => {
  // State to manage the two-factor authentication toggle
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Mock data for recent login activity
  const recentActivity = [
    {
      device: "MacBook Pro",
      location: "New York, USA",
      time: "2 hours ago",
      ipAddress: "203.0.113.45",
    },
    {
      device: "iPhone 15",
      location: "London, UK",
      time: "1 day ago",
      ipAddress: "198.51.100.22",
    },
    {
      device: "Samsung Galaxy S23",
      location: "Tokyo, Japan",
      time: "3 days ago",
      ipAddress: "203.0.113.12",
    },
  ];

  return (
    <div className="p-8 font-['Inter']">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Security & Privacy</h2>
        <p className="text-gray-500 mt-2">
          Manage your account security and privacy settings.
        </p>
      </div>

      {/* Security & Privacy Sections */}
      <div className="space-y-8">
        {/* Change Password Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Lock className="text-gray-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Change Password</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Update your password to keep your account secure.
          </p>
          <div className="grid gap-4 max-w-lg">
            <input
              type="password"
              placeholder="Current password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
            <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
              Update Password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-gray-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">
              Two-Factor Authentication
            </h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Add an extra layer of security to your account with 2FA.
          </p>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              {twoFactorEnabled ? (
                <Mail className="h-6 w-6 text-green-500 mr-4" />
              ) : (
                <Smartphone className="h-6 w-6 text-yellow-500 mr-4" />
              )}
              <div>
                <p className="font-semibold text-gray-800">
                  Status: {twoFactorEnabled ? "Enabled" : "Disabled"}
                </p>
                <p className="text-sm text-gray-500">
                  {twoFactorEnabled
                    ? "Your account is protected."
                    : "Enable 2FA to improve your account security."}
                </p>
              </div>
            </div>
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md ${
                twoFactorEnabled
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {twoFactorEnabled ? "Disable" : "Enable"}
            </button>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <History className="text-gray-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">
              Recent Login Activity
            </h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Review recent logins to your account. Log out of suspicious
            sessions.
          </p>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <ArrowRight className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {activity.device} - {activity.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.time} from {activity.ipAddress}
                    </p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 transition-colors duration-200 text-sm">
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Data & Privacy Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Download className="text-gray-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">Data & Privacy</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Request a copy of your personal data stored on our platform.
          </p>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
            Download My Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPrivacyPage;
