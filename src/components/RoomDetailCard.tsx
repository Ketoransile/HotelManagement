// import Image from "next/image";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   // CardDescription,
// } from "@/components/ui/card";

// interface RoomCardProps {
//   imageUrl: string;
//   property: string;
//   title: string;
//   description: string;
// }

// const RoomDetailCard = ({ imageUrl, property, title }: RoomCardProps) => {
//   return (
//     <Card className="w-full overflow-hidden border-gray-200 border-2 pb-2 font-roboto">
//       {/* Image wrapper with relative positioning */}
//       <div className="relative top-[-24px] w-full h-85">
//         {/* Price Tag */}
//         <div className="absolute  bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-md z-10">
//           {property}
//         </div>

//         {/* Image */}
//         <Image
//           src={imageUrl}
//           alt={title}
//           fill
//           className="object-cover rounded-t-xl"
//         />
//       </div>

//       <CardHeader className="relative top-[-24px] h-10 ">
//         <CardTitle className="text-[16px] ">{title}</CardTitle>
//       </CardHeader>
//     </Card>
//   );
// };

// export default RoomDetailCard;
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming these are from Shadcn UI or similar

interface RoomDetailCardProps {
  imageUrl: string;
  property: string; // Renamed from RoomCardProps to be more specific
  title: string;
  // description: string; // Description was not used in this component, removed to avoid confusion
}

const RoomDetailCard = ({ imageUrl, property, title }: RoomDetailCardProps) => {
  return (
    // Removed negative top margin, added consistent padding and modern shadow
    // <Card className="w-full overflow-hidden border border-gray-200 shadow-lg rounded-xl transition-shadow hover:shadow-xl font-roboto">
    <Card className="w-full overflow-hidden border border-gray-200 shadow-lg rounded-xl pt-0 transition-shadow hover:shadow-xl font-roboto">
      {/* Image wrapper with relative positioning and responsive height */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-t-xl overflow-hidden">
        {/* Price Tag */}
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-br-xl z-10 shadow-md">
          {property}
        </div>

        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
          priority // Consider adding priority if this card is above the fold
        />
      </div>

      {/* Card Header with proper padding */}
      <CardHeader className="px-4 ">
        {" "}
        {/* Adjusted padding */}
        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default RoomDetailCard;
