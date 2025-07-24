// import Image from "next/image";
// import heroImage from "../../assets/Images/heroImage.jpg";
// const teamMembers = [
//   {
//     name: "Jane Doe",
//     role: "General Manager",
//     description:
//       "With over 20 years in hospitality, Jane leads our team with warmth and integrity.",
//     image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg", // Replace with your actual image path
//   },
//   {
//     name: "John Smith",
//     role: "Executive Chef",
//     description:
//       "John brings local flavors to life with his creative culinary art, ensuring every meal is a delight.",
//     image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg", // Replace with your actual image path
//   },
// ];

// const testimonials = [
//   {
//     name: "Emily R.",
//     feedback: "A luxurious stay with exceptional service!",
//     rating: 5,
//     avatar:
//       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg", // Replace with your actual image path
//   },
//   {
//     name: "Michael T.",
//     feedback: "The perfect getaway in an enchanting location.",
//     rating: 5,
//     avatar:
//       "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg", // Replace with your actual image path
//   },
// ];

// export const AboutUsSections = () => {
//   return (
//     <div className="w-full px-4 md:px-12 space-y-24 py-16 font-sans">
//       {/* Team Section */}
//       <section className="w-full text-center">
//         <h2 className="text-3xl font-bold mb-2">Meet the Team</h2>
//         <p className="text-gray-600 mb-10">
//           Get to know the passionate individuals behind your unforgettable
//           experience.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="flex items-center p-4 border border-neutral-300 rounded-lg shadow-sm bg-white max-w-sm"
//             >
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 width={100}
//                 style={{ objectFit: "cover" }}
//                 height={100}
//                 className=" "
//               />
//               <div className="ml-4 text-left">
//                 <h4 className="font-bold">{member.name}</h4>
//                 <p className="text-sm text-gray-500">{member.role}</p>
//                 <p className="text-sm mt-1 text-gray-700">
//                   {member.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="w-full grid md:grid-cols-2 gap-8 items-start">
//         <div>
//           <h2 className="text-3xl font-bold mb-2">What Our Guests Say</h2>
//           <p className="text-gray-600">
//             Hear directly from those who have experienced our hospitality.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4">
//           {testimonials.map((t, index) => (
//             <div
//               key={index}
//               className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-between"
//             >
//               <div className="">
//                 <div className="flex items-center gap-2 mb-1">
//                   <Image
//                     src={t.avatar}
//                     alt={t.name}
//                     width={500}
//                     height={500}
//                     style={{ objectFit: "cover" }}
//                     className="rounded-full h-12 w-12 "
//                   />
//                   <span className="font-semibold">{t.name}</span>
//                 </div>
//                 <p className="text-gray-700 text-sm mb-1">{t.feedback}</p>
//               </div>
//               <div className="text-yellow-500 text-sm">
//                 {"★".repeat(t.rating)}{" "}
//                 <span className="text-gray-400">
//                   {"★".repeat(5 - t.rating)}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full overflow-hidden rounded-lg shadow-md relative">
//         <Image
//           src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" // Replace with your actual CTA image path
//           alt="CTA Banner"
//           width={500}
//           height={500}
//           style={{ objectFit: "cover" }}
//           className=" w-full   "
//         />
//         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//           <p className="text-white text-lg md:text-xl font-medium">
//             Join us for a stay that feels like home.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };
// components/sections/AboutUsSections.js
import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "General Manager",
    description:
      "With over 20 years in hospitality, Jane leads our team with warmth and integrity, ensuring every guest feels at home.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
  {
    name: "John Smith",
    role: "Executive Chef",
    description:
      "John brings local flavors to life with his creative culinary art, ensuring every meal is a delightful and memorable experience.",
    image:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
  {
    name: "Sarah Chen",
    role: "Head of Guest Relations",
    description:
      "Sarah is dedicated to making every guest's stay seamless and enjoyable, providing personalized attention and support.",
    image:
      "https://images.pexels.com/photos/3779768/pexels-photo-3779768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
  {
    name: "David Lee",
    role: "Events Coordinator",
    description:
      "David orchestrates unforgettable events, from intimate gatherings to grand celebrations, with meticulous planning and execution.",
    image:
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
];

const testimonials = [
  {
    name: "Emily R.",
    feedback:
      "A truly luxurious stay with exceptional service from start to finish. Highly recommend!",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
  {
    name: "Michael T.",
    feedback:
      "The perfect getaway in an enchanting location. Every detail was perfect, and the staff were incredibly welcoming.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
  {
    name: "Sophia L.",
    feedback:
      "An unforgettable experience! The rooms were beautiful, and the culinary offerings were outstanding.",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // High-res Pexels image
  },
];

export const AboutUsSections = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 space-y-20 md:space-y-28 py-16 font-sans">
      {/* Team Section */}
      <section className="w-full text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Meet the Team
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Get to know the passionate individuals behind your unforgettable
          experience, dedicated to making your stay exceptional.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border border-neutral-200 rounded-lg shadow-md bg-white transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-4 border-white shadow-sm mb-4"
              />
              <div className="text-center">
                <h4 className="font-bold text-xl text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              What Our Guests Say
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-prose lg:max-w-none mx-auto lg:mx-0">
              Hear directly from those who have experienced our hospitality and
              discover why they keep coming back.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-white shadow-sm flex-shrink-0"
                />
                <div className="flex flex-col text-center sm:text-left flex-grow">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="font-semibold text-lg text-gray-800">
                      {t.name}
                    </span>
                    <div className="text-yellow-500 flex">
                      {"★".repeat(t.rating)}
                      <span className="text-gray-300">
                        {"★".repeat(5 - t.rating)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {`"${t.feedback}"`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl relative h-64 md:h-80 lg:h-96">
        <Image
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // High-res Pexels image for CTA
          alt="Luxury hotel interior"
          layout="fill"
          objectFit="cover"
          className="filter brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center">
          <p className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Ready for an Unforgettable Experience?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Book Your Stay
          </button>
        </div>
      </section>
    </div>
  );
};
