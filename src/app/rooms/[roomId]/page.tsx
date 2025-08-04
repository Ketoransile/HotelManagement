import RoomDetailCard from "@/components/RoomDetailCard";
import Image from "next/image";
import Link from "next/link";
import FacilityCard from "@/components/FacilityCard";
import GridSpecCard from "@/components/GridSpecCard";
import BookingForm from "@/components/form/BookingForm";
import { Button } from "@/components/ui/button";
import {
  BedDouble,
  Wifi,
  Users,
  Bath,
  Tv,
  Coffee,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
interface IRoom {
  _id: string;
  roomNumber: string;
  roomType: string;
  price: number;
  description: string;
  images: { url: string; _id: string }[];
  maxOccupancy: number;
  amenities: string[];
}

async function getRoomDetails(roomId: string): Promise<IRoom> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${roomId}`,
    {
      cache: "no-store",
    }
  );
  console.log("reponse from room detail page", res);
  if (!res.ok) {
    throw new Error("Failed to fetch room details");
  }

  return res.json();
}

const RoomDetailPage = async ({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) => {
  const { roomId } = await params;
  console.log("room id from room detail page is ", roomId);
  const room = await getRoomDetails(roomId);

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("session from room detail page", session);
  const userId = session?.user?.id;
  // Sample data for similar rooms - you might fetch this from your API
  const similarRooms = [
    {
      id: "1",
      imageUrl: "/rooms/standard_room.jpg",
      title: "Standard Room",
      description:
        "Comfortable and cozy, perfect for solo travelers or couples",
    },
    {
      id: "2",
      imageUrl: "/rooms/deluxe_room.jpg",
      title: "Deluxe Room",
      description: "Upgraded comfort with additional space and amenities",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center">
        <Image
          src={room.images?.[0].url || "/placeholder-room.jpg"}
          alt={`${room.roomType} - Room ${room.roomNumber}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {room.roomType} - Room {room.roomNumber}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span className="text-white text-sm font-medium">4.8</span>
              </div>
              <span className="text-white/90 text-sm">
                ${room.price} <span className="text-white/70">/ night</span>
              </span>
            </div>
            <Button
              asChild
              className="bg-white text-blue-600 hover:bg-white/90 font-medium"
            >
              <Link href="#booking-form">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Room Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Room Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.images?.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={image.url}
                  alt={`Room ${room.roomNumber} - ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Room Details Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Room Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Room Description
              </h2>
              <p className="text-gray-700 mb-6">{room.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Capacity</span>
                  </div>
                  <p className="text-gray-600">
                    {room.maxOccupancy}{" "}
                    {room.maxOccupancy > 1 ? "Guests" : "Guest"}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BedDouble className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Bed Type</span>
                  </div>
                  <p className="text-gray-600">Queen Bed</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wifi className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">WiFi</span>
                  </div>
                  <p className="text-gray-600">
                    {room.amenities?.includes("WiFi")
                      ? "Free"
                      : "Not Available"}
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Amenities</h2>
              <div className="space-y-3">
                {room.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      {amenity === "WiFi" && (
                        <Wifi className="h-5 w-5 text-blue-600" />
                      )}
                      {amenity === "TV" && (
                        <Tv className="h-5 w-5 text-blue-600" />
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
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Book Your Stay
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <BookingForm room={room} userId={userId} />
          </div>
        </section>

        {/* Policies */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FacilityCard
              title="Cancellation Policy"
              description="Free cancellation up to 48 hours before check-in. Late cancellations will be charged one night's rate."
              icon={<Clock className="h-5 w-5 text-blue-600" />}
            />
            <FacilityCard
              title="Check-in/Check-out"
              description="Check-in from 3:00 PM, check-out by 11:00 AM. Early check-in and late check-out subject to availability."
              icon={<Clock className="h-5 w-5 text-blue-600" />}
            />
          </div>
        </section>

        {/* Similar Rooms */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {similarRooms.map((room) => (
              <Link href={`/rooms/${room.id}`} key={room.id} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <Image
                    src={room.imageUrl}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {room.title}
                </h3>
                <p className="text-gray-600">{room.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoomDetailPage;
