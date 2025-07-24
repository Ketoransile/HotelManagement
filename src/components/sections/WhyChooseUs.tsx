// import { FeatureCard } from "../FeatureCard";
// import { MdLocationOn } from "react-icons/md";
// import { FaLeaf } from "react-icons/fa";
// import { GiKnifeFork } from "react-icons/gi";

// // export const WhyChooseUs = () => {
// //   const features = [
// //     {
// //       id: 1,
// //       title: "Exceptional Service",
// //       description: "Located in the heart of the city.",
// //       Icon: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
// //     },
// //     {
// //       id: 2,
// //       title: "Prime Location",
// //       description: "Committed to eco-friendly practices.",
// //       Icon: "https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg",
// //     },
// //     {
// //       id: 3,
// //       title: "Locally Inspired Cuisine",
// //       description: "Explore different cuisines tailored for you.",
// //       Icon: "https://images.pexels.com/photos/33123921/pexels-photo-33123921.jpeg",
// //     },
// //     {
// //       id: 4,
// //       title: "Eco-Friendly Practices",
// //       description: "Explore different cuisines tailored for you.",
// //       Icon: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg",
// //     },
// //     {
// //       id: 5,
// //       title: "Award-Winning Design",
// //       description: "Explore different cuisines tailored for you.",
// //       Icon: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
// //     },
// //   ];

// //   return (
// //     <div className="flex flex-col items-center justify-center py-12  font-sans">
// //       <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
// //       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"> */}
// //       <div className="w-full grid grid-cols-2 gap-8   items-center justify-center">
// //         {features.map((feature) => (
// //           <FeatureCard
// //             key={feature.id}
// //             title={feature.title}
// //             description={feature.description}
// //             Icon={feature.Icon}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// export const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Exceptional Service",
//       description: "Located in the heart of the city.",
//       Icon: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
//     },
//     {
//       id: 2,
//       title: "Prime Location",
//       description: "Committed to eco-friendly practices.",
//       Icon: "https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg",
//     },
//     {
//       id: 3,
//       title: "Locally Inspired Cuisine",
//       description: "Explore different cuisines tailored for you.",
//       Icon: "https://images.pexels.com/photos/33123921/pexels-photo-33123921.jpeg",
//     },
//     {
//       id: 4,
//       title: "Eco-Friendly Practices",
//       description: "Explore different cuisines tailored for you.",
//       Icon: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg",
//     },
//     {
//       id: 5,
//       title: "Award-Winning Design",
//       description: "Explore different cuisines tailored for you.",
//       Icon: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 font-sans px-4">
//       <div className="flex flex-col gap-4 self-start mb-12">
//         <h2 className="text-4xl font-bold text-gray-900  ">Why Choose Us?</h2>
//         <p className="text-sm ">
//           Discover the unique aspects that set us apart.
//         </p>
//       </div>
//       {/* <div className="w-full  grid grid-cols-2 gap-8  justify-items-center"> */}
//       <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//         {features.map((feature) => (
//           <FeatureCard
//             key={feature.id}
//             title={feature.title}
//             description={feature.description}
//             Icon={feature.Icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
import { FeatureCard } from "../FeatureCard"; // Assuming FeatureCard is in the parent directory
import { MdLocationOn } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaStar } from "react-icons/fa"; // Added for 'Exceptional Service'
import { MdOutlineDesignServices } from "react-icons/md"; // Added for 'Award-Winning Design'

export const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Exceptional Service",
      description:
        "Our dedicated staff provides personalized care, ensuring a seamless and memorable stay from check-in to check-out.",
      Icon: FaStar, // Using React Icon
    },
    {
      id: 2,
      title: "Prime Location",
      description:
        "Strategically located in the vibrant heart of the city, offering easy access to major attractions, dining, and entertainment.",
      Icon: MdLocationOn, // Using React Icon
    },
    {
      id: 3,
      title: "Locally Inspired Cuisine",
      description:
        "Savor exquisite dishes crafted with fresh, local ingredients, bringing the authentic flavors of the region to your plate.",
      Icon: GiKnifeFork, // Using React Icon
    },
    {
      id: 4,
      title: "Eco-Friendly Practices",
      description:
        "Committed to sustainability, we implement green initiatives to minimize our environmental footprint and protect the planet.",
      Icon: FaLeaf, // Using React Icon
    },
    {
      id: 5,
      title: "Award-Winning Design",
      description:
        "Experience luxury in every detail with our meticulously designed spaces, recognized for their innovative architecture and comfort.",
      Icon: MdOutlineDesignServices, // Using React Icon
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 font-sans px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-center mb-12 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Why Choose Us?
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          Discover the unique aspects that set us apart and guarantee an
          unparalleled experience.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
          />
        ))}
      </div>
    </div>
  );
};
