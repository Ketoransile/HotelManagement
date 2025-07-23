// import RoomDetailCard from "@/components/RoomDetailCard";
// import Image from "next/image";
// import Link from "next/link";
// import FacilityCard from "@/components/FacilityCard";
// import GridSpecCard from "@/components/GridSpecCard";
// import BookingForm from "@/components/form/BookingForm";

// const RoomExploration = () => {
//   const rooms = [
//     {
//       id: 1,
//       imageUrl: "/rooms/exclusive_suit.jpg",
//       property: "view",
//       title: "Executive Suite",
//       description: "Spacious suite with a breat...",
//     },
//     {
//       id: 2,
//       imageUrl: "/rooms/deluxe_room.jpg",
//       property: "view",
//       title: "Deluxe Room",
//       description: "Modern room equipped wit...",
//     },
//     {
//       id: 3,
//       imageUrl: "/rooms/standard_room.jpg",
//       property: "view",
//       title: "Standard Room",
//       description: "Comfortable and cozy, perf...",
//     },
//     {
//       id: 4,
//       imageUrl: "/rooms/family_suit.jpg",
//       property: "view",
//       title: "Family Room",
//       description: "Ideal for families, spacious and cozy...",
//     },
//   ];
//   return (
//     <div className=" w-full mb-8">
//       {/* for the fist section */}
//       <div className="relative w-[calc(100%+160px)] left-[-80px] h-[500px] flex items-center text-left mb-10">
//         {/* Background Image */}
//         <Image
//           src="/rooms/room_detail.jpg"
//           alt="hero photo"
//           layout="fill"
//           objectFit="cover"
//           className="z-0"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50 z-2"></div>

//         {/* Content - aligned to the left */}
//         <div className="relative z-3 ml-4 text-white p-4 max-w-2xl">
//           <h1 className="text-5xl font-bold mb-4">Explore Our Rooms</h1>
//           <p className="text-lg mb-8">
//             Discover our luxurious and comfortable rooms tailored to meet your
//             needs. Whether you seek a romantic getaway or a family holiday, we
//             have a variety of options just for you.
//           </p>
//           <Link href="/roomgalary">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out">
//               Check Availability
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* for the second */}
//       <div className="my-10 py-12 max-sm:px-2 flex flex-row gap-8 items-stretch border-black  w-[85%] mx-auto">
//         {/* Vertical line */}
//         <div className="w-[40px] bg-[#F9EDFB]" />

//         {/* Main content */}
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold mb-6">Room Gallery</h2>
//           <p className="text-gray-600 mb-8">
//             Explore the exquisite interiors of your selected room
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16 w-[90%]">
//             {rooms.map((room) => (
//               <RoomDetailCard key={room.id} {...room} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* third section */}
//       <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
//         <div className="flex flex-col gap-5">
//           <h1 className="text-3xl font-bold">Room Description</h1>
//           <p className="text-lg">
//             experiance a perfect blend of luxury and comfort
//           </p>
//         </div>
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//       </div>
//       {/* forth section */}
//       {/* <BedroomImage /> */}
//       <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
//         <div className="flex flex-col gap-5">
//           <h1 className="text-3xl font-bold">Room Description</h1>
//         </div>
//         <div className="grid grid-cols-2 gap-x-64 gap-y-16  px-10 mx-auto p-8">
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//         </div>
//         {/* bokking element */}
//       </div>
//       {/* fifth section  */}
//       <div className=" my-10 w-[85%] mx-auto">
//         <BookingForm />
//       </div>
//       {/* sixth section */}
//       <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-8 items-stretch border-black  w-[85%] mx-auto ">
//         <div className="flex flex-col gap-5">
//           <h1 className="text-3xl font-bold">NearBy Attractions</h1>
//         </div>
//         <div className="grid grid-cols-2 gap-x-64 gap-y-16  px-10 mx-auto p-8">
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Luxurious Room"
//             sub="Experience"
//           />
//         </div>
//         {/* bokking element */}
//       </div>
//       {/* seventh section */}
//       <div className="my-10 py-12 max-sm:px-2 flex flex-col gap-12 items-stretch border-black  w-[85%] mx-auto ">
//         <div className="flex flex-col gap-5">
//           <h1 className="text-3xl font-bold">Booking Policies</h1>
//         </div>
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to"
//         />
//       </div>
//       <div className="flex py-16 flex-row gap-20  items-center justify-center text-black">
//         <p>Support</p>
//         <p>FAQs</p>
//         <p>Booking policy</p>
//         <p>privacy policy</p>
//       </div>
//     </div>
//   );
// };

