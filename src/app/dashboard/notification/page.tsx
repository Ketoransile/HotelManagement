"use client";
import React, { useState } from "react";

import { Bell, CreditCard } from "lucide-react";

const NotificationPage = () => {
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(true);
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState(false);

  return (
    <div className="p-8 font-['Inter']">
      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Notifications</h2>
        <p className="text-gray-500 mt-2">
          Manage your notifications and preferences.
        </p>
      </div>

      {/* Notification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Check-in Reminder Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <Bell size={64} className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Check-in Reminder</h3>
          <p className="text-gray-500 mt-2">
            Your check-in is tomorrow at 2:00 PM.
          </p>
        </div>

        {/* Pending Payment Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <CreditCard size={64} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Pending Payment</h3>
          <p className="text-gray-500 mt-2">
            You have a pending payment for your last order.
          </p>
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Notification Preferences
        </h2>
        <p className="text-gray-500 mt-2">
          Choose how you receive alerts and updates.
        </p>
      </div>

      {/* Toggles for preferences */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-6">
        {/* Email Alerts */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">
              Email Alerts
            </h3>
            <p className="text-gray-500 text-sm">
              Receive important updates and reminders via email.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setEmailAlertsEnabled(true)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                emailAlertsEnabled
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              On
            </button>
            <button
              onClick={() => setEmailAlertsEnabled(false)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                !emailAlertsEnabled
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Off
            </button>
          </div>
        </div>

        {/* SMS Alerts */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">SMS Alerts</h3>
            <p className="text-gray-500 text-sm">
              Get time-sensitive notifications sent to your phone.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSmsAlertsEnabled(true)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                smsAlertsEnabled
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              On
            </button>
            <button
              onClick={() => setSmsAlertsEnabled(false)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                !smsAlertsEnabled
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
