import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Lato } from "next/font/google";
import { Merriweather, Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Hotel",
  description: "Hotel web app with elegant typography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lato.variable} antialiased`}>
        <Header />
        <main className="max-sm:px-2 sm:px-6 md:px-10  lg:px-20 ">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
