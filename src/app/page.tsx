// import Image from "next/image";
// import heroImage from "../assets/Images/heroImage.jpg";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { PopularDishes } from "@/components/sections/PopularDishes";
import { Testimonials } from "@/components/sections/Teestimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="w-full relative min-h-screen overflow-hidden ">
      <div className="relative z-10">
        <Hero />
        <Services />
        <FeaturedRooms />
        <PopularDishes />
        <Testimonials />
        <WhyChooseUs />
        <NewsletterSection />
      </div>
    </div>
  );
}
