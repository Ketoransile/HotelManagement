import Image from "next/image";
import heroImage from "../../assets/Images/heroImage.jpg"; // Ensure this path is correct
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutUsSections } from "@/components/sections/AboutUsSections";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col gap-16 md:gap-24 items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* AboutHero */}
      <section className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={heroImage}
              width={600}
              height={400}
              alt="Hotel exterior"
              className="rounded-lg shadow-lg object-cover w-full h-auto max-h-96"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Story
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-prose mx-auto md:mx-0">
              Founded in 2005, our hotel seamlessly blends modern luxury with
              timeless hospitality, creating unforgettable stays for every
              guest. We&apos;ve grown from a humble beginning into a beacon of
              comfort and excellence in the heart of the city.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-neutral-200 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg">
            <Image
              src={heroImage} // Consider using a different, relevant image here
              width={120}
              height={120}
              alt="Historical building"
              className="rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0"
            />
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                A Rich Heritage
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Nestled in the heart of the city, our hotel has been a place of
                comfort and conviviality for years, deeply rooted in local
                history and culture.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-neutral-200 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg">
            <Image
              src={heroImage} // Consider using a different, relevant image here
              width={120}
              height={120}
              alt="Modern architecture"
              className="rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0"
            />
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Modern Elegance
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                We continuously evolve, integrating contemporary design and
                amenities while preserving the classic charm that defines us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <AboutUsSections />
    </div>
  );
}
