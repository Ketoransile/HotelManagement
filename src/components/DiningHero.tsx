// import Image from "next/image";
// import { Button } from "./ui/button";

// export const DiningHero = () => {
//   return (
//     <div className="w-full flex items-center justify-between">
//       <div className="flex flex-col gap-4">
//         <h1 className="text-4xl font-bold">We Serve The Test You Love</h1>
//         <p className="text-md max-w-xl">
//           This is a type of Hotel which typically serves food and drinks. in
//           addition to light refreshment such as a baked goods or snacks. The
//           term comes from the rench word meaning food.
//         </p>
//         <Button className="bg-blue-600 text-white font-bold w-fit px-12">
//           Explore Food
//         </Button>
//       </div>
//       <div className="">
//         <Image
//           src="/DiningHero.svg"
//           width={1000}
//           height={1000}
//           alt="dining-page-hero-img"
//           className="w-[500px] h-[500px]"
//         />
//       </div>
//     </div>
//   );
// };
import Image from "next/image";
import { Button } from "./ui/button";

export const DiningHero = () => {
  return (
    // Added more vertical padding and consistent horizontal padding
    <div className="w-full flex max-lg:flex-col  items-center justify-between py-12 px-6 lg:px-12">
      {/* Text on the right */}
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-extrabold leading-snug">
          We Serve The Taste You Love
        </h1>
        <p className="text-md sm:text-lg max-w-xl leading-relaxed text-gray-700 mx-auto lg:mx-0">
          This is a type of Hotel which typically serves food and drinks, in
          addition to light refreshment such as baked goods or snacks. The term
          comes from the French word meaning food.
        </p>
        <Button className="bg-blue-600 text-white font-semibold w-fit px-14 py-3.5 mt-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors mx-auto lg:mx-0">
          Explore Food
        </Button>
      </div>{" "}
      {/* Image on the left for lg:flex-row-reverse */}
      <div className="mb-12 lg:mb-0 lg:ml-16">
        {" "}
        {/* Added left margin on large screens */}
        <Image
          src="/DiningHero.svg"
          width={1000}
          height={1000}
          alt="dining-page-hero-img"
          className="w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] object-contain"
        />
      </div>
    </div>
  );
};
