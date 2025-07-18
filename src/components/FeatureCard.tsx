export const FeatureCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-gray-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
