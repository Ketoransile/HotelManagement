// "use client";
// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { format, differenceInDays, addDays } from "date-fns";
// import { CalendarIcon, Bed, User, CreditCard } from "lucide-react";
// import { Calendar } from "../ui/calendar";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import { Badge } from "../ui/badge";
// import { Progress } from "../ui/progress";

// // Zod schema for form validation
// export const formSchema = z
//   .object({
//     checkInDate: z.date({
//       message: "Please select a check-in date",
//     }),
//     checkOutDate: z.date({
//       message: "Please select a check-out date",
//     }),
//     adults: z.number().min(1, "At least 1 adult required").max(6),
//     children: z.number().min(0).max(4),
//     promoCode: z.string().optional(),
//   })
//   .refine((data) => data.checkOutDate > data.checkInDate, {
//     message: "Check-out must be after check-in",
//     path: ["checkOutDate"],
//   });

// type BookingFormProps = {
//   nightlyRate: number;
//   roomType: string;
//   roomCapacity: number;
//   availableRooms: number;
// };

// const BookingForm = ({
//   nightlyRate,
//   roomType,
//   roomCapacity,
//   availableRooms,
// }: BookingFormProps) => {
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const [discount, setDiscount] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       adults: 2,
//       children: 0,
//       promoCode: "",
//     },
//   });

//   const { watch, setValue, trigger } = form;
//   const checkInDate = watch("checkInDate");
//   const checkOutDate = watch("checkOutDate");
//   const adults = watch("adults");
//   const children = watch("children");
//   const promoCode = watch("promoCode");

//   // Calculate price whenever dates or promo code changes
//   useEffect(() => {
//     if (checkInDate && checkOutDate) {
//       const nights = differenceInDays(checkOutDate, checkInDate);
//       const basePrice = nightlyRate * nights;

//       // Apply discount if promo code is valid
//       let calculatedDiscount = 0;
//       if (promoCode === "SUMMER24") {
//         calculatedDiscount = basePrice * 0.15; // 15% discount
//       } else if (promoCode === "WELCOME10") {
//         calculatedDiscount = basePrice * 0.1; // 10% discount
//       }

//       setDiscount(calculatedDiscount);
//       setTotalPrice(basePrice - calculatedDiscount);
//     } else {
//       setTotalPrice(0);
//       setDiscount(0);
//     }
//   }, [checkInDate, checkOutDate, nightlyRate, promoCode]);

//   // Auto-set checkout date when checkin date changes
//   useEffect(() => {
//     if (checkInDate && !checkOutDate) {
//       setValue("checkOutDate", addDays(checkInDate, 3));
//       trigger("checkOutDate");
//     }
//   }, [checkInDate, checkOutDate, setValue, trigger]);

//   const applyPromoCode = () => {
//     // Trigger validation and recalculation
//     trigger("promoCode");
//   };

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     setIsLoading(true);

//     // Simulate API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // Check if we have available rooms
//       if (availableRooms <= 0) {
//         throw new Error("No rooms available for selected dates");
//       }

//       // Check if room capacity is exceeded
//       if (data.adults + data.children > roomCapacity) {
//         throw new Error(
//           `This room accommodates maximum ${roomCapacity} guests`
//         );
//       }

//       console.log("Booking submitted:", {
//         ...data,
//         totalPrice,
//         discount,
//         roomType,
//       });

//       setBookingSuccess(true);
//     } catch (error) {
//       console.error("Booking failed:", error);
//       form.setError("root", {
//         message: error instanceof Error ? error.message : "Booking failed",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (bookingSuccess) {
//     return (
//       <div className="w-full max-w-xl mx-auto p-8 lg:p-12 bg-white shadow-lg rounded-2xl border border-gray-100">
//         <div className="text-center space-y-6">
//           <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//             <svg
//               className="h-10 w-10 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900">
//             Booking Confirmed!
//           </h2>
//           <p className="text-lg text-gray-600">
//             Your {roomType} room is reserved from{" "}
//             {format(checkInDate, "MMM d, yyyy")} to{" "}
//             {format(checkOutDate, "MMM d, yyyy")}.
//           </p>
//           <div className="bg-gray-50 p-6 rounded-xl mt-4">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Booking Summary
//             </h3>
//             <div className="space-y-2 text-gray-600">
//               <div className="flex justify-between">
//                 <span>Room Type:</span>
//                 <span className="font-medium">{roomType}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Guests:</span>
//                 <span className="font-medium">
//                   {adults + children}{" "}
//                   {adults + children === 1 ? "person" : "people"}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Total Nights:</span>
//                 <span className="font-medium">
//                   {differenceInDays(checkOutDate, checkInDate)}
//                 </span>
//               </div>
//               {discount > 0 && (
//                 <div className="flex justify-between text-green-600">
//                   <span>Discount:</span>
//                   <span className="font-medium">-${discount.toFixed(2)}</span>
//                 </div>
//               )}
//               <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
//                 <span className="font-semibold">Total:</span>
//                 <span className="font-bold text-lg">
//                   ${totalPrice.toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <Button
//             onClick={() => setBookingSuccess(false)}
//             className="mt-6 w-full bg-blue-600 hover:bg-blue-700"
//           >
//             Make Another Booking
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full max-w-xl mx-auto p-6 lg:p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
//       <div className="flex items-center gap-3 mb-6">
//         <Bed className="h-8 w-8 text-blue-600" />
//         <h1 className="text-2xl font-bold text-gray-900">Reserve Your Stay</h1>
//       </div>

