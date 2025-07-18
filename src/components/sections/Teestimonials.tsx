import { TestimonialCard } from "../TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "An amazing stay! Highly recommend.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Beautiful rooms and great service.",
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Brown",
      review: "Loved the restaurant and the ambiance.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        What Our Guests Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            review={testimonial.review}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};
