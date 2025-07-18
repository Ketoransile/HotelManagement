import React from "react";
import Image from "next/image"; // Import the Image component from next/image

// FoodCard Component: A reusable component to display food information.
type FoodCardProps = {
  image?: string;
  name: string;
  description: string;
  price: number;
  rating: number;
};
export const FoodCard = ({
  image,
  name,
  description,
  price,
  rating,
}: FoodCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 m-4 max-w-xs w-full">
      {/* Image Placeholder - Now using Next.js Image component */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
        {" "}
        {/* Added relative for Image fill */}
        {image ? (
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        ) : (
          <span className="text-gray-500 text-lg">No Image</span>
        )}
      </div>

      {/* Food Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {name}
      </h3>

      {/* Rating Stars */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Food Description */}
      <p className="text-gray-600 text-sm text-center mb-4 px-2">
        {description}
      </p>

      {/* Price and Add to Cart Button */}
      <div className="flex justify-between items-center w-full px-2">
        <span className="text-lg font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
