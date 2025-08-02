"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodCard } from "./FoodCard"; // Assuming FoodCard is in the same or a parent directory
import { cn } from "@/lib/utils"; // Assuming you have utils.js in "@/lib" for combining classNames
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const menuCategories = [
  "All",
  "special Foods",
  "Mexican",
  "Italian",
  "Japanese",
  "Drinks",
  "Lunch",
  "Pizza",
];

const allFoods = [
  // --- Italian Dishes ---
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with a rich meat-based sauce.",
    price: 620.75,
    rating: 5,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Italian",
  },
  {
    id: 2,
    name: "Pasta Primavera",
    description: "Fresh pasta with seasonal vegetables in a light sauce.",
    price: 580.0,
    rating: 4,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    category: "Italian",
  },
  {
    id: 3,
    name: "Lasagna",
    description: "Layers of pasta, rich meat sauce, and creamy béchamel.",
    price: 750.2,
    rating: 4,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", // Placeholder
    category: "Italian",
  },
  {
    id: 4,
    name: "Risotto Funghi",
    description: "Creamy Italian rice dish with assorted mushrooms.",
    price: 690.5,
    rating: 4,
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    category: "Italian",
  },
  {
    id: 5,
    name: "Gnocchi al Pesto",
    description: "Soft potato dumplings tossed in a vibrant basil pesto.",
    price: 595.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg", // Placeholder
    category: "Italian",
  },

  // --- Japanese Dishes ---
  {
    id: 6,
    name: "Sushi Platter",
    description: "Assorted fresh sushi rolls and nigiri.",
    price: 1200.0,
    rating: 4,
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
    category: "Japanese",
  },
  {
    id: 7,
    name: "Ramen (Tonkotsu)",
    description:
      "Rich pork bone broth ramen with chashu pork and soft-boiled egg.",
    price: 850.0,
    rating: 5,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    category: "Japanese",
  },
  {
    id: 8,
    name: "Tempura Assortment",
    description: "Lightly battered and fried seafood and vegetables.",
    price: 780.0,
    rating: 4,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    category: "Japanese",
  },
  {
    id: 9,
    name: "Miso Soup",
    description:
      "Traditional Japanese soup with dashi, miso paste, and seaweed.",
    price: 250.0,
    rating: 4,
    image: "https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg",
    category: "Japanese",
  },
  {
    id: 10,
    name: "Chicken Teriyaki",
    description: "Grilled chicken glazed with sweet and savory teriyaki sauce.",
    price: 720.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg", // Placeholder
    category: "Japanese",
  },

  // --- Pizza Dishes ---
  {
    id: 11,
    name: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, and basil.",
    price: 400.5,
    rating: 5,
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    category: "Pizza",
  },
  {
    id: 12,
    name: "Pepperoni Pizza",
    description: "Pizza topped with spicy pepperoni and gooey mozzarella.",
    price: 447.34,
    rating: 5,
    image:
      "https://images.pexels.com/photos/3690/food-restaurant-hand-dinner.jpg",
    category: "Pizza",
  },
  {
    id: 13,
    name: "Veggie Supreme Pizza",
    description: "Loaded with fresh vegetables and flavorful cheese.",
    price: 460.0,
    rating: 4,
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg", // Placeholder
    category: "Pizza",
  },
  {
    id: 14,
    name: "BBQ Chicken Pizza",
    description: "Tangy BBQ sauce, chicken, red onion, and cilantro.",
    price: 490.0,
    rating: 4,
    image: "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg", // Placeholder
    category: "Pizza",
  },
  {
    id: 15,
    name: "Four Cheese Pizza",
    description: "A cheesy delight with a blend of four delicious cheeses.",
    price: 430.0,
    rating: 5,
    image: "https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg", // Placeholder
    category: "Pizza",
  },

  // --- Mexican Dishes ---
  {
    id: 16,
    name: "Tacos Al Pastor",
    description:
      "Delicious tacos with marinated pork, pineapple, and cilantro.",
    price: 350.5,
    rating: 4,
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    category: "Mexican",
  },
  {
    id: 17,
    name: "Chicken Fajitas",
    description: "Sizzling chicken strips with bell peppers and onions.",
    price: 580.0,
    rating: 4,
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg", // Placeholder
    category: "Mexican",
  },
  {
    id: 18,
    name: "Guacamole & Chips",
    description: "Freshly made guacamole served with crispy tortilla chips.",
    price: 280.0,
    rating: 5,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg", // Placeholder
    category: "Mexican",
  },
  {
    id: 19,
    name: "Enchiladas Rojas",
    description:
      "Corn tortillas filled with chicken, topped with red chili sauce and cheese.",
    price: 520.0,
    rating: 4,
    image: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg", // Placeholder
    category: "Mexican",
  },
  {
    id: 20,
    name: "Burrito Bowl",
    description: "All the goodness of a burrito without the tortilla.",
    price: 490.0,
    rating: 4,
    image:
      "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg", // Placeholder
    category: "Mexican",
  },

  // --- Special Foods Dishes ---
  {
    id: 21,
    name: "French Fries",
    description: "Crispy golden French fries, a perfect companion.",
    price: 747.34,
    rating: 5,
    image: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg",
    category: "special Foods",
  },
  {
    id: 22,
    name: "Chicken Shawarma",
    description: "Juicy marinated chicken cooked on a vertical spit.",
    price: 687.34,
    rating: 4,
    image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
    category: "special Foods",
  },
  {
    id: 23,
    name: "Fish & Chips",
    description: "Classic British dish of battered fish and thick-cut chips.",
    price: 780.0,
    rating: 4,
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg", // Placeholder
    category: "special Foods",
  },
  {
    id: 24,
    name: "Grilled Salmon",
    description: "Perfectly grilled salmon fillet with herbs.",
    price: 980.0,
    rating: 5,
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg", // Placeholder
    category: "special Foods",
  },
  {
    id: 25,
    name: "Vegetable Stir-fry",
    description:
      "Assorted fresh vegetables quickly stir-fried with savory sauce.",
    price: 550.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg", // Placeholder
    category: "special Foods",
  },

  // --- Drinks ---
  {
    id: 26,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    price: 150.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    category: "Drinks",
  },
  {
    id: 27,
    name: "Coca-Cola",
    description: "Classic refreshing soft drink.",
    price: 100.0,
    rating: 5,
    image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg", // Placeholder
    category: "Drinks",
  },
  {
    id: 28,
    name: "Lemonade",
    description: "Sweet and tangy homemade lemonade.",
    price: 120.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg", // Placeholder
    category: "Drinks",
  },
  {
    id: 29,
    name: "Iced Coffee",
    description: "Chilled coffee, perfect for a hot day.",
    price: 180.0,
    rating: 4,
    image: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg", // Placeholder
    category: "Drinks",
  },
  {
    id: 30,
    name: "Smoothie (Berry)",
    description: "Refreshing blend of mixed berries.",
    price: 200.0,
    rating: 5,
    image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg", // Placeholder
    category: "Drinks",
  },

  // --- Lunch Dishes ---
  {
    id: 31,
    name: "Fish Curry",
    description: "Aromatic fish curry made with tender fish pieces.",
    price: 947.34,
    rating: 3,
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg",
    category: "Lunch",
  },
  {
    id: 32,
    name: "Veggie Burger",
    description: "Delicious vegetarian burger with fresh toppings.",
    price: 480.99,
    rating: 4,
    image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg",
    category: "Lunch",
  },
  {
    id: 33,
    name: "Club Sandwich",
    description:
      "Classic triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
    price: 450.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg", // Placeholder
    category: "Lunch",
  },
  {
    id: 34,
    name: "Greek Salad",
    description:
      "Fresh mixed greens with feta cheese, olives, and a tangy dressing.",
    price: 380.0,
    rating: 5,
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg", // Placeholder
    category: "Lunch",
  },
  {
    id: 35,
    name: "Tomato Soup",
    description: "Creamy tomato soup, a comforting classic.",
    price: 280.0,
    rating: 4,
    image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", // Placeholder
    category: "Lunch",
  },
];

