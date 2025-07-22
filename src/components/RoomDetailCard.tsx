import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface RoomCardProps {
  imageUrl: string;
  property: string;
  title: string;
  description: string;
}

const RoomDetailCard = ({ imageUrl, property, title }: RoomCardProps) => {
  return (
    <Card className="w-full overflow-hidden border-gray-200 border-2 pb-2 font-roboto">
      {/* Image wrapper with relative positioning */}
      <div className="relative top-[-24px] w-full h-85">
        {/* Price Tag */}
        <div className="absolute  bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-md z-10">
          {property}
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
        <CardTitle className="text-[16px] ">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default RoomDetailCard;
