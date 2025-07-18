// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import {
//   Card,
//   CardDescription,
//   CardFooter, // Still keeping CardFooter for semantic structure, though its direct content is now in the overlay
//   CardHeader,
//   CardTitle,
// } from "../ui/card";

// // Ensure these paths are correct relative to your component file
// import roomBookingImage from "../../assets/Images/roomService.jpg";
// import foodDrinkImage from "../../assets/Images/food&drinkService.jpg";
// import guestServiceImage from "../../assets/Images/guestService.jpg";

// export const Services = () => {
//   const services = [
//     {
//       title: "Room Booking",
//       description: "Find and reserve your perfect stay with ease.",
//       buttonText: "Book Now",
//       image: roomBookingImage,
//       href: "/book-room",
//     },
//     {
//       title: "Food and Drink",
//       description: "Savor exquisite meals and refreshing beverages.",
//       buttonText: "View Menu",
//       image: foodDrinkImage,
//       href: "/food-drink",
//     },
//     {
//       title: "Guest Services",
//       description: "Dedicated support for all your needs during your stay.",
//       buttonText: "Learn More",
//       image: guestServiceImage,
//       href: "/guest-services",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center py-16 px-6 sm:px-8">
//       {/* --- Section Header --- */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Services</h1>
//         <p className="text-lg sm:text-xl text-gray-600">
//           Explore our offerings designed for your comfort.
//         </p>
//       </div>

//       {/* --- Service Cards Grid --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
//         {services.map((service, index) => (
//           <Card
//             key={index}
//             className="relative flex flex-col overflow-hidden group h-[400px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             {/* Image taking full height and width of the card */}
//             <Image
//               src={service.image}
//               alt={service.title}
//               layout="fill"
//               objectFit="cover"
//               className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
//             />

//             {/* Overlay for content and hover effect */}
//             {/* Increased overlay opacity to black/60 and added a slightly darker gradient end */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//               {/* CardHeader content */}
//               <CardHeader className="p-0 text-white mb-4">
//                 <CardTitle className="text-2xl sm:text-3xl font-bold">
//                   {service.title}
//                 </CardTitle>
//                 <CardDescription className="text-base sm:text-lg text-gray-200">
//                   {service.description}
//                 </CardDescription>
//               </CardHeader>

//               {/* View/Book/Learn More button directly on the image */}
//               <Link href={service.href} passHref>
//                 {/* Changed variant to "outline" and added custom text color and border for visibility */}
//                 <Button
//                   variant="outline"
//                   className="w-full text-lg py-3 rounded-md border-white text-white hover:bg-white hover:text-black" // Custom styles for visibility
//                 >
//                   {service.buttonText}
//                 </Button>
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Ensure these paths are correct relative to your component file
import roomBookingImage from "../../assets/Images/roomService.jpg";
import foodDrinkImage from "../../assets/Images/food&drinkService.jpg";
import guestServiceImage from "../../assets/Images/guestService.jpg";

export const Services = () => {
  const services = [
    {
      title: "Room Booking",
      description: "Find and reserve your perfect stay with ease.",
      buttonText: "Book Now",
      image: roomBookingImage,
      href: "/book-room",
    },
    {
      title: "Food and Drink",
      description: "Savor exquisite meals and refreshing beverages.",
      buttonText: "View Menu",
      image: foodDrinkImage,
      href: "/food-drink",
    },
    {
      title: "Guest Services",
      description: "Dedicated support for all your needs during your stay.",
      buttonText: "Learn More",
      image: guestServiceImage,
      href: "/guest-services",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-8">
      {/* --- Section Header --- */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our Services</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore our offerings designed for your comfort.
        </p>
      </div>

      {/* --- Service Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex flex-col overflow-hidden group h-[400px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image taking full height and width of the card */}
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay for content and hover effect */}
            {/* Modified opacity: always visible on small screens (opacity-100),
                then fades in on hover for medium and larger screens (md:opacity-0 md:group-hover:opacity-100) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              {/* CardHeader content */}
              <CardHeader className="p-0 text-white mb-4">
                <CardTitle className="text-2xl sm:text-3xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-200">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {/* View/Book/Learn More button directly on the image */}
              <Link href={service.href} passHref>
                {/* Changed variant to "outline" and added custom text color and border for visibility */}
                <Button
                  variant="outline"
                  className="w-full text-lg py-3 rounded-md border-white text-white hover:bg-white hover:text-black" // Custom styles for visibility
                >
                  {service.buttonText}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
