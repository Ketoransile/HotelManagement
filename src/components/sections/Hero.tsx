// import { Button } from "../ui/button";
// import roomImage from "../../assets/Images/roomImage.jpg";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react"; // Importing an icon from lucide-react

// export const Hero = () => {
//   return (
//     // Main container for the hero section
//     // Uses flexbox for layout, reversing order on small screens (mobile-first)
//     // Ensures minimum screen height, adds horizontal padding, and sets text color
//     <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 py-12 text-black ">
//       {/* Left section: Text content */}
//       <div className="max-w-xl text-center md:text-left md:mr-12 mt-10 md:mt-0">
//         {/* Main heading with enhanced typography */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//           Experience Comfort & Elegance
//         </h1>
//         {/* Subtitle/tagline for more context */}
//         <p className="text-lg md:text-xl mb-8 opacity-90">
//           Discover luxurious stays and unparalleled hospitality in the heart of
//           the city.
//         </p>
//         {/* "Book Your Stay" Call-to-Action Button */}
//         <Button
//           className="
//          bg-black text-white font-bold
//         "
//         >
//           Book Your Stay
//         </Button>
//       </div>

//       {/* Right section: Image container */}
//       <div
//         className="
//         relative rounded-3xl overflow-hidden shadow-2xl
//         w-full md:w-1/2 lg:w-[600px] h-96 md:h-[500px] lg:h-[600px]
//         flex-shrink-0
//       "
//       >
//         {/* Next.js Image component for optimized image loading */}
//         <Image
//           src={roomImage}
//           alt="Luxurious hotel room"
//           fill // Fills the parent container
//           className="object-cover object-center transition-transform duration-500 hover:scale-105" // Removed blur, added subtle hover effect
//           priority // Prioritize loading for hero image
//         />
//         {/* "Show Top Rated Rooms" Button - positioned absolutely at bottom-right */}
//         <Button
//           className="
//           absolute bottom-4 right-4
//           px-6 py-3 text-base
//           backdrop-blur-md bg-white/30 text-white rounded-full
//           shadow-md hover:bg-white/50 transition-colors duration-300 ease-in-out
//           flex items-center space-x-2
//         "
//         >
//           <span>Show Top Rated Rooms</span>
//           <ArrowUpRight className="h-5 w-5" /> {/* Icon added */}
//         </Button>
//         {/* <div className="w-full absolute bottom-0 py-6 "></div> */}
//       </div>
//     </div>
//   );
// };
import { Button } from "../ui/button"; // Assuming this path is correct for your Button component
import roomImage from "../../assets/Images/roomImage.jpg"; // Assuming this path is correct for your image
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // Importing an icon from lucide-react
import React from "react"; // Explicitly import React

export const Hero = () => {
  return (
    // Main container for the hero section
    // Uses flexbox for layout, reversing order on small screens (mobile-first)
    // Ensures minimum screen height, adds horizontal padding, and sets text color
    // Added a subtle background gradient for a modern touch
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 py-12 text-black bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background overlay for subtle effect */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>

      {/* Left section: Text content */}
      <div className="max-w-xl text-center md:text-left md:mr-12 mt-6 md:mt-0 z-10 animate-fade-in-left mb-4">
        {/* Main heading with enhanced typography and subtle shadow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-900 drop-shadow-md">
          Experience Comfort & Elegance
        </h1>
        {/* Subtitle/tagline for more context */}
        <p className="text-lg md:text-xl mb-8 opacity-80 text-gray-700">
          Discover luxurious stays and unparalleled hospitality in the heart of
          the city.
        </p>
        {/* "Book Your Stay" Call-to-Action Button */}
        <Button
          className="
            bg-black text-white font-bold py-3 px-8 rounded-full
            hover:bg-gray-800 transition-all duration-300 ease-in-out
            shadow-lg hover:shadow-xl transform hover:-translate-y-1
          "
        >
          Book Your Stay
        </Button>
      </div>

      {/* Right section: Image container */}
      <div
        className="
          relative rounded-3xl overflow-hidden shadow-2xl
          w-full md:w-1/2 lg:w-[600px] h-96 md:h-[500px] lg:h-[600px]
          flex-shrink-0 z-10 animate-fade-in-right
        "
      >
        {/* Next.js Image component for optimized image loading */}
        <Image
          src={roomImage}
          alt="Luxurious hotel room"
          fill // Fills the parent container
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
          priority // Prioritize loading for hero image
        />
        {/* "Show Top Rated Rooms" Button - positioned absolutely at bottom-right */}
        <Button
          className="
            absolute bottom-4 right-4
            px-6 py-3 text-base
            backdrop-blur-md bg-white/30 text-white rounded-full
            shadow-lg hover:bg-white/50 transition-all duration-300 ease-in-out
            flex items-center space-x-2 transform hover:-translate-y-1
          "
        >
          <span>Show Top Rated Rooms</span>
          <ArrowUpRight className="h-5 w-5" /> {/* Icon added */}
        </Button>
      </div>
    </div>
  );
};
