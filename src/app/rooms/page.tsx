// import RoomCard from "@/components/RoomCard";
// import { Button } from "@/components/ui/button";
// import apiClient from "@/lib/axiosConfig";
// import Image from "next/image";
// import Link from "next/link";
// import { use } from "react";

// const RoomExploration = () => {
//   // const rooms = [
//   //   {
//   //     id: 1,
//   //     imageUrl: "/rooms/exclusive_suit.jpg",
//   //     price: 299,
//   //     title: "Executive Suite",
//   //     description: "Spacious suite with a breat...",
//   //   },
//   //   {
//   //     id: 2,
//   //     imageUrl: "/rooms/deluxe_room.jpg",
//   //     price: 199,
//   //     title: "Deluxe Room",
//   //     description: "Modern room equipped wit...",
//   //   },
//   //   {
//   //     id: 3,
//   //     imageUrl: "/rooms/standard_room.jpg",
//   //     price: 129,
//   //     title: "Standard Room",
//   //     description: "Comfortable and cozy, perf...",
//   //   },
//   //   {
//   //     id: 4,
//   //     imageUrl: "/rooms/family_suit.jpg",
//   //     price: 159,
//   //     title: "Family Room",
//   //     description: "Ideal for families, spacious and cozy...",
//   //   },
//   //   {
//   //     id: 5,
//   //     imageUrl: "/rooms/garden_view.jpg",
//   //     price: 179,
//   //     title: "Garden View Room",
//   //     description: "Relax in a room with stunning garden views...",
//   //   },
//   //   {
//   //     id: 6,
//   //     imageUrl: "/rooms/luxury_penthouse.jpg",
//   //     price: 249,
//   //     title: "Luxury penthouse",
//   //     description: " experiance Ultimate luxury and comfort...",
//   //   },
//   // ];
//   async function fetchRooms() {
//     const rooms = await apiClient.get("/api/rooms");
//     return rooms;
//   }
//   const result = use(fetchRooms());
//   // console.log("Rooms from rooms page is ", rooms);
//   const rooms = result?.data;
//   return (
//     <div className="w-full mb-8 z-10">
//       {/* for the first section */}
//       {/* <div className="relative w-[calc(100%+160px)] left-[-80px] h-[500px] flex items-center justify-center text-center"> */}
//       <div className="relative w-full h-[500px] flex items-center justify-center text-center ">
//         {/* Background Image */}
//         <Image
//           src="/hotelroom.jpg" // Replace with your image path
//           alt="hero photo"
//           fill={true}
//           style={{ objectFit: "cover" }}
//           className="z-0 blur-[3px]"
//           priority // Add priority for LCP image
//         />

//         {/* Overlay for better text readability */}
//         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//         {/* Content */}
//         <div className="relative z-20 text-white p-4 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
//             Explore Our Rooms
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-8">
//             Discover our luxurious and comfortable rooms tailored to meet your
//             needs. Whether you seek a romantic getaway or a family holiday, we
//             have a variety of options just for you.
//           </p>
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 ease-in-out"
//             asChild
//           >
//             <Link href="/roomgallery">Check Availability</Link>
//           </Button>
//         </div>
//       </div>

//       {/* for the second section */}
//       <div className="w-full py-8 md:py-12  flex flex-col justify-center">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
//           Available Rooms
//         </h2>
//         <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
//           Select from our exquisite rooms
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full ">
//           {rooms.map((room) => (
//             <Link
//               href="/roomgallery"
//               key={room.id}
//               className="hover:scale-102 transition-transform duration-300 ease-in-out"
//             >
//               <RoomCard key={room.id} {...room} />
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* third section */}
//       <div className="py-8 md:py-12  flex flex-col items-center">
//         <div className="w-full ">
//           {" "}
//           {/* Added max-w-xl for better control */}
//           <RoomCard
//             key={7}
//             imageUrl="/hotelroom2.jpg"
//             price={299}
//             title="Luxury Suite"
//             description="Indulge in the ultimate luxury experience..."
//           />
//         </div>
//       </div>

//       {/* fourth section */}
//       <div className="flex items-center justify-center  w-full">
//         <div className="w-full  h-[200px] sm:h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
//           <Image
//             src="/rooms/outside_view.jpg"
//             alt="Luxurious room"
//             fill
//             quality={90}
//             className="object-cover z-0"
//           />
//         </div>
//       </div>

