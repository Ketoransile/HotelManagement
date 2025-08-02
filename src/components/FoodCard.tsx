// "use client";
// import Image from "next/image";
// import { Button } from "./ui/button"; // Assuming you have a reusable Button component

// interface FoodCardProps {
//   image: string;
//   title: string;
//   rating: number; // Assuming a rating out of 5
//   description: string;
//   price: number;
//   onAddToCart: () => void; // Function to call when add to cart is clicked
// }

// export const FoodCard = ({
//   image,
//   title,
//   rating,
//   description,
//   price,
//   onAddToCart,
// }: FoodCardProps) => {
//   // Function to render star icons based on the rating
//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <svg
//           key={i}
//           className={`h-5 w-5 ${
//             i < rating ? "text-yellow-400" : "text-gray-300"
//           }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//         </svg>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 transform transition-transform duration-300 hover:scale-105">
//       {/* Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           style={{ objectFit: "cover" }}
//           className="rounded-t-lg"
//         />
//       </div>

//       {/* Content Area */}
//       <div className="p-4 flex flex-col items-center text-center">
//         {/* Title */}
//         <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>

//         {/* Rating Stars */}
//         <div className="flex justify-center my-2">{renderStars()}</div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-4 px-2 line-clamp-3">
//           {description}
//         </p>

//         {/* Price and Add To Cart */}
//         <div className="flex justify-between items-center w-full px-2">
//           <span className="text-lg font-bold text-gray-900">
//             ${price.toFixed(2)}
//           </span>
//           <Button
//             onClick={onAddToCart}
//             className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
//           >
//             Add To Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// "use client";
// import Image from "next/image";
// import { Button } from "./ui/button";

// interface FoodCardProps {
//   image: string;
//   title: string;
//   rating: number;
//   description: string;
//   price: number;
//   onAddToCart: () => void;
// }

// export const FoodCard = ({
//   image,
//   title,
//   rating,
//   description,
//   price,
//   onAddToCart,
// }: FoodCardProps) => {
//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <svg
//           key={i}
//           className={`h-5 w-5 ${
//             i < rating ? "text-yellow-400" : "text-gray-300"
//           }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//         </svg>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105">
//       {/* Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           style={{ objectFit: "cover" }}
//           className="rounded-t-lg"
//         />
//       </div>

//       {/* Content Area */}
//       <div className="p-4 flex flex-col items-center text-center">
//         {/* Title */}
//         <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>

//         {/* Rating Stars */}
//         <div className="flex justify-center my-2">{renderStars()}</div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-4 px-2 line-clamp-3">
//           {description}
//         </p>

//         {/* Price and Add To Cart */}
//         <div className="flex justify-between items-center w-full px-2">
//           <span className="text-lg font-bold text-gray-900">
//             ${price.toFixed(2)}
//           </span>
//           <Button
//             onClick={onAddToCart}
//             className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
//           >
//             Add To Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import Image from "next/image";
import { Button } from "./ui/button";

interface FoodCardProps {
  image: string;
  title: string;
  rating: number;
  description: string;
  price: number;
  onAddToCart: () => void;
}

export const FoodCard = ({
  image,
  title,
  rating,
  description,
  price,
  onAddToCart,
}: FoodCardProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-4 w-4 md:h-5 md:w-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs md:w-72 transform transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative w-full h-32 md:h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>

      {/* Content Area */}
      <div className="p-2 md:p-4 flex flex-col items-center text-center">
        {/* Title */}
        <h3 className="text-base md:text-xl font-semibold text-gray-800 mt-2 line-clamp-1">
          {title}
        </h3>

        {/* Rating Stars */}
        <div className="flex justify-center my-1 md:my-2">{renderStars()}</div>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 px-1 md:px-2 line-clamp-2">
          {description}
        </p>

        {/* Price and Add To Cart */}
        <div className="flex justify-between items-center w-full px-1 md:px-2">
          <span className="text-base md:text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <Button
            onClick={onAddToCart}
            className="bg-blue-600 text-white font-medium text-xs md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
