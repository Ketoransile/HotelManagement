// "use client";
// import React, { useState } from "react";
// import { Button } from "./ui/button"; // Assuming this path is correct for your Button component
// import Link from "next/link"; // Keeping Link as it's a Next.js component, though direct <a> tags were used in the original
// import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="z-20 sticky top-0 flex items-center justify-between max-sm:px-2 sm:px-6 md:px-10 lg:px-20 py-4 backdrop-blur-xl bg-white/60 shadow-md font-sans">
//       <div className="flex-1 flex items-center justify-start">
//         {/* Logo */}
//         <Link href="/">
//           <p className="text-black font-bold text-xl">River Grand</p>
//         </Link>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex flex-2 justify-center gap-8">
//         <Link href="/">
//           <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200">
//             Home
//           </p>
//         </Link>
//         <Link href="/rooms">
//           <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200">
//             Rooms
//           </p>
//         </Link>
//         <Link href="/dining">
//           <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200">
//             Dining
//           </p>
//         </Link>
//         <Link href="/about">
//           <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200">
//             About Us
//           </p>
//         </Link>
//         <Link href="/blog">
//           <p className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200">
//             Blog
//           </p>
//         </Link>
//       </nav>

//       <div className="flex-1 flex items-center justify-end">
//         {/* Sign In Button - Visible on Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link href="/signin">
//             <Button className="bg-black text-white hover:bg-gray-700 transition-colors duration-200">
//               Sign in
//             </Button>
//           </Link>
//         </div>

//         {/* Hamburger Menu Icon - Visible on Mobile */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
//             aria-label="Open mobile menu"
//           >
//             <FaBars className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center animate-fade-in-down">
//           <button
//             onClick={toggleMobileMenu}
//             className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
//             aria-label="Close mobile menu"
//           >
//             <FaTimes className="w-8 h-8" />
//           </button>
//           <nav className="flex flex-col items-center space-y-8 text-2xl">
//             <Link href="/">
//               <p
//                 onClick={toggleMobileMenu}
//                 className="text-white hover:text-blue-400 transition-colors duration-200"
//               >
//                 Home
//               </p>
//             </Link>
//             <Link href="/rooms">
//               <a
//                 onClick={toggleMobileMenu}
//                 className="text-white hover:text-blue-400 transition-colors duration-200"
//               >
//                 Rooms
//               </a>
//             </Link>
//             <Link href="/dining">
//               <a
//                 onClick={toggleMobileMenu}
//                 className="text-white hover:text-blue-400 transition-colors duration-200"
//               >
//                 Dining
//               </a>
//             </Link>
//             <Link href="/about">
//               <a
//                 onClick={toggleMobileMenu}
//                 className="text-white hover:text-blue-400 transition-colors duration-200"
//               >
//                 About Us
//               </a>
//             </Link>
//             <Link href="/blog">
//               <a
//                 onClick={toggleMobileMenu}
//                 className="text-white hover:text-blue-400 transition-colors duration-200"
//               >
//                 Blog
//               </a>
//             </Link>
//             <Link href="/signin">
//               <Button
//                 onClick={toggleMobileMenu}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Sign in
//               </Button>
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="z-20 sticky top-0 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 backdrop-blur-md bg-white/80 shadow-sm font-sans">
      {/* Logo */}
      <Link
        href="/"
        className="text-black font-extrabold text-xl tracking-tight"
      >
        River Grand
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {NAV_ITEMS.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`font-medium text-black/80 hover:text-black transition ${
              pathname === href ? "text-black font-semibold" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Desktop Sign In */}
      <div className="hidden md:block">
        <Link href="/signin">
          <Button className="bg-black text-white hover:bg-neutral-800 transition">
            Sign in
          </Button>
        </Link>
      </div>

      {/* Mobile Drawer */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open mobile menu">
              <FaBars className="w-6 h-6 text-black" />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="p-0 max-w-[280px] w-full left-0 top-0 bottom-0 fixed rounded-none border-none shadow-2xl bg-white flex flex-col h-full">
            {/* Header */}
            <DrawerHeader className="px-5 py-4 border-b border-neutral-200 bg-white">
              <DrawerTitle className="text-xl font-bold text-black">
                River Grand
              </DrawerTitle>
            </DrawerHeader>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col px-5 py-6 gap-4 text-lg overflow-y-auto">
              {NAV_ITEMS.map(({ name, href }) => (
                <DrawerClose asChild key={name}>
                  <Link
                    href={href}
                    className={`px-2 py-2 rounded transition-colors duration-200 ${
                      pathname === href
                        ? "text-black font-semibold bg-neutral-100"
                        : "text-black/80 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    {name}
                  </Link>
                </DrawerClose>
              ))}

              <DrawerClose asChild>
                <Link href="/signin">
                  <Button className="w-full mt-4 bg-black text-white hover:bg-neutral-800">
                    Sign in
                  </Button>
                </Link>
              </DrawerClose>
            </nav>

            {/* Footer */}
            <DrawerFooter className="px-5 py-4 border-t border-neutral-200 bg-white">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full text-black border-black"
                >
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