// export default RoomExploration;
// import RoomDetailCard from "@/components/RoomDetailCard";
// import Image from "next/image";
// import Link from "next/link";
// import FacilityCard from "@/components/FacilityCard";
// import GridSpecCard from "@/components/GridSpecCard";
// import BookingForm from "@/components/form/BookingForm";

// const RoomExploration = () => {
//   const rooms = [
//     {
//       id: 1,
//       imageUrl: "/rooms/exclusive_suit.jpg",
//       property: "view",
//       title: "Executive Suite",
//       description: "Spacious suite with a breat...",
//     },
//     {
//       id: 2,
//       imageUrl: "/rooms/deluxe_room.jpg",
//       property: "view",
//       title: "Deluxe Room",
//       description: "Modern room equipped wit...",
//     },
//     {
//       id: 3,
//       imageUrl: "/rooms/standard_room.jpg",
//       property: "view",
//       title: "Standard Room",
//       description: "Comfortable and cozy, perf...",
//     },
//     {
//       id: 4,
//       imageUrl: "/rooms/family_suit.jpg",
//       property: "view",
//       title: "Family Room",
//       description: "Ideal for families, spacious and cozy...",
//     },
//   ];
//   return (
//     <div className="w-full mb-8">
//       {/* --- First Section: Hero Image with Left-Aligned Content --- */}
//       <div className="w-full relative  h-[300px] md:h-[400px] lg:h-[500px] flex items-center text-left mb-8 md:mb-10 overflow-hidden">
//         {/* Background Image */}
//         <Image
//           src="/rooms/room_detail.jpg"
//           alt="hero photo"
//           layout="fill"
//           objectFit="cover"
//           className="z-0"
//           priority // Add priority for LCP image
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//         {/* Content - aligned to the left */}
//         <div className="relative z-20 text-white p-4 ml-4 sm:ml-8 md:ml-16 max-w-md sm:max-w-lg md:max-w-2xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
//             Explore Our Rooms
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-8">
//             Discover our luxurious and comfortable rooms tailored to meet your
//             needs. Whether you seek a romantic getaway or a family holiday, we
//             have a variety of options just for you.
//           </p>
//           <Link href="/roomgalary">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 ease-in-out">
//               Check Availability
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* --- Second Section: Room Gallery --- */}
//       <div className="w-full my-8 md:my-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch  max-w-6xl mx-auto">
//         {/* Vertical line - hidden on small screens */}
//         <div className="hidden md:block w-1 bg-[#F9EDFB]" />

//         {/* Main content */}
//         <div className="flex-1">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">Room Gallery</h2>
//           <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
//             Explore the exquisite interiors of your selected room
//           </p>
//           <div className="grid grid-cols-1 gap-8 md:gap-10 w-full">
//             {rooms.map((room) => (
//               <RoomDetailCard key={room.id} {...room} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- Third Section: Room Description (Facility Cards) --- */}
//       <div className="w-full my-8 md:my-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-8 items-stretch  max-w-6xl mx-auto">
//         <div className="flex flex-col gap-3 md:gap-5">
//           <h1 className="text-2xl sm:text-3xl font-bold">Room Description</h1>
//           <p className="text-base sm:text-lg">
//             Experience a perfect blend of luxury and comfort.
//           </p>
//         </div>
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Luxurious Room"
//           description="Experience a perfect blend of luxury and comfort in our well-appointed rooms, designed to provide an unforgettable stay."
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Comfortable Stay"
//           description="Our rooms are meticulously designed to ensure your utmost comfort, featuring plush bedding and modern amenities."
//         />
//       </div>

//       {/* --- Fourth Section: Room Specifications (GridSpecCards) --- */}
//       <div className="w-full my-8 md:my-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-8 items-stretch  max-w-6xl mx-auto">
//         <div className="flex flex-col gap-3 md:gap-5">
//           <h1 className="text-2xl sm:text-3xl font-bold">
//             Room Specifications
//           </h1>
//           <p className="text-gray-600 text-base sm:text-lg">
//             Detailed features of our luxurious accommodations.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-0 sm:p-0">
//           {" "}
//           {/* Removed inner padding */}
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Spacious Layout"
//             sub="Generous space for relaxation"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Modern Amenities"
//             sub="Equipped with state-of-the-art facilities"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Stunning Views"
//             sub="Enjoy breathtaking vistas"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="High-Speed Wi-Fi"
//             sub="Stay connected with ease"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Ensuite Bathroom"
//             sub="Private and pristine facilities"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Comfortable Bedding"
//             sub="Plush beds for a restful sleep"
//           />
//         </div>
//       </div>

