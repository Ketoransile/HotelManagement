import React from "react";
import { FileText, CreditCard } from "lucide-react";

const InvoicesAndPaymentsPage = () => {
  return (
    <div className="p-8 font-['Inter']">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Invoices & Payments
        </h2>
        <p className="text-gray-500 mt-2">
          Your invoices and saved payment methods.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid gap-6">
        {/* Download Invoices Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
          <FileText size={64} className="text-gray-400" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Download Invoices
            </h3>
            <p className="text-gray-500 mt-1">
              You can download your receipts for bookings and food orders.
            </p>
            <button className="mt-3 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
              Download
            </button>
          </div>
        </div>

        {/* Saved Payment Methods Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6">
          <CreditCard size={64} className="text-gray-400" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Saved Payment Methods
            </h3>
            <p className="text-gray-500 mt-1">You have 2 saved cards.</p>
            <button className="mt-3 px-4 py-2 text-blue-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-md">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesAndPaymentsPage;