//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium text-gray-500">Room Type</span>
//           <Badge variant="outline" className="border-blue-200 text-blue-600">
//             {roomType}
//           </Badge>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm font-medium text-gray-500">
//             Nightly Rate
//           </span>
//           <span className="font-semibold">${nightlyRate}</span>
//         </div>
//       </div>

//       {availableRooms <= 3 && (
//         <div className="mb-6">
//           <div className="flex justify-between text-sm mb-1">
//             <span className="font-medium text-gray-700">Rooms left</span>
//             <span className="font-semibold">{availableRooms} remaining</span>
//           </div>
//           <Progress
//             value={(availableRooms / 10) * 100}
//             className="h-2 bg-gray-200"
//             indicatorClassName="bg-rose-500"
//           />
//         </div>
//       )}

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Check-in Date */}
//             <FormField
//               control={form.control}
//               name="checkInDate"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <CalendarIcon className="h-4 w-4 opacity-70" />
//                     Check-in
//                   </FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant="outline"
//                           className={cn(
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300",
//                             !field.value && "text-gray-400"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "MMM d, yyyy")
//                           ) : (
//                             <span>Select date</span>
//                           )}
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         initialFocus
//                         disabled={(date) =>
//                           date < new Date(new Date().setHours(0, 0, 0, 0))
//                         }
//                         className="rounded-xl"
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Check-out Date */}
//             <FormField
//               control={form.control}
//               name="checkOutDate"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <CalendarIcon className="h-4 w-4 opacity-70" />
//                     Check-out
//                   </FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant="outline"
//                           className={cn(
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300",
//                             !field.value && "text-gray-400"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "MMM d, yyyy")
//                           ) : (
//                             <span>Select date</span>
//                           )}
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         initialFocus
//                         disabled={(date) =>
//                           checkInDate
//                             ? date <= checkInDate
//                             : date < new Date(new Date().setHours(0, 0, 0, 0))
//                         }
//                         className="rounded-xl"
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Adults */}
//             <FormField
//               control={form.control}
//               name="adults"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <User className="h-4 w-4 opacity-70" />
//                     Adults
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       min="1"
//                       max="6"
//                       className="h-12 rounded-xl"
//                       {...field}
//                       onChange={(e) => field.onChange(parseInt(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Children */}
//             <FormField
//               control={form.control}
//               name="children"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <User className="h-4 w-4 opacity-70" />
//                     Children
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       min="0"
//                       max="4"
//                       className="h-12 rounded-xl"
//                       {...field}
//                       onChange={(e) => field.onChange(parseInt(e.target.value))}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Promo Code */}
//           <div className="space-y-2">
//             <FormField
//               control={form.control}
//               name="promoCode"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <CreditCard className="h-4 w-4 opacity-70" />
//                     Promo Code
//                   </FormLabel>
//                   <div className="flex gap-2">
//                     <FormControl>
//                       <Input
//                         placeholder="Enter promo code"
//                         className="h-12 rounded-xl flex-1"
//                         {...field}
//                       />
//                     </FormControl>
//                     <Button
//                       type="button"
//                       onClick={applyPromoCode}
//                       variant="outline"
//                       className="h-12 rounded-xl"
//                     >
//                       Apply
//                     </Button>
//                   </div>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             {promoCode === "SUMMER24" && (
//               <p className="text-sm text-green-600">15% discount applied!</p>
//             )}
//             {promoCode === "WELCOME10" && (
//               <p className="text-sm text-green-600">10% discount applied!</p>
//             )}
//           </div>

