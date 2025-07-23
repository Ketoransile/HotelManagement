import Image from "next/image";
import {
  Card,
  CardHeader,
  // CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface RoomCardProps {
  imageUrl: string;
  price: number | string;
  title: string;
  description: string;
}

const RoomCard = ({ imageUrl, price, title, description }: RoomCardProps) => {
  return (
    <Card className="w-full overflow-hidden border-gray-300 border-2 pb-2 font-roboto">
      {/* Image wrapper with relative positioning */}
      <div className="relative top-[-24px] w-full h-85">
        {/* Price Tag */}
        <div className="absolute  bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-md z-10">
          ${price}/night
        </div>

        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <CardHeader className="relative top-[-24px] h-10 ">
        <CardTitle className="text-[16px] font-bold">{title}</CardTitle>
        <CardDescription className="text-[20px] font-extrabold">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="  flex justify-left gap-4 items-left text-gray-500 h-10 ">
        <span className="flex items-center space-x-1">🛌</span>
        <span className="flex items-center space-x-1">📶</span>
        <span className="flex items-center space-x-1">🔍</span>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
