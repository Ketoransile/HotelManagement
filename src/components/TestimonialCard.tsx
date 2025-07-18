interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}
export const TestimonialCard = ({
  name,
  review,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="w-full bg-gray-100 px-4 py-6 rounded-lg shadow-md flex flex-col gap-4 text-center">
      {/* Top Section: Avatar + Name + Rating */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-xl font-bold">
              {name.charAt(0)}
            </span>
          </div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 italic px-2">&ldquo;{review}&rdquo;</p>
    </div>
  );
};