//           {/* Price Summary */}
//           <div className="bg-gray-50 p-4 rounded-xl">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">
//                 {checkInDate && checkOutDate
//                   ? `${differenceInDays(checkOutDate, checkInDate)} nights`
//                   : "N/A"}
//               </span>
//               <span className="font-medium">
//                 ${nightlyRate} ×{" "}
//                 {checkInDate && checkOutDate
//                   ? differenceInDays(checkOutDate, checkInDate)
//                   : 0}
//               </span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600 mb-2">
//                 <span>Discount</span>
//                 <span>-${discount.toFixed(2)}</span>
//               </div>
//             )}
//             <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
//               <span className="font-semibold">Total</span>
//               <span className="font-bold text-lg">
//                 ${totalPrice.toFixed(2)}
//               </span>
//             </div>
//           </div>

//           {/* Error message */}
//           {form.formState.errors.root && (
//             <div className="text-red-500 text-sm">
//               {form.formState.errors.root.message}
//             </div>
//           )}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <div className="flex items-center gap-2">
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Processing...
//               </div>
//             ) : (
//               "Complete Reservation"
//             )}
//           </Button>

//           <p className="text-xs text-gray-500 text-center">
//             You won't be charged yet. Free cancellation up to 24 hours before
//             check-in.
//           </p>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default BookingForm;
"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format, differenceInDays, addDays, isBefore } from "date-fns";
import { CalendarIcon, Bed, User, CreditCard } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Zod schema for form validation matching the Booking model
export const formSchema = z
  .object({
    checkInDate: z.date({
      message: "Please select a check-in date",
    }),
    checkOutDate: z.date({
      message: "Please select a check-out date",
    }),
    numberOfGuests: z
      .number()
      .min(1, "At least 1 guest required")
      .max(4, "Maximum 4 guests allowed"),
    promoCode: z.string().optional(),
  })
  .refine((data) => data.checkOutDate > data.checkInDate, {
    message: "Check-out must be after check-in",
    path: ["checkOutDate"],
  });

type RoomData = {
  _id: string;
  roomNumber: string;
  roomType: string;
  price: number;
  description: string;
  images: { url: string; _id: string }[];
  maxOccupancy: number;
  amenities: string[];
};

type BookingFormProps = {
  room: RoomData;
  userId: string | undefined;
};