// export const MenuSection = () => {
//   // Function to determine initial active tab ("All" as default or "Japanese" if that's desired)
//   const getDefaultTabValue = () => {
//     // If you want "Japanese" to be default, uncomment the below and comment out the "All" part
//     // const japaneseCategory = menuCategories.find(cat => cat.toLowerCase() === 'japanese');
//     // return japaneseCategory ? japaneseCategory.toLowerCase().replace(/\s+/g, "") : menuCategories[0].toLowerCase().replace(/\s+/g, "");

//     // Set "All" as the default active tab
//     return "all";
//   };

//   return (
//     <section className="w-full bg-gray-100 py-10 font-sans px-6">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//           Our Regular menu pack
//         </h2>

//         <Tabs defaultValue={getDefaultTabValue()}>
//           {/* Modified TabsList with responsive behavior */}
//           {/* <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-6"> */}
//           <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-6 h-fit">
//             {menuCategories.map((category) => (
//               <TabsTrigger
//                 key={category}
//                 value={category.toLowerCase().replace(/\s+/g, "")}
//                 className={cn(
//                   "px-5 py-2 rounded-full text-sm font-medium transition-colors",
//                   "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
//                   "data-[state=active]:bg-blue-600 data-[state=active]:border-blue-600 data-[state=active]:text-white",
//                   "min-w-max" // Ensures text doesn't wrap inside buttons
//                 )}
//               >
//                 {category}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {/* Rest of your content remains the same */}
//           <div className="max-md:hidden">
//             {menuCategories.map((category) => (
//               <TabsContent
//                 key={category}
//                 value={category.toLowerCase().replace(/\s+/g, "")}
//                 className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center"
//               >
//                 {allFoods
//                   .filter((food) =>
//                     category.toLowerCase() === "all"
//                       ? true
//                       : food.category.toLowerCase() === category.toLowerCase()
//                   )
//                   .map((food) => (
//                     <FoodCard
//                       key={food.id}
//                       image={food.image}
//                       title={food.name}
//                       description={food.description}
//                       price={food.price}
//                       rating={food.rating}
//                       onAddToCart={() =>
//                         console.log(`Added ${food.name} to cart`)
//                       }
//                     />
//                   ))}
//               </TabsContent>
//             ))}
//           </div>
//           <div className="md:hidden">
//              {menuCategories.map((category) => (
//               <TabsContent
//                 key={category}
//                 value={category.toLowerCase().replace(/\s+/g, "")}
//                 className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center"
//               >
//             <div className="w-full md:hidden relative ">
//               <Carousel
//                 opts={{ align: "start", loop: true }}
//                 className="w-full max-w-full p-2 border-none"
//               >
//                 <CarouselContent className="w-fit">
//                   {allFoods
//                     .filter((food) =>
//                       category.toLowerCase() === "all"
//                         ? true
//                         : food.category.toLowerCase() === category.toLowerCase()
//                     )
//                     .map((dish) => (
//                       <CarouselItem
//                         key={dish.id}
//                         className="basis-1/3 border-none"
//                       >
//                         <div className="p-0">
//                           <Card className="p-0 border-none">
//                             <CardContent className="p-0">
//                               <FoodCard
//                                 image={dish.image}
//                                 title={dish.name}
//                                 description={dish.description}
//                                 price={dish.price}
//                                 rating={dish.rating}
//                                 onAddToCart={() =>
//                                   console.log(`Added ${dish.name} to cart`)
//                                 }
//                               />
//                             </CardContent>
//                           </Card>
//                         </div>
//                       </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="absolute left-2 -top-6" />
//                 <CarouselNext className="absolute -top-6 right-2" />
//               </Carousel>
//             </div>
//           </div> ))}
//               </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   );
// };
export const MenuSection = () => {
  const getDefaultTabValue = () => "all";

  return (
    <section className="w-full bg-gray-100 py-10 font-sans ">
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Our Regular menu pack
        </h2>
        <Tabs defaultValue={getDefaultTabValue()}>
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-6 h-fit">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category.toLowerCase().replace(/\s+/g, "")}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                  "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
                  "data-[state=active]:bg-blue-600 data-[state=active]:border-blue-600 data-[state=active]:text-white",
                  "min-w-max"
                )}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent
              key={category}
              value={category.toLowerCase().replace(/\s+/g, "")}
            >
              {/* Desktop Grid (md and up) */}
              <div className="hidden md:grid pt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                {allFoods
                  .filter((food) =>
                    category.toLowerCase() === "all"
                      ? true
                      : food.category.toLowerCase() === category.toLowerCase()
                  )
                  .map((food) => (
                    <FoodCard
                      key={food.id}
                      image={food.image}
                      title={food.name}
                      description={food.description}
                      price={food.price}
                      rating={food.rating}
                      onAddToCart={() =>
                        console.log(`Added ${food.name} to cart`)
                      }
                    />
                  ))}
              </div>
              {/* Mobile Carousel (hidden on md and up) */}
              {/* <div className="w-full md:hidden relative pt-12">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full max-w-full p-2 border-none"
                >
                  <CarouselContent className="w-fit">
                    {allFoods
                      .filter((food) =>
                        category.toLowerCase() === "all"
                          ? true
                          : food.category.toLowerCase() ===
                            category.toLowerCase()
                      )
                      .map((dish) => (
                        // <CarouselItem
                        //   key={dish.id}
                        //   className="basis-1/2 sm:basis-1/3"
                        // >
                        <CarouselItem
                          key={dish.id}
                          className="basis-1/3 border-none"
                        >
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
                                />{" "}
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 -top-6" />
                  <CarouselNext className="absolute -top-6 right-2" />
                </Carousel>
              </div> */}
              <div className="w-full md:hidden relative pt-12">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full max-w-full p-2 border-none"
                >
                  <CarouselContent className="w-fit">
                    {allFoods
                      .filter((food) =>
                        category.toLowerCase() === "all"
                          ? true
                          : food.category.toLowerCase() ===
                            category.toLowerCase()
                      )
                      .map((dish) => (
                        <CarouselItem
                          key={dish.id}
                          className="basis-1/3 border-none"
                        >
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
                                />{" "}
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
