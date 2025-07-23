import Image from "next/image";
interface RoomCardProps {
  imageUrl: string;
  title: string;
  sub: string;
}

const GridSpecCard = ({ imageUrl, title, sub }: RoomCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 gap-4  text-black w-[200px]">
      {/* Circular Image */}
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center ">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
          className="w-full h-full  rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-lg font-bold ">{title}</h1>
        <p className=" text-sm font-light">{sub}</p>
      </div>
    </div>
  );
};

export default GridSpecCard;