const BookingForm = ({ room, userId }: BookingFormProps) => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [availableRooms, setAvailableRooms] = useState(5); // This would come from an API in real app

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfGuests: 1,
      promoCode: "",
    },
  });

  const { watch, setValue, trigger, reset } = form;
  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");
  const numberOfGuests = watch("numberOfGuests");
  const promoCode = watch("promoCode");

  // Calculate price whenever dates or promo code changes
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = differenceInDays(checkOutDate, checkInDate);
      const basePrice = room.price * nights;

      // Apply discount if promo code is valid
      let calculatedDiscount = 0;
      if (promoCode === "SUMMER24") {
        calculatedDiscount = basePrice * 0.15; // 15% discount
      } else if (promoCode === "WELCOME10") {
        calculatedDiscount = basePrice * 0.1; // 10% discount
      }

      setDiscount(calculatedDiscount);
      setTotalPrice(basePrice - calculatedDiscount);
    } else {
      setTotalPrice(0);
      setDiscount(0);
    }
  }, [checkInDate, checkOutDate, room.price, promoCode]);

  // Auto-set checkout date when checkin date changes
  useEffect(() => {
    if (checkInDate && !checkOutDate) {
      const defaultCheckout = addDays(checkInDate, 2);
      setValue("checkOutDate", defaultCheckout);
    }
  }, [checkInDate, checkOutDate, setValue]);

  const applyPromoCode = () => {
    trigger("promoCode");
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Validate number of guests against room capacity
      if (numberOfGuests > room.maxOccupancy) {
        throw new Error(
          `This room accommodates maximum ${room.maxOccupancy} guests`
        );
      }

      // Check room availability (simulated)
      if (availableRooms <= 0) {
        throw new Error("No rooms available for selected dates");
      }

      // Create booking data matching the schema
      const bookingData = {
        user: userId,
        room: room._id,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        totalPrice,
        numberOfGuests: data.numberOfGuests,
        status: "Pending" as const,
      };

      // In a real app, you would call your API here
      console.log("Submitting booking:", bookingData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful booking
      setAvailableRooms((prev) => prev - 1);
      setBookingSuccess(true);
      toast.success("Booking confirmed!");
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error(error instanceof Error ? error.message : "Booking failed");
      form.setError("root", {
        message: error instanceof Error ? error.message : "Booking failed",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (bookingSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto p-8 lg:p-12 bg-white shadow-lg rounded-2xl border border-gray-100">
        <div className="text-center space-y-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Booking Confirmed!
          </h2>
          <p className="text-lg text-gray-600">
            Your {room.roomType} room (#{room.roomNumber}) is reserved from{" "}
            {format(checkInDate, "MMM d, yyyy")} to{" "}
            {format(checkOutDate, "MMM d, yyyy")}.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Booking Summary
            </h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Room Type:</span>
                <span className="font-medium">{room.roomType}</span>
              </div>
              <div className="flex justify-between">
                <span>Room Number:</span>
                <span className="font-medium">#{room.roomNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span>
                <span className="font-medium">{numberOfGuests}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Nights:</span>
                <span className="font-medium">
                  {differenceInDays(checkOutDate, checkInDate)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                reset();
                setBookingSuccess(false);
              }}
              className="mt-6 flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Make Another Booking
            </Button>
            <Button
              onClick={() => router.push("/my-bookings")}
              variant="outline"
              className="mt-6 flex-1"
            >
              View My Bookings
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 lg:p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <Bed className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">
          Reserve Room #{room.roomNumber}
        </h1>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Room Type</span>
          <Badge variant="outline" className="border-blue-200 text-blue-600">
            {room.roomType}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            Nightly Rate
          </span>
          <span className="font-semibold">${room.price}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-500">
            Max Occupancy
          </span>
          <span className="font-medium">{room.maxOccupancy} guests</span>
        </div>
      </div>

      {availableRooms <= 3 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-700">Rooms left</span>
            <span className="font-semibold">{availableRooms} remaining</span>
          </div>
          <Progress
            value={(availableRooms / 5) * 100}
            className="h-2 bg-gray-200"
            // indicatorClassName="bg-rose-500"
          />
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Check-in Date */}
            <FormField
              control={form.control}
              name="checkInDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 opacity-70" />
                    Check-in
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300",
                            !field.value && "text-gray-400"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "MMM d, yyyy")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          // Reset checkout date if it's before the new checkin date
                          if (
                            checkOutDate &&
                            date &&
                            isBefore(checkOutDate, date)
                          ) {
                            setValue("checkOutDate", addDays(date, 1));
                          }
                        }}
                        initialFocus
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        className="rounded-xl bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Check-out Date */}
            <FormField
              control={form.control}
              name="checkOutDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 opacity-70" />
                    Check-out
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300",
                            !field.value && "text-gray-400"
                          )}
                          disabled={!checkInDate}
                        >
                          {field.value ? (
                            format(field.value, "MMM d, yyyy")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={(date) => {
                          if (!checkInDate) return true;
                          return date <= checkInDate;
                        }}
                        className="rounded-xl bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Number of Guests */}
            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <User className="h-4 w-4 opacity-70" />
                    Number of Guests
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max={room.maxOccupancy}
                      className="h-12 rounded-xl"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Promo Code */}
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="promoCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <CreditCard className="h-4 w-4 opacity-70" />
                    Promo Code
                  </FormLabel>
                  <div className="flex gap-2">
                    <FormControl>
                      <Input
                        placeholder="Enter promo code"
                        className="h-12 rounded-xl flex-1"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      onClick={applyPromoCode}
                      variant="outline"
                      className="h-12 rounded-xl"
                    >
                      Apply
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {promoCode === "SUMMER24" && (
              <p className="text-sm text-green-600">15% discount applied!</p>
            )}
            {promoCode === "WELCOME10" && (
              <p className="text-sm text-green-600">10% discount applied!</p>
            )}
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">
                {checkInDate && checkOutDate
                  ? `${differenceInDays(checkOutDate, checkInDate)} nights`
                  : "N/A"}
              </span>
              <span className="font-medium">
                ${room.price} ×{" "}
                {checkInDate && checkOutDate
                  ? differenceInDays(checkOutDate, checkInDate)
                  : 0}
              </span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600 mb-2">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Error message */}
          {form.formState.errors.root && (
            <div className="text-red-500 text-sm">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Complete Reservation"
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            You won&apos;t be charged yet. Free cancellation up to 24 hours
            before check-in.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
