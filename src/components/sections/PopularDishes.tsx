"use client";
import { FoodCard } from "../FoodCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export const PopularDishes = () => {
  // Sample data for popular dishes
  const dishes = [
    {
      id: 1,
      name: "Pasta",
      description:
        "Pasta is a type of food typically made from an unleavened dough.",
      price: 547.34,
      rating: 4,
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      name: "French Fries",
      description:
        "Pasta is a type of food typically made from an unleavened dough.",
      price: 747.34,
      rating: 5,
      image: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg",
    },
    {
      id: 3,
      name: "Chicken Shawarma",
      description:
        "Pasta is a type of food typically made from an unleavened dough.",
      price: 687.34,
      rating: 4,
      image:
        "https://images.pexels.com/photos/18177331/pexels-photo-18177331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      name: "Fish Curry",
      description:
        "Pasta is a type of food typically made from an unleavened dough.",
      price: 947.34,
      rating: 3,
      image:
        "https://images.pexels.com/photos/9392999/pexels-photo-9392999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      name: "Pizza",
      description:
        "Pasta is a type of food typically made from an unleavened dough.",
      price: 447.34,
      rating: 5,
      image:
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <div className="w-full md:min-h-screen bg-gray-100 flex flex-col items-center py-10 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Popular Dishes</h1>
      {/* <div className="w-full grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-y-10 items-center justify-between"> */}
      <div className="hidden md:grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {dishes.map((dish) => (
          <FoodCard
            key={dish.id}
            image={dish.image}
            title={dish.name}
            description={dish.description}
            price={dish.price}
            rating={dish.rating}
            onAddToCart={() => console.log(`Added ${dish.name} to cart`)}
          />
        ))}
      </div>
      {/* Mobile Carousel */}
      <div className="w-full md:hidden relative ">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-full p-2 border-none"
        >
          <CarouselContent className="w-fit">
            {dishes.map((dish) => (
              <CarouselItem key={dish.id} className="basis-1/3 border-none">
                <div className="p-0">
                  <Card className="p-0 border-none">
                    <CardContent className="p-0">
                      <FoodCard
                        image={dish.image}
                        title={dish.name}
                        description={dish.description}
                        price={dish.price}
                        rating={dish.rating}
                        onAddToCart={() =>
                          console.log(`Added ${dish.name} to cart`)
                        }
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 -top-6" />
          <CarouselNext className="absolute -top-6 right-2" />
        </Carousel>
      </div>
    </div>
  );
};
