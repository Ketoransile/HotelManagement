import React from "react";

const NewsletterSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-12 shadow-lg rounded-lg">
      <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-700 text-lg">
          Subscribe to our newsletter for exclusive deals.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <label
          htmlFor="email-input"
          className="text-sm font-medium text-gray-700 block mb-2 w-full md:w-3/4 lg:w-2/3"
        >
          Email
        </label>
        <input
          id="email-input"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none block w-full md:w-3/4 lg:w-2/3 px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 mb-4"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="w-full md:w-3/4 lg:w-2/3 bg-black border border-transparent rounded-md shadow-sm py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
