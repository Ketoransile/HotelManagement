import Image from "next/image";

const BedroomImage = () => (
  <div className="relative  h-80">
    {" "}
    {/* Make sure to give height! */}
    <Image
      src="/hotelroom2.jpg"
      alt="Luxurious room"
      fill
      quality={90}
      className="object-cover z-0"
    />
  </div>
);

export default BedroomImage;
