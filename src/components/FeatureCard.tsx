// import Image from "next/image";

// export const FeatureCard = ({
//   title,
//   description,
//   Icon,
// }: {
//   title: string;
//   description: string;
//   Icon: string;
// }) => {
//   return (
//     <div className="flex flex-col items-center text-center p-6">
//       {/* <Icon className="w-12 h-12 text-gray-600" /> */}
//       <Image
//         src={Icon}
//         alt="feature-icon"
//         width={200}
//         height={200}
//         // fill
//         style={{ objectFit: "cover" }}
//         className="w-24 h-24  rounded-full flex items-center justify-center mb-6"
//       />
//       {/* </div> */}
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };
import Image from "next/image";
import { IconType } from "react-icons";
import React from "react"; // Required for JSX in Icon rendering
export interface FeatureCardProps {
  title: string;

  description: string;

  Icon: string | IconType; // `IconType` comes from 'react-icons'
}
export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  const isReactIcon = typeof Icon !== "string"; // Check if Icon is a component or a string (URL)

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm text-center">
      <div className="mb-4">
        {isReactIcon ? (
          <Icon className="w-12 h-12 text-blue-600" /> // Render React Icon component
        ) : (
          <Image
            src={Icon}
            alt={title}
            width={64} // Larger size for visual impact
            height={64}
            className="rounded-full object-cover w-16 h-16 border-2 border-gray-200"
          /> // Render Next.js Image for URL
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
