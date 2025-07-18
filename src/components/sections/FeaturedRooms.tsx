import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Assuming these paths are correct relative to your component file
import deluxeSuiteImg from "../../assets/Images/room1.jpg";
import standardRoomImg from "../../assets/Images/room2.jpg";
import executiveRoomImg from "../../assets/Images/room3.jpg";
import familyRoomImg from "../../assets/Images/room4.jpg";
import { Badge } from "../ui/badge";

export const FeaturedRooms = () => {
  const rooms = [
    {
      name: "Deluxe Suite",
      description: "Spacious accommodation with stunning views.",
      price: "$200/night",
      image: deluxeSuiteImg,
      href: "/rooms/deluxe-suite",
    },
    {
      name: "Standard Room",
      description: "Comfort meets affordability.",
      price: "$120/night",
      image: standardRoomImg,
      href: "/rooms/standard-room",
    },
    {
      name: "Executive Room",
      description: "Perfect for business and leisure travelers.",
      price: "$180/night",
      image: executiveRoomImg,
      href: "/rooms/executive-room",
    },
    {
      name: "Family Room",
      description: "Comfortable space for families.",
      price: "$150/night",
      image: familyRoomImg,
      href: "/rooms/family-room",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Featured Rooms
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Take a peek at our most popular room types and discover your perfect
          stay.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {rooms.map((room, index) => (
          <Link key={index} href={room.href} passHref>
            <Card className="grid grid-cols-1 md:grid-cols-2 items-start overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-none py-0">
              {/* Image on the Left (Square) */}
              <div className="w-full aspect-square  relative overflow-hidden">
                {room.image ? (
                  <Image
                    src={room.image}
                    alt={room.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Description and Details on the Right */}
              <div className="w-full p-5 flex flex-col justify-between">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-2xl font-bold text-gray-800 leading-tight">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mt-1 line-clamp-2">
                    {room.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-auto">
                  <Badge variant="outline">From {room.price}</Badge>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
