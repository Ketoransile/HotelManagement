import RoomDetailCard from "@/components/RoomDetailCard";
import Image from "next/image";
import Link from "next/link";
import FacilityCard from "@/components/FacilityCard";
import GridSpecCard from "@/components/GridSpecCard";
import BookingForm from "@/components/form/BookingForm";

const RoomExploration = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: "/rooms/exclusive_suit.jpg",
      property: "view",
      title: "Executive Suite",
      description: "Spacious suite with a breat...",
    },
    {
      id: 2,
      imageUrl: "/rooms/deluxe_room.jpg",
      property: "view",
      title: "Deluxe Room",
      description: "Modern room equipped wit...",
    },
    {
      id: 3,
      imageUrl: "/rooms/standard_room.jpg",
      property: "view",
      title: "Standard Room",
      description: "Comfortable and cozy, perf...",
    },
    {
      id: 4,
      imageUrl: "/rooms/family_suit.jpg",
      property: "view",
      title: "Family Room",
      description: "Ideal for families, spacious and cozy...",
    },
  ];
  return (
    <div className=" w-full mb-8">
      {/* for the fist section */}
      <div className="relative w-[calc(100%+160px)] left-[-80px] h-[500px] flex items-center text-left mb-10">
        {/* Background Image */}
        <Image
          src="/rooms/room_detail.jpg"
          alt="hero photo"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-2"></div>

        {/* Content - aligned to the left */}
        <div className="relative z-3 ml-4 text-white p-4 max-w-2xl">
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
      <div className="my-10 py-12 max-sm:px-2 flex flex-row gap-8 items-stretch border-black  w-[85%] mx-auto">
        {/* Vertical line */}
        <div className="w-[40px] bg-[#F9EDFB]" />

        {/* Main content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Room Gallery</h2>
          <p className="text-gray-600 mb-8">
            Explore the exquisite interiors of your selected room
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16 w-[90%]">
            {rooms.map((room) => (
              <RoomDetailCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Room Description</h1>
          <p className="text-lg">
            experiance a perfect blend of luxury and comfort
          </p>
        </div>
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
      </div>
      {/* forth section */}
      {/* <BedroomImage /> */}
      <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Room Description</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-64 gap-y-16  px-10 mx-auto p-8">
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
        </div>
        {/* bokking element */}
      </div>
      {/* fifth section  */}
      <div className=" my-10 w-[85%] mx-auto">
        <BookingForm />
      </div>
      {/* sixth section */}
      <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">NearBy Attractions</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-64 gap-y-16  px-10 mx-auto p-8">
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
          <GridSpecCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Room"
            sub="Experience"
          />
        </div>
        {/* bokking element */}
      </div>
      {/* seventh section */}
      <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-12 items-stretch border-black  w-[85%] mx-auto ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Booking Policies</h1>
        </div>
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
        <FacilityCard
          imageUrl="/hotelroom2.jpg"
          title="Luxurious Room"
          description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
        />
      </div>
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