//       {/* --- Fifth Section: Booking Form --- */}
//       <div className="my-8 md:my-10 w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <BookingForm />
//       </div>

//       {/* --- Sixth Section: Nearby Attractions (GridSpecCards) --- */}
//       <div className="w-full my-8 md:my-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-8 items-stretch  max-w-6xl mx-auto">
//         <div className="flex flex-col gap-3 md:gap-5">
//           <h1 className="text-2xl sm:text-3xl font-bold">Nearby Attractions</h1>
//           <p className="text-gray-600 text-base sm:text-lg">
//             Explore the best of what&apos;s around us.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-0 sm:p-0">
//           {" "}
//           {/* Removed inner padding */}
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="City Center"
//             sub="Just a short drive away"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Local Markets"
//             sub="Experience vibrant local culture"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Historical Sites"
//             sub="Discover rich heritage"
//           />
//           <GridSpecCard
//             imageUrl="/hotelroom2.jpg"
//             title="Nature Parks"
//             sub="Relax in serene green spaces"
//           />
//         </div>
//       </div>

//       {/* --- Seventh Section: Booking Policies (Facility Cards) --- */}
//       <div className="my-8 md:my-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-12 items-stretch w-full max-w-6xl mx-auto">
//         <div className="flex flex-col gap-3 md:gap-5">
//           <h1 className="text-2xl sm:text-3xl font-bold">Booking Policies</h1>
//           <p className="text-base sm:text-lg">
//             Understand our terms for a smooth booking experience.
//           </p>
//         </div>
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Flexible Cancellation"
//           description="We offer flexible cancellation options for your peace of mind. Review our policy for details."
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Payment Options"
//           description="We accept various payment methods for your convenience, including major credit cards."
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Check-in/Check-out"
//           description="Standard check-in is at 3 PM and check-out at 11 AM. Early check-in/late check-out may be available upon request."
//         />
//         <FacilityCard
//           imageUrl="/hotelroom2.jpg"
//           title="Pet Policy"
//           description="Please inquire about our pet-friendly rooms and any associated fees or restrictions."
//         />
//       </div>

//       {/* --- Footer Links --- */}
//       <div className="flex flex-col sm:flex-row py-8 md:py-16 gap-4 sm:gap-10 md:gap-20 items-center justify-center text-black text-sm sm:text-base">
//         <p>Support</p>
//         <p>FAQs</p>
//         <p>Booking Policy</p>
//         <p>Privacy Policy</p>
//       </div>
//     </div>
//   );
// };

