import Image from "next/image";
interface RoomCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const FacilityCard = ({ imageUrl, title, description }: RoomCardProps) => {
  return (
    <div className="flex flex-row p-2 gap-8 rounded-md border-black ">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={150}
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
