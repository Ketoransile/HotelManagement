// import Image from "next/image";
// interface RoomCardProps {
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// const FacilityCard = ({ imageUrl, title, description }: RoomCardProps) => {
//   return (
//     <div className="flex flex-row p-2 gap-8 rounded-md border-black ">
//       <div>
//         <Image
//           src={imageUrl}
//           alt={title}
//           width={200}
//           height={150}
//           className="object-cover rounded-t-xl"
//         />
//       </div>
//       <div className="flex flex-col gap-4">
//         <h1 className="text-xl font-bold">{title}</h1>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default FacilityCard;
import Image from "next/image";
import { JSX } from "react";

interface FacilityCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  return (
    // Changed to stack on small screens, row on medium screens and up
    <div className="flex flex-col sm:flex-row p-4 gap-4 sm:gap-8 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md items-start">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:w-48 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
        {/* <Image
          src={imageUrl}
          alt={title}
          fill // Use fill to make image responsive within its parent
          className="object-cover" // Ensure image covers the area
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Optimize image loading
        /> */}
        {icon}
      </div>
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-2 sm:gap-4 text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
