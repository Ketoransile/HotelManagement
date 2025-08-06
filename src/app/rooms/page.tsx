import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IRoom } from "../../../models/Room";
import { SquareKanban, Wifi } from "lucide-react";

async function getRooms(): Promise<IRoom[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`, {
    cache: "no-store",
  });
  // console.log("res from rooms page is", res);
  // console.log("res.json from rooms page is ", res.json());
  if (!res.ok) {
    console.error("Failed to fetch rooms:", res.statusText);
    return [];
    // throw new Error("Failed to fetch rooms");
  }
  const rooms = await res.json();
  return rooms;
}

const RoomExploration = async () => {
  const rooms: IRoom[] = await getRooms();

  // Transform room data to match RoomCard props
  const transformedRooms = rooms.map((room) => ({
    ...room,
    features: [
      {
        icon: "bed",
        text: `${room.maxOccupancy} ${
          room.maxOccupancy > 1 ? "Guests" : "Guest"
        }`,
      },
      {
        icon: "wifi",
        text: room.amenities?.includes("WiFi") ? "Free WiFi" : "No WiFi",
      },
      { icon: "bath", text: "Private Bath" }, // Assuming all rooms have private bath
    ],
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden mb-12 group">
        <Image
          src="/hotelroom.jpg"
          alt="Hotel room hero image"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70 z-10"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {rooms.length > 0 ? "Our Available Rooms" : "Coming Soon"}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
            {rooms.length > 0
              ? "Comfortable accommodations for every need"
              : "New rooms are being prepared for your stay"}
          </p>
          <Button
            asChild
            className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Link href="/contact">
              {rooms.length > 0 ? "Book Now" : "Get Notified"}
            </Link>
          </Button>
        </div>
      </div>

      {/* Rooms Grid Section */}
      {rooms.length > 0 && (
        <section className="w-full py-8 md:py-12">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Room Options
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-center text-gray-600 max-w-2xl">
              Browse through our selection of comfortable rooms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformedRooms.map((room, index) => (
              <RoomCard
                key={index}
                imageUrl={room.images?.[0].url || "/placeholder-room.jpg"}
                price={room.price}
                title={`${room.roomType} - Room ${room.roomNumber}`}
                description={room.description}
                id={String(room._id)}
                features={room.features}
              />
            ))}
          </div>
        </section>
      )}

      {/* Amenities Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-2xl mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need for a comfortable stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rooms[0]?.amenities?.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {amenity === "WiFi" && (
                      <Wifi className="h-5 w-5 text-blue-600" />
                    )}
                    {amenity === "TV" && (
                      <SquareKanban className="h-5 w-5 text-blue-600" />
                    )}
                    {amenity === "AC" && (
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-gray-800">{amenity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomExploration;