//       {/* fifth section */}
//       <div className="flex flex-col sm:flex-row py-8 md:py-16 gap-4 sm:gap-10 md:gap-20 items-center justify-center text-black text-sm sm:text-base">
//         <p>Support</p>
//         <p>FAQs</p>
//         <p>Booking policy</p>
//         <p>Privacy policy</p>
//       </div>
//     </div>
//   );
// };

// export default RoomExploration;
// import RoomCard from "@/components/RoomCard";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { IRoom } from "@/models/Room";

// /**
//  * Fetches all rooms from the API.
//  * This function is executed on the server.
//  */
// async function getRooms(): Promise<IRoom[]> {
//   // We use the full URL for server-to-server communication.
//   // The 'no-store' cache option ensures we get fresh data every time.
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     // This will activate the nearest Error Boundary
//     throw new Error("Failed to fetch rooms");
//   }

//   return res.json();
// }

// /**
//  * This is an async Server Component that fetches and displays the rooms.
//  */
// const RoomExploration = async () => {
//   const rooms: IRoom[] = await getRooms();

//   // Create a new array with a hardcoded features field to pass to the new RoomCard.
//   // In a production app, this data would come from your database.
//   const roomsWithFeatures = rooms.map((room) => ({
//     ...room,
//     features: [
//       { icon: "bed", text: "2 King Beds" },
//       { icon: "guests", text: "4 Guests" },
//       { icon: "wifi", text: "Free WiFi" },
//     ],
//   }));

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* First Section: Hero with Background Image */}
//       <div className="relative w-full h-[500px] flex items-center justify-center text-center rounded-2xl overflow-hidden shadow-lg mb-12">
//         <Image
//           src="/hotelroom.jpg"
//           alt="Luxury hotel room hero image"
//           fill={true}
//           style={{ objectFit: "cover" }}
//           className="z-0"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10"></div>
//         <div className="relative z-20 text-white p-4 max-w-lg mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Explore Our Rooms
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg mb-8">
//             Discover our luxurious and comfortable rooms, each designed to
//             provide an unforgettable stay tailored to your needs.
//           </p>
//           <Button
//             asChild
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
//           >
//             <Link href="/roomgallery">Check Availability</Link>
//           </Button>
//         </div>
//       </div>

//       {/* Second Section: Available Rooms Grid */}
//       <section className="w-full py-8 md:py-12">
//         <div className="flex flex-col justify-center items-center mb-8">
//           <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800">
//             Available Rooms
//           </h2>
//           <p className="text-center text-gray-600 text-base">
//             Select from our exquisite rooms, suites, and family-friendly
//             options.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {rooms.length > 0 ? (
//             roomsWithFeatures.map((room) => (
//               <Link
//                 href={`/rooms/${room.roomNumber}`}
//                 key={room._id}
//                 className="block hover:scale-105 transition-transform duration-300 ease-in-out"
//               >
//                 {/* Map API data to RoomCard props */}
//                 <RoomCard
//                   imageUrl={room.images[0]?.url || "/placeholder.jpg"}
//                   price={room.price}
//                   title={room.roomType}
//                   description={room.description}
//                   id={room._id}
//                   features={room.features}
//                 />
//               </Link>
//             ))
//           ) : (
//             <div className="col-span-full text-center text-xl text-gray-500">
//               No rooms found.
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Third Section: Featured Luxury Suite */}
//       <section className="py-8 md:py-12">
//         <div className="flex flex-col sm:flex-row gap-8 items-center rounded-2xl shadow-xl overflow-hidden bg-white p-6">
//           <div className="relative w-full h-[300px] sm:w-1/2 rounded-xl overflow-hidden">
//             <Image
//               src="/hotelroom2.jpg"
//               alt="Indulge in the ultimate luxury experience"
//               fill
//               quality={90}
//               className="object-cover"
//             />
//           </div>
//           <div className="sm:w-1/2">
//             <h3 className="text-3xl font-bold mb-4 text-blue-600">
//               Luxury Suite
//             </h3>
//             <p className="text-gray-700 mb-4 text-lg">
//               Indulge in the ultimate luxury experience with our exclusive
//               suite. Featuring a private jacuzzi, breathtaking views, and
//               unparalleled comfort.
//             </p>
//             <Button
//               asChild
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
//             >
//               <Link href="/roomgallery">View Suite</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Fourth Section: Outside View */}
//       <section className="py-8 md:py-12">
//         <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-xl">
//           <Image
//             src="/rooms/outside_view.jpg"
//             alt="Luxurious outside view"
//             fill
//             quality={90}
//             className="object-cover"
//           />
//         </div>
//       </section>

