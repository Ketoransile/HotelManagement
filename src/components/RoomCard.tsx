"use client";

import Image from "next/image";
import {
  BedDouble,
  Users,
  Wifi,
  Bath,
  SquareKanban,
  Coffee,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FeatureIconName =
  | "bed"
  | "guests"
  | "wifi"
  | "bath"
  | "balcony"
  | "breakfast";

interface RoomFeature {
  icon: FeatureIconName;
  text: string;
}

interface RoomCardProps {
  imageUrl: string;
  price: number | string;
  title: string;
  description: string;
  features: RoomFeature[];
  id: string;
  rating?: number;
}

const RoomCard = ({
  imageUrl,
  price,
  title,
  description,
  features,
  id,
  rating,
}: RoomCardProps) => {
  const renderIcon = (iconName: FeatureIconName) => {
    const iconClass = "h-4 w-4 text-blue-600";
    switch (iconName) {
      case "bed":
        return <BedDouble className={iconClass} />;
      case "guests":
        return <Users className={iconClass} />;
      case "wifi":
        return <Wifi className={iconClass} />;
      case "bath":
        return <Bath className={iconClass} />;
      case "balcony":
        return <SquareKanban className={iconClass} />;
      case "breakfast":
        return <Coffee className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <Card className="relative group w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-0">
      <Link href={`/rooms/${id}`} className="block h-full">
        {/* Image section */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm z-10">
            ${price}/night
          </div>
          {/* Rating badge */}
          {rating && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-amber-600 text-sm font-semibold px-2.5 py-1 rounded-full shadow-sm z-10 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5">
          <CardHeader className="p-0 mb-3">
            <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500 mt-1 line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>

          {/* Features Section */}
          <CardContent className="p-0 mb-4">
            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 text-xs bg-gray-50 rounded-lg px-3 py-2 transition-all hover:bg-gray-100"
                >
                  {renderIcon(feature.icon)}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Call-to-action Button */}
          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition duration-300 ease-in-out group/button"
          >
            <span className="group-hover/button:translate-x-1 transition-transform">
              View Details
            </span>
            <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover/button:opacity-100 transition-opacity" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default RoomCard;
