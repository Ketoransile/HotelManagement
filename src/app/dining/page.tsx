import { DiningHero } from "@/components/DiningHero";
import { MeetOurChefs } from "@/components/MeetOurChefs";
import { MenuSection } from "@/components/MenuSection";
import { PopularDishes } from "@/components/sections/PopularDishes";

export default function DiningPage() {
  return (
    <div className="w-full min-h-screen ">
      <DiningHero />
      <PopularDishes />
      <MenuSection />
      <MeetOurChefs />
    </div>
  );
}
