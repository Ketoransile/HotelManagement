import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Logo/Image Section */}
        <div className="flex justify-center mb-12">
          {/* Placeholder for the logo image from the screenshot */}
          <Image
            src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg" // Replace with actual logo URL
            alt="Hotel Logo"
            className="h-72 w-96 object-contain rounded-full "
            width={200}
            height={200}
          />
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Our Address */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Our Address</h3>
            <p className="text-gray-400 mb-2">Adama franko 23 heighway</p>
            <p className="text-gray-400">Addis Abeba mexico 24st</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
            <p className="text-gray-400 mb-2">+251 222 112 0658</p>
            <p className="text-gray-400 mb-2">river5starhotel@gmail.com</p>
            <p className="text-gray-400">Feedback</p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SITE MAP
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy;copyright 2025 River Hotel. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