//       {/* Fifth Section: Footer Links */}
//       <footer className="flex flex-col sm:flex-row py-8 md:py-16 gap-4 sm:gap-10 md:gap-20 items-center justify-center text-black text-sm sm:text-base border-t mt-12">
//         <Link href="/support" className="hover:text-blue-600 transition-colors">
//           Support
//         </Link>
//         <Link href="/faqs" className="hover:text-blue-600 transition-colors">
//           FAQs
//         </Link>
//         <Link
//           href="/policy/booking"
//           className="hover:text-blue-600 transition-colors"
//         >
//           Booking Policy
//         </Link>
//         <Link
//           href="/policy/privacy"
//           className="hover:text-blue-600 transition-colors"
//         >
//           Privacy Policy
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default RoomExploration;
// import RoomCard from "@/components/RoomCard";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { IRoom } from "../../../models/Room";
// import { Coffee, SquareKanban, Users, Wifi } from "lucide-react";

// async function getRooms(): Promise<IRoom[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch rooms");
//   }

//   return res.json();
// }

// const RoomExploration = async () => {
//   const rooms: IRoom[] = await getRooms();

//   const roomsWithFeatures = rooms.map((room) => ({
//     ...room,
//     features: [
//       { icon: "bed", text: `${room.beds} ${room.bedType}` },
//       { icon: "guests", text: `${room.capacity} Guests` },
//       { icon: "wifi", text: "Free WiFi" },
//       { icon: "bath", text: "Private Bath" },
//     ],
//   }));

//   return (
//     <div className="container mx-auto px-4 sm:px-6">
//       {/* Hero Section */}
//       <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden mb-12 group">
//         <Image
//           src="/hotelroom.jpg"
//           alt="Hotel room hero image"
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70 z-10"></div>
//         <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
//             Comfortable accommodations designed for memorable experiences
//           </p>
//           <Button
//             asChild
//             className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
//           >
//             <Link href="/roomgallery">Check Availability</Link>
//           </Button>
//         </div>
//       </div>

//       {/* Rooms Grid Section */}
//       <section className="w-full py-8 md:py-12">
//         <div className="flex flex-col items-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
//             Our Rooms
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mb-6"></div>
//           <p className="text-center text-gray-600 max-w-2xl">
//             Thoughtfully designed spaces with modern amenities for your comfort
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {rooms.length > 0 ? (
//             roomsWithFeatures.map((room) => (
//               <RoomCard
//                 key={room._id}
//                 imageUrl={room.images[0]?.url || "/placeholder.jpg"}
//                 price={room.price}
//                 title={room.roomType}
//                 description={room.description}
//                 id={room._id}
//                 features={room.features}
//                 rating={4.5} // You can replace with actual room rating if available
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <div className="text-xl text-gray-500 mb-4">
//                 No rooms available
//               </div>
//               <Button asChild variant="outline">
//                 <Link href="/">Back to Home</Link>
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Property Showcase Section */}
//       <section className="py-12 md:py-16">
//         <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
//               <Image
//                 src="/hotelroom2.jpg"
//                 alt="Property showcase"
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                 Experience Our Property
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Our property features modern amenities, comfortable common
//                 areas, and a welcoming atmosphere designed to make your stay
//                 enjoyable.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center gap-3">
//                   <Wifi className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">High-speed WiFi</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Coffee className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">Complimentary coffee</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Users className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">24/7 front desk</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <SquareKanban className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">Outdoor spaces</span>
//                 </div>
//               </div>
//               <Button asChild className="w-full sm:w-auto">
//                 <Link href="/amenities">View All Amenities</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RoomExploration;
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
