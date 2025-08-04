// "use client";

// import React from "react";
// import {
//   LayoutDashboard,
//   Bell,
//   Settings,
//   Lock,
//   FileText,
//   Briefcase,
//   Menu,
//   LayoutDashboardIcon,
// } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetClose,
// } from "@/components/ui/sheet";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Dashboard Overview", icon: LayoutDashboard, href: "/dashboard" },
//     { name: "My Bookings", icon: Briefcase, href: "/dashboard/my-bookings" },
//     { name: "Notification", icon: Bell, href: "/dashboard/notification" },
//     {
//       name: "Invoices & Payments",
//       icon: FileText,
//       href: "/dashboard/invoices-and-payments",
//     },
//     {
//       name: "Profile Settings",
//       icon: Settings,
//       href: "/dashboard/profile-settings",
//     },
//     {
//       name: "Security & Privacy",
//       icon: Lock,
//       href: "/dashboard/security-and-privacy",
//     },
//   ];

//   const SidebarContent = () => (
//     <nav>
//       <ul>
//         {navItems.map((item, index) => {
//           const isActive = pathname === item.href;
//           return (
//             <li key={index} className="mb-4">
//               <Link
//                 href={item.href}
//                 className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
//                   isActive
//                     ? "bg-blue-100 text-blue-700 font-semibold"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 <item.icon className="mr-4 h-5 w-5" />
//                 <span>{item.name}</span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen flex font-['Inter']">
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block w-64 bg-white p-6 shadow-md">
//         <h2 className="text-xl font-bold mb-8">My Account</h2>
//         <SidebarContent />
//       </aside>

//       {/* Mobile Sheet Sidebar */}
//       <div className="md:hidden fixed bottom-6 right-6 z-50">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               size="icon"
//               className="h-14 w-14 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700"
//             >
//               <LayoutDashboardIcon className="h-6 w-6" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-64 bg-white">
//             <SheetHeader>
//               <SheetTitle className="text-left text-xl font-bold mb-4">
//                 My Account
//               </SheetTitle>
//             </SheetHeader>
//             <SidebarContent />
//             <SheetClose asChild>
//               <Button variant="outline" className="mt-4 w-full mx-auto">
//                 Close
//               </Button>
//             </SheetClose>
//           </SheetContent>
//         </Sheet>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col overflow-hidden px-4 pt-4 md:pl-0 md:pt-0">
//         <div className="flex-1 overflow-y-auto">{children}</div>
//       </main>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Bell,
  Settings,
  Lock,
  FileText,
  Briefcase,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "My Bookings", icon: Briefcase, href: "/dashboard/my-bookings" },
    { name: "Notification", icon: Bell, href: "/dashboard/notification" },
    {
      name: "Invoices & Payments",
      icon: FileText,
      href: "/dashboard/invoices-and-payments",
    },
    {
      name: "Profile Settings",
      icon: Settings,
      href: "/dashboard/profile-settings",
    },
    {
      name: "Security & Privacy",
      icon: Lock,
      href: "/dashboard/security-and-privacy",
    },
  ];

  // Shared sidebar UI
  const SidebarContent = ({
    closeOnClick = false,
  }: {
    closeOnClick?: boolean;
  }) => (
    <nav className="sticky top-20">
      <h2 className="text-xl font-bold mb-8">Abraham Demisew</h2>
      <ul>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          const baseClasses =
            "flex items-center p-3 rounded-lg transition-colors duration-200 w-full";
          const activeClasses = isActive
            ? "bg-blue-100 text-blue-700 font-semibold"
            : "text-gray-600 hover:bg-gray-50";

          const content = (
            <>
              <item.icon className="mr-4 h-5 w-5" />
              <span>{item.name}</span>
            </>
          );

          return (
            <li key={index} className="mb-4">
              {closeOnClick ? (
                <button
                  onClick={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                  className={`${baseClasses} ${activeClasses} text-left`}
                >
                  {content}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex font-['Inter']">
      {/* Desktop Sidebar */}
      <aside className="sticky top-20 hidden md:block w-64 bg-white p-6 shadow-md border border-neutral-200">
        {/* <h2 className="text-xl font-bold mb-8">Abraham Demisew</h2> */}
        <SidebarContent />
      </aside>

      {/* Mobile Floating Sheet Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              <LayoutDashboard className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white">
            <SheetHeader>
              <SheetTitle className="text-left text-xl font-bold mb-4">
                My Account
              </SheetTitle>
            </SheetHeader>
            {/* Sidebar with click-to-close */}
            <SidebarContent closeOnClick />
            <Button
              variant="outline"
              className="mt-4 w-full mx-auto"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden px-4 pt-4 md:pl-0 md:pt-0">
        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
