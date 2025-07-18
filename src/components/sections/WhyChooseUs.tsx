import { FeatureCard } from "../FeatureCard";
import { MdLocationOn } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

export const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Prime Location",
      description: "Located in the heart of the city.",
      Icon: MdLocationOn,
    },
    {
      id: 2,
      title: "Sustainability",
      description: "Committed to eco-friendly practices.",
      Icon: FaLeaf,
    },
    {
      id: 3,
      title: "Diverse Dining",
      description: "Explore different cuisines tailored for you.",
      Icon: GiKnifeFork,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
          />
        ))}
      </div>
    </div>
  );
};
