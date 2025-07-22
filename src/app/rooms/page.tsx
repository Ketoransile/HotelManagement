import RoomCard from "@/components/RoomCard";
import Image from "next/image";
import Link from "next/link";

const RoomExploration = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: "/rooms/exclusive_suit.jpg",
      price: 299,
      title: "Executive Suite",
      description: "Spacious suite with a breat...",
    },
    {
      id: 2,
      imageUrl: "/rooms/deluxe_room.jpg",
      price: 199,
      title: "Deluxe Room",
      description: "Modern room equipped wit...",
    },
    {
      id: 3,
      imageUrl: "/rooms/standard_room.jpg",
      price: 129,
      title: "Standard Room",
      description: "Comfortable and cozy, perf...",
    },
    {
      id: 4,
      imageUrl: "/rooms/family_suit.jpg",
      price: 159,
      title: "Family Room",
      description: "Ideal for families, spacious and cozy...",
    },
    {
      id: 5,
      imageUrl: "/rooms/garden_view.jpg",
      price: 179,
      title: "Garden View Room",
      description: "Relax in a room with stunning garden views...",
    },
    {
      id: 6,
      imageUrl: "/rooms/luxury_penthouse.jpg",
      price: 249,
      title: "Luxury penthouse",
      description: " experiance Ultimate luxury and comfort...",
    },
  ];
  return (
    <div className=" w-full mb-8">
      {/* for the fist section */}
      <div className="relative w-[calc(100%+160px)] left-[-80px] h-[500px] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/hotelroom.jpg" // Replace with your image path
          alt="hero photo"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-white p-4 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Explore Our Rooms</h1>
          <p className="text-lg mb-8">
            Discover our luxurious and comfortable rooms tailored to meet your
            needs. Whether you seek a romantic getaway or a family holiday, we
            have a variety of options just for you.
          </p>
          <Link href="/roomgalary">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out">
              Check Availability
            </button>
          </Link>
        </div>
      </div>
      {/* for the second */}
      <div className="py-12 max-sm:px-2  flex flex-col items-center ">
        <h2 className="text-3xl font-bold mb-6 text-center">Available Rooms</h2>
        <p className="text-center text-gray-600 mb-8">
          select from out excusit rooms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-[90%]  ">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
      {/* third section */}
      <div className="py-12 max-sm:px-2  flex flex-col items-center px-16 ">
        <RoomCard
          key={7}
          imageUrl="/hotelroom2.jpg"
          price={299}
          title="Luxury Suite"
          description="Indulge in the ultimate luxury experience..."
        />
      </div>
      {/* forth section */}
      {/* <BedroomImage /> */}
      <div className="flex items-center justify-center px-16 w-full ">
        <div className="w-full h-100 relative">
          <Image
            src="/rooms/outside_view.jpg"
            alt="Luxurious room"
            fill
            quality={90}
            className="object-cover z-0 rounded-lg"
          />
        </div>
      </div>
      {/* fift section */}
      <div className="flex py-16 flex-row gap-20  items-center justify-center text-black">
        <p>Support</p>
        <p>FAQs</p>
        <p>Booking policy</p>
        <p>privacy policy</p>
      </div>
    </div>
  );
};

export default RoomExploration;