// export default RoomExploration;
import RoomDetailCard from "@/components/RoomDetailCard";
import Image from "next/image";
import Link from "next/link";
import FacilityCard from "@/components/FacilityCard";
import GridSpecCard from "@/components/GridSpecCard";
import BookingForm from "@/components/form/BookingForm";
import { Button } from "@/components/ui/button";

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
    <div className="w-full mb-8">
      {/* --- First Section: Hero Image with Left-Aligned Content --- */}
      {/* Hero section should be full width, so it remains outside the main padded container */}
      <div className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center text-left mb-8 md:mb-10 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/rooms/room_detail.jpg"
          alt="hero photo"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 blur-[3px]"
          priority // Add priority for LCP image
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {/* Content - aligned to the left */}
        {/* The content within the hero is now centered by mx-auto and has responsive padding */}
        <div className="relative z-20 text-white px-4 sm:px-6 md:px-10 lg:px-20 mx-auto w-full">
          {/* Inner div to control max-width of text block */}
          <div className="max-w-md sm:max-w-lg md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
              Explore Our Rooms
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-8">
              Discover our luxurious and comfortable rooms tailored to meet your
              needs. Whether you seek a romantic getaway or a family holiday, we
              have a variety of options just for you.
            </p>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 ease-in-out"
              asChild
            >
              <Link href="/roomsgallery">Check Availability</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Container for all other sections with consistent padding. */}
      {/* This ensures content aligns nicely with the header/footer areas */}
      {/* <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mx-auto w-full"> */}
      <div className="w-full">
        {/* --- Second Section: Room Gallery --- */}
        <div className="w-full my-10 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-stretch ">
          {/* Vertical line - hidden on small screens */}
          <div className="hidden md:block w-1 bg-[#F9EDFB]" />

          {/* Main content */}
          <div className="w-full flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Room Gallery
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
              Explore the exquisite interiors of your selected room.
            </p>
            <div className="w-full flex flex-col  gap-8  md:gap-10 ">
              {rooms.map((room) => (
                <RoomDetailCard {...room} key={room.id} />
              ))}
            </div>
          </div>
        </div>

        {/* --- Third Section: Room Description (Facility Cards) --- */}
        <div className="w-full my-10 py-8 md:py-12 flex flex-col gap-6 md:gap-8 items-stretch  ">
          <div className="flex flex-col gap-3 md:gap-5">
            <h1 className="text-2xl sm:text-3xl font-bold">Room Description</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Experience a perfect blend of luxury and comfort.
            </p>
          </div>
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Luxurious Comfort"
            description="Our rooms redefine luxury with plush bedding, elegant decor, and a serene ambiance, ensuring a truly relaxing stay."
          />
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Modern Amenities"
            description="Equipped with high-speed Wi-Fi, smart TVs, and climate control, our rooms provide all the modern conveniences you need."
          />
        </div>

        {/* --- Fourth Section: Room Specifications (GridSpecCards) --- */}
        <div className="w-full my-10 py-8 md:py-12 flex flex-col gap-6 md:gap-8 items-stretch ">
          <div className="flex flex-col gap-3 md:gap-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Room Specifications
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Detailed features of our luxurious accommodations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 items-center">
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Room Size"
              sub="350 sq ft"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Bed Type"
              sub="King or Twin"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Capacity"
              sub="2-4 Guests"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="View"
              sub="City or Garden"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="High-Speed Wi-Fi"
              sub="Complimentary"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Air Conditioning"
              sub="Individual Control"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Mini Bar"
              sub="Stocked Daily"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Smart TV"
              sub="Cable & Streaming"
            />
          </div>
        </div>

        {/* --- Fifth Section: Booking Form --- */}
        <div className="my-10 py-8 md:py-12 w-full  flex items-center justify-center rounded-md">
          <BookingForm />
        </div>

        {/* --- Sixth Section: Nearby Attractions (GridSpecCards) --- */}
        <div className="w-full my-10 py-8 md:py-12 flex flex-col gap-6 md:gap-8 items-stretch ">
          <div className="flex flex-col gap-3 md:gap-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Nearby Attractions
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore the best of what&apos;s around us.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 justify-items-center">
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="City Center"
              sub="5 min drive"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Local Market"
              sub="10 min walk"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Museums"
              sub="15 min drive"
            />
            <GridSpecCard
              imageUrl="/hotelroom2.jpg"
              title="Botanical Garden"
              sub="20 min drive"
            />
          </div>
        </div>

        {/* --- Seventh Section: Booking Policies (Facility Cards) --- */}
        <div className="w-full my-10 py-8 md:py-12 flex flex-col gap-6 md:gap-12 items-stretch ">
          <div className="flex flex-col gap-3 md:gap-5">
            <h1 className="text-2xl sm:text-3xl font-bold">Booking Policies</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Understand our terms for a smooth booking experience.
            </p>
          </div>
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Flexible Cancellation"
            description="Enjoy peace of mind with our flexible cancellation options. Review our detailed policy for specific terms and conditions."
          />
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Secure Payment"
            description="We accept all major credit cards and offer secure online payment processing for your convenience and safety."
          />
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Check-in & Check-out"
            description="Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request and subject to availability."
          />
          <FacilityCard
            imageUrl="/hotelroom2.jpg"
            title="Pet-Friendly Stay"
            description="We welcome well-behaved pets! Please notify us in advance regarding your pet, as additional fees or restrictions may apply."
          />
        </div>

        {/* --- Footer Links --- */}
        <div className="flex flex-col sm:flex-row py-8 md:py-16 gap-4 sm:gap-10 md:gap-20 items-center justify-center text-black text-sm sm:text-base border-t border-gray-200 mt-10 pt-10">
          <p className="hover:text-blue-600 transition-colors cursor-pointer">
            Support
          </p>
          <p className="hover:text-blue-600 transition-colors cursor-pointer">
            FAQs
          </p>
          <p className="hover:text-blue-600 transition-colors cursor-pointer">
            Booking Policy
          </p>
          <p className="hover:text-blue-600 transition-colors cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomExploration;
