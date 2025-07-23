"use client"; // This component needs to be Link client component for interactivity

import * as React from "react";
import Image from "next/image"; // Import Image for optimized images

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

// Define the Chef interface directly within this file
interface Chef {
  id: number;
  name: string;
  image: string; // URL to the chef's image
}

// Sample data for chefs
const chefs: Chef[] = [
  {
    id: 1,
    name: "John Smith",
    image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg", // Replace with actual chef images from your assets
  },
  {
    id: 2,
    name: "Esther Howard",
    image: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg",
  },
  {
    id: 3,
    name: "Albert Flores",
    image: "https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg",
  },
  {
    id: 4,
    name: "Savannah Baker",
    image: "https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg",
  },
  {
    id: 5,
    name: "Jane Doe",
    image: "https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg",
  },
  {
    id: 6,
    name: "Chris Evans",
    image: "https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg",
  },
  // Add more chefs as needed
];

export function MeetOurChefs() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Chefs</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            // You can add options like loop: true if you want it to endlessly loop
          }}
          className="w-full border-none"
        >
          <CarouselContent className="-ml-4">
            {chefs.map((chef: Chef) => (
              <CarouselItem
                key={chef.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <Card className="rounded-lg overflow-hidden shadow-md border-none p-0">
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-lg">
                        <Image
                          src={chef.image}
                          alt={chef.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {chef.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-16 right-0 flex space-x-2 mt-4 mr-4">
            <CarouselPrevious className="static transform-none p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50" />
            <CarouselNext className="static transform-none p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50" />
          </div>
        </Carousel>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center space-x-6 text-gray-600 mt-16 text-sm">
          <Link href="#" className="hover:underline">
            Support
          </Link>
          <Link href="#" className="hover:underline">
            FAQs
          </Link>
          <Link href="#" className="hover:underline">
            Booking Policies
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
