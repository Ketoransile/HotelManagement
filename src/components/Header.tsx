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
import { authClient } from "@/lib/auth-client";
import { UserMenu } from "./UserMenu";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const pathname = usePathname();
  const {
    data: session,
    isPending,
    // error,
    // refetch,
  } = authClient.useSession();

  return (
    <header className="z-30 sticky top-0 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 backdrop-blur-md md:bg-white/80 bg-white/80 shadow-sm font-sans">
      {/* Logo */}
      <Link
        href="/"
        className="text-black  font-semibold text-2xl tracking-tight"
      >
        River
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
        {session ? (
          <UserMenu />
        ) : (
          <Link href="/sign-in">
            <Button className="bg-black text-white hover:bg-neutral-800 transition cursor-pointer">
              Sign in
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Drawer */}
      <div className="md:hidden flex items-center gap-2">
        <div className="">{session && <UserMenu />}</div>
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
                River
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
              {!isPending && !session && (
                <DrawerClose asChild>
                  <Link href="/sign-in">
                    <Button className="w-full mt-4 bg-black text-white hover:bg-neutral-800">
                      Sign in
                    </Button>
                  </Link>
                </DrawerClose>
              )}
              {/* {session && (
                <DrawerClose asChild>
                  <Link href="/sign-in">
                    <Button className="w-full mt-4 bg-black text-white hover:bg-neutral-800">
                      Sign in
                    </Button>
                  </Link>
                </DrawerClose>
              )} */}
              {!isPending && session && (
                <DrawerClose asChild>
                  <Button
                    onClick={() => authClient.signOut()}
                    className="w-full mt-4 bg-black text-white hover:bg-neutral-800"
                  >
                    Log out
                  </Button>
                </DrawerClose>
              )}
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
