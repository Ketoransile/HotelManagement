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
// import { format, differenceInDays, addDays, isBefore } from "date-fns";
// import { CalendarIcon, Bed, User, CreditCard } from "lucide-react";
// import { Calendar } from "../ui/calendar";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import { Badge } from "../ui/badge";
// import { Progress } from "../ui/progress";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "sonner";
// import { Skeleton } from "../ui/skeleton";

// // Enhanced Zod schema with stricter validation
// export const formSchema = z
//   .object({
//     checkInDate: z.date({
//       message: "Please select a valid check-in date",
//     }),
//     checkOutDate: z.date({
//       message: "Please select a valid check-out date",
//     }),
//     numberOfGuests: z
//       .number()
//       .int("Must be a whole number")
//       .min(1, "At least 1 guest required")
//       .max(10, "Maximum 10 guests allowed"),
//     promoCode: z
//       .string()
//       .max(20, "Promo code too long")
//       .regex(/^[a-zA-Z0-9]*$/, "Only alphanumeric characters allowed")
//       .optional(),
//   })
//   .refine((data) => data.checkOutDate > data.checkInDate, {
//     message: "Check-out must be after check-in",
//     path: ["checkOutDate"],
//   })
//   .refine(
//     (data) => {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       return data.checkInDate >= today;
//     },
//     {
//       message: "Check-in must be today or in the future",
//       path: ["checkInDate"],
//     }
//   );

// type RoomData = {
//   _id: string;
//   roomNumber: string;
//   roomType: string;
//   price: number;
//   description: string;
//   images: { url: string; _id: string }[];
//   maxOccupancy: number;
//   amenities: string[];
// };

// type BookingFormProps = {
//   room: RoomData;
//   userId: string | undefined;
//   csrfToken?: string; // Add CSRF protection
// };

// const BookingForm = ({ room, userId, csrfToken }: BookingFormProps) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const [discount, setDiscount] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [availableRooms, setAvailableRooms] = useState<number | null>(null);
//   const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
//   const [bookedRanges, setBookedRanges] = useState<
//     { checkInDate: string; checkOutDate: string }[]
//   >([]);
//   useEffect(() => {
//     const fetchBookedDates = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${room._id}/booked-dates`
//         );
//         const data = await res.json();
//         setBookedRanges(data);
//       } catch (error) {
//         console.error("Failed to load booked ranges", error);
//       }
//     };
//   });
//   const disabledDates: Date[] = bookedRanges.flatMap((range) => {
//     const start = new Date(range.checkInDate);
//     const end = new Date(range.checkOutDate);
//     const dates: Date[] = [];
//     for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
//       dates.push(new Date(d));
//     }
//     return dates;
//   });

//   // Check for success redirect from payment processor
//   useEffect(() => {
//     if (searchParams.get("success") === "true") {
//       toast.success("Booking confirmed!");
//     }
//   }, [searchParams]);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       numberOfGuests: 1,
//       promoCode: "",
//     },
//   });

//   const { watch, setValue, trigger, reset } = form;
//   const checkInDate = watch("checkInDate");
//   const checkOutDate = watch("checkOutDate");
//   const numberOfGuests = watch("numberOfGuests");
//   const promoCode = watch("promoCode");

//   // Check room availability when dates change
//   useEffect(() => {
//     const checkAvailability = async () => {
//       if (checkInDate && checkOutDate) {
//         setIsCheckingAvailability(true);
//         try {
//           // In a real app, this would be an API call
//           const simulatedAvailableRooms = Math.max(
//             0,
//             5 - Math.floor(Math.random() * 3)
//           );
//           setAvailableRooms(simulatedAvailableRooms);
//         } catch (error) {
//           console.error("Availability check failed:", error);
//           toast.error("Failed to check availability");
//         } finally {
//           setIsCheckingAvailability(false);
//         }
//       }
//     };

//     const debounceTimer = setTimeout(checkAvailability, 500);
//     return () => clearTimeout(debounceTimer);
//   }, [checkInDate, checkOutDate]);

//   // Calculate price with debounce
//   useEffect(() => {
//     const calculatePrice = () => {
//       if (checkInDate && checkOutDate) {
//         const nights = differenceInDays(checkOutDate, checkInDate);
//         const basePrice = room.price * nights;

//         // Sanitize promo code before use
//         const sanitizedPromo = promoCode?.trim().toUpperCase();
//         let calculatedDiscount = 0;

//         if (sanitizedPromo === "SUMMER24") {
//           calculatedDiscount = basePrice * 0.15;
//         } else if (sanitizedPromo === "WELCOME10") {
//           calculatedDiscount = basePrice * 0.1;
//         }

//         setDiscount(calculatedDiscount);
//         setTotalPrice(basePrice - calculatedDiscount);
//       } else {
//         setTotalPrice(0);
//         setDiscount(0);
//       }
//     };

//     const debounceTimer = setTimeout(calculatePrice, 300);
//     return () => clearTimeout(debounceTimer);
//   }, [checkInDate, checkOutDate, room.price, promoCode]);

//   // Auto-set checkout date
//   useEffect(() => {
//     if (checkInDate && !checkOutDate) {
//       const defaultCheckout = addDays(checkInDate, 2);
//       setValue("checkOutDate", defaultCheckout);
//     }
//   }, [checkInDate, checkOutDate, setValue]);

//   const applyPromoCode = () => {
//     trigger("promoCode");
//   };

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     setIsLoading(true);

//     try {
//       // Validate against room capacity
//       if (numberOfGuests > room.maxOccupancy) {
//         throw new Error(
//           `This room accommodates maximum ${room.maxOccupancy} guests`
//         );
//       }

//       // Check room availability
//       if (availableRooms !== null && availableRooms <= 0) {
//         throw new Error("No rooms available for selected dates");
//       }

//       // Create booking data
//       const bookingData = {
//         user: userId,
//         room: room._id,
//         checkInDate: data.checkInDate,
//         checkOutDate: data.checkOutDate,
//         numberOfGuests: data.numberOfGuests,
//         promoCode: data.promoCode,
//         // Note: We'll let the server calculate the final price
//       };

//       // In a real app, you would call your API here
//       const response = await fetch("/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken || "",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Booking failed");
//       }

//       const result = await response.json();

//       // Redirect to success page with booking ID
//       router.push(`/booking/success?bookingId=${result.bookingId}`);
//     } catch (error) {
//       console.error("Booking failed:", error);
//       toast.error(error instanceof Error ? error.message : "Booking failed");
//       form.setError("root", {
//         message: error instanceof Error ? error.message : "Booking failed",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto p-6 lg:p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
//       <div className="flex items-center gap-3 mb-6">
//         <Bed className="h-8 w-8 text-blue-600" />
//         <h1 className="text-2xl font-bold text-gray-900">
//           Reserve Room #{room.roomNumber}
//         </h1>
//       </div>

//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium text-gray-500">Room Type</span>
//           <Badge variant="outline" className="border-blue-200 text-blue-600">
//             {room.roomType}
//           </Badge>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm font-medium text-gray-500">
//             Nightly Rate
//           </span>
//           <span className="font-semibold">${room.price.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-sm font-medium text-gray-500">
//             Max Occupancy
//           </span>
//           <span className="font-medium">{room.maxOccupancy} guests</span>
//         </div>
//       </div>

//       {isCheckingAvailability ? (
//         <div className="mb-6 space-y-2">
//           <Skeleton className="h-4 w-1/2" />
//           <Skeleton className="h-2 w-full" />
//         </div>
//       ) : (
//         availableRooms !== null &&
//         availableRooms <= 3 && (
//           <div className="mb-6">
//             <div className="flex justify-between text-sm mb-1">
//               <span className="font-medium text-gray-700">Rooms left</span>
//               <span className="font-semibold">{availableRooms} remaining</span>
//             </div>
//             <Progress
//               value={(availableRooms / 5) * 100}
//               className="h-2 bg-gray-200"
//             />
//           </div>
//         )
//       )}

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           {/* CSRF Token (hidden) */}
//           <input type="hidden" name="csrfToken" value={csrfToken} />

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
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
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
//                     <PopoverContent
//                       className="w-auto p-0 bg-white animate-popover"
//                       align="start"
//                     >
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={(date) => {
//                           field.onChange(date);
//                           if (
//                             checkOutDate &&
//                             date &&
//                             isBefore(checkOutDate, date)
//                           ) {
//                             setValue("checkOutDate", addDays(date, 1));
//                           }
//                         }}
//                         disabled={(date) =>
//                           date < new Date(new Date().setHours(0, 0, 0, 0)) ||
//                           disabledDates.some(
//                             (d) => d.toDateString() === date.toDateString()
//                           )
//                         }
//                         className="rounded-xl bg-white"
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
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
//                             !field.value && "text-gray-400"
//                           )}
//                           disabled={!checkInDate}
//                         >
//                           {field.value ? (
//                             format(field.value, "MMM d, yyyy")
//                           ) : (
//                             <span>Select date</span>
//                           )}
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent
//                       className="w-auto p-0 bg-white animate-popover"
//                       align="start"
//                     >
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) => {
//                           if (!checkInDate) return true;

//                           return (
//                             date <= checkInDate ||
//                             disabledDates.some(
//                               (d) => d.toDateString() === date.toDateString()
//                             )
//                           );
//                         }}
//                         className="rounded-xl bg-white"
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Number of Guests */}
//             <FormField
//               control={form.control}
//               name="numberOfGuests"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <User className="h-4 w-4 opacity-70" />
//                     Number of Guests
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       min="1"
//                       max={room.maxOccupancy}
//                       className="h-12 rounded-xl transition-all"
//                       {...field}
//                       onChange={(e) => {
//                         const value = parseInt(e.target.value);
//                         field.onChange(isNaN(value) ? 1 : value);
//                       }}
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
//                         className="h-12 rounded-xl flex-1 transition-all"
//                         {...field}
//                         onChange={(e) => {
//                           // Basic sanitization
//                           const sanitized = e.target.value.replace(
//                             /[^a-zA-Z0-9]/g,
//                             ""
//                           );
//                           field.onChange(sanitized);
//                         }}
//                       />
//                     </FormControl>
//                     <Button
//                       type="button"
//                       onClick={applyPromoCode}
//                       variant="outline"
//                       className="h-12 rounded-xl transition-all"
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
//           <div className="bg-gray-50 p-4 rounded-xl transition-all hover:bg-gray-100">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">
//                 {checkInDate && checkOutDate
//                   ? `${differenceInDays(checkOutDate, checkInDate)} nights`
//                   : "N/A"}
//               </span>
//               <span className="font-medium">
//                 ${room.price.toFixed(2)} ×{" "}
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
//             <div className="text-red-500 text-sm animate-fade-in">
//               {form.formState.errors.root.message}
//             </div>
//           )}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-[1.01]"
//             disabled={isLoading || isCheckingAvailability}
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
//             You won&apos;t be charged yet. Free cancellation up to 24 hours
//             before check-in.
//           </p>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default BookingForm;
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
// import { format, differenceInDays, isBefore, addDays } from "date-fns";
// import { CalendarIcon, Bed, User } from "lucide-react";
// import { Calendar } from "../ui/calendar";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";
// import { Badge } from "../ui/badge";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "sonner";
// import GuestInput from "./GuestInput"; // Assuming a custom GuestInput component for better UX

// // --- Zod schema with improved validation ---
// export const formSchema = z
//   .object({
//     checkInDate: z.date({
//       message: "Please select a valid check-in date",
//     }),
//     checkOutDate: z.date({
//       message: "Please select a valid check-out date",
//     }),
//     numberOfGuests: z.number().int("Must be a whole number").min(1),
//     promoCode: z
//       .string()
//       .max(20, "Promo code too long")
//       .regex(/^[a-zA-Z0-9]*$/, "Only alphanumeric characters allowed")
//       .optional(),
//   })
//   .refine((data) => data.checkOutDate > data.checkInDate, {
//     message: "Check-out date must be after check-in date",
//     path: ["checkOutDate"],
//   })
//   .refine(
//     (data) => {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       return data.checkInDate >= today;
//     },
//     {
//       message: "Check-in date must be today or in the future",
//       path: ["checkInDate"],
//     }
//   );

// type BookingFormProps = {
//   room: {
//     _id: string;
//     roomNumber: string;
//     roomType: string;
//     price: number;
//     maxOccupancy: number;
//   };
//   userId: string;
// };

// const BookingForm = ({ room, userId }: BookingFormProps) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const [discount, setDiscount] = useState<number>(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isPriceCalculating, setIsPriceCalculating] = useState(false);
//   const [bookedRanges, setBookedRanges] = useState<
//     { checkInDate: string; checkOutDate: string }[]
//   >([]);

//   // Initialize form with react-hook-form
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       numberOfGuests: 1,
//       promoCode: "",
//     },
//   });

//   const { watch, setValue, trigger } = form;
//   const checkInDate = watch("checkInDate");
//   const checkOutDate = watch("checkOutDate");
//   const numberOfGuests = watch("numberOfGuests");
//   const promoCode = watch("promoCode");

//   // Fetch booked dates from the server
//   useEffect(() => {
//     const fetchBookedDates = async () => {
//       try {
//         const res = await fetch(`/api/rooms/${room._id}/booked-dates`);
//         if (!res.ok) {
//           throw new Error("Failed to fetch booked dates");
//         }
//         const data = await res.json();
//         setBookedRanges(data);
//       } catch (error) {
//         console.error("Failed to load booked ranges", error);
//         toast.error("Failed to load room availability.");
//       }
//     };
//     fetchBookedDates();
//   }, [room._id]);

//   // Calculate price and auto-set checkout date
//   useEffect(() => {
//     // Auto-set checkout date to one day after check-in if not already set
//     if (checkInDate && !checkOutDate) {
//       const defaultCheckout = addDays(checkInDate, 1);
//       setValue("checkOutDate", defaultCheckout);
//     }
//     const calculatePrice = () => {
//       if (checkInDate && checkOutDate) {
//         setIsPriceCalculating(true);
//         const nights = differenceInDays(checkOutDate, checkInDate);
//         const basePrice = room.price * nights;
//         // In a real app, this would be an API call to validate and get the discount
//         // For now, we'll keep the client-side logic as a placeholder.
//         const sanitizedPromo = promoCode?.trim().toUpperCase();
//         let calculatedDiscount = 0;
//         if (sanitizedPromo === "SUMMER24") {
//           calculatedDiscount = basePrice * 0.15;
//         } else if (sanitizedPromo === "WELCOME10") {
//           calculatedDiscount = basePrice * 0.1;
//         }
//         setDiscount(calculatedDiscount);
//         setTotalPrice(basePrice - calculatedDiscount);
//         setIsPriceCalculating(false);
//       } else {
//         setTotalPrice(0);
//         setDiscount(0);
//         setIsPriceCalculating(false);
//       }
//     };
//     const debounceTimer = setTimeout(calculatePrice, 300);
//     return () => clearTimeout(debounceTimer);
//   }, [checkInDate, checkOutDate, promoCode, room.price, setValue]);

//   // Handle successful payment redirect
//   useEffect(() => {
//     if (searchParams.get("success") === "true") {
//       toast.success(
//         "Booking confirmed! You will receive a confirmation email shortly."
//       );
//     }
//     if (searchParams.get("cancel") === "true") {
//       toast.error("Payment was cancelled. Please try again.");
//     }
//   }, [searchParams]);

//   // Generate a list of disabled dates for the calendar
//   const disabledDates = bookedRanges.flatMap((range) => {
//     const start = new Date(range.checkInDate);
//     const end = new Date(range.checkOutDate);
//     const dates: Date[] = [];
//     for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
//       dates.push(new Date(d));
//     }
//     return dates;
//   });

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     setIsSubmitting(true);
//     try {
//       if (data.numberOfGuests > room.maxOccupancy) {
//         throw new Error(
//           `This room accommodates a maximum of ${room.maxOccupancy} guests.`
//         );
//       }

//       // Send booking request to the server
//       const response = await fetch("/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user: userId,
//           room: room._id,
//           checkInDate: data.checkInDate,
//           checkOutDate: data.checkOutDate,
//           numberOfGuests: data.numberOfGuests,
//           promoCode: data.promoCode,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Booking failed.");
//       }

//       const result = await response.json();
//       // Redirect to the payment URL returned by the server
//       router.push(result.paymentUrl);
//     } catch (error) {
//       console.error("Booking failed:", error);
//       toast.error(
//         error instanceof Error ? error.message : "An unexpected error occurred."
//       );
//       form.setError("root", {
//         message:
//           error instanceof Error
//             ? error.message
//             : "An unexpected error occurred.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto p-6 lg:p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
//       <div className="flex items-center gap-3 mb-6">
//         <Bed className="h-8 w-8 text-blue-600" />
//         <h1 className="text-2xl font-bold text-gray-900">
//           Reserve Room #{room.roomNumber}
//         </h1>
//       </div>

//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-sm font-medium text-gray-500">Room Type</span>
//           <Badge variant="outline" className="border-blue-200 text-blue-600">
//             {room.roomType}
//           </Badge>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm font-medium text-gray-500">
//             Nightly Rate
//           </span>
//           <span className="font-semibold">${room.price.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-sm font-medium text-gray-500">
//             Max Occupancy
//           </span>
//           <span className="font-medium">{room.maxOccupancy} guests</span>
//         </div>
//       </div>

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
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
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
//                     <PopoverContent
//                       className="w-auto p-0 bg-white animate-popover"
//                       align="start"
//                     >
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date < new Date(new Date().setHours(0, 0, 0, 0)) ||
//                           disabledDates.some(
//                             (d) => d.toDateString() === date.toDateString()
//                           )
//                         }
//                         className="rounded-xl bg-white"
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
//                             "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
//                             !field.value && "text-gray-400"
//                           )}
//                           disabled={!checkInDate}
//                         >
//                           {field.value ? (
//                             format(field.value, "MMM d, yyyy")
//                           ) : (
//                             <span>Select date</span>
//                           )}
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent
//                       className="w-auto p-0 bg-white animate-popover"
//                       align="start"
//                     >
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) => {
//                           if (!checkInDate) return true;
//                           return (
//                             date <= checkInDate ||
//                             disabledDates.some(
//                               (d) => d.toDateString() === date.toDateString()
//                             )
//                           );
//                         }}
//                         className="rounded-xl bg-white"
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Number of Guests */}
//             <FormField
//               control={form.control}
//               name="numberOfGuests"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
//                     <User className="h-4 w-4 opacity-70" />
//                     Number of Guests
//                   </FormLabel>
//                   <FormControl>
//                     <GuestInput
//                       max={room.maxOccupancy}
//                       value={field.value}
//                       onChange={field.onChange}
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
//                     Promo Code
//                   </FormLabel>
//                   <div className="flex gap-2">
//                     <FormControl>
//                       <Input
//                         placeholder="Enter promo code"
//                         className="h-12 rounded-xl flex-1 transition-all"
//                         {...field}
//                         onChange={(e) => {
//                           const sanitized = e.target.value.replace(
//                             /[^a-zA-Z0-9]/g,
//                             ""
//                           );
//                           field.onChange(sanitized);
//                         }}
//                       />
//                     </FormControl>
//                     <Button
//                       type="button"
//                       onClick={() => trigger("promoCode")} // Trigger validation on button click
//                       variant="outline"
//                       className="h-12 rounded-xl transition-all"
//                     >
//                       Apply
//                     </Button>
//                   </div>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             {discount > 0 && (
//               <p className="text-sm text-green-600">Discount applied!</p>
//             )}
//           </div>

//           {/* Price Summary */}
//           <div className="bg-gray-50 p-4 rounded-xl transition-all hover:bg-gray-100">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">
//                 {checkInDate && checkOutDate
//                   ? `${differenceInDays(checkOutDate, checkInDate)} nights`
//                   : "N/A"}
//               </span>
//               <span className="font-medium">
//                 ${room.price.toFixed(2)} ×{" "}
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
//             <div className="text-red-500 text-sm animate-fade-in">
//               {form.formState.errors.root.message}
//             </div>
//           )}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-[1.01]"
//             disabled={isSubmitting || isPriceCalculating}
//           >
//             {isSubmitting ? (
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
//             You won&apos;t be charged yet. You will be redirected to a secure
//             payment page.
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
// import { format, differenceInDays, isBefore } from "date-fns";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, Bed, User } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

// --- Zod schema with improved validation ---
export const formSchema = z
  .object({
    checkInDate: z.date({
      message: "Please select a valid check-in date.",
    }),
    checkOutDate: z.date({
      message: "Please select a valid check-out date.",
    }),
    numberOfGuests: z
      .number({
        message: "Number of guests is required.",
        // invalid_type_error: "Must be a whole number.",
      })
      .int()
      .min(1, "At least 1 guest required."),
    promoCode: z
      .string()
      .max(20, "Promo code too long.")
      .regex(/^[a-zA-Z0-9]*$/, "Only alphanumeric characters allowed.")
      .optional(),
  })
  .refine((data) => data.checkOutDate > data.checkInDate, {
    message: "Check-out date must be after check-in date.",
    path: ["checkOutDate"],
  })
  .refine(
    (data) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return data.checkInDate >= today;
    },
    {
      message: "Check-in date must be today or in the future.",
      path: ["checkInDate"],
    }
  );

type RoomData = {
  _id: string;
  roomNumber: string;
  roomType: string;
  price: number;
  maxOccupancy: number;
};

type BookingFormProps = {
  room: RoomData;
  // userId: string;
};

const BookingForm = ({ room }: BookingFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedRanges, setBookedRanges] = useState<
    { checkInDate: string; checkOutDate: string }[]
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfGuests: 1,
      promoCode: "",
    },
  });

  // const { watch, setValue } = form;
  const { watch } = form;
  const checkInDate = watch("checkInDate");
  const checkOutDate = watch("checkOutDate");
  const promoCode = watch("promoCode");

  // Fetch booked dates from the server
  // useEffect(() => {
  //   const fetchBookedDates = async () => {
  //     try {
  //       const res = await fetch(`/api/rooms/${room._id}/booked-dates`);
  //       if (!res.ok) throw new Error("Failed to fetch booked dates");
  //       const data = await res.json();
  //       setBookedRanges(data);
  //     } catch (error) {
  //       console.error("Failed to load booked ranges:", error);
  //       toast.error("Failed to load room availability.");
  //     }
  //   };
  //   fetchBookedDates();
  // }, [room._id]);
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${room._id}/booked-dates`
        );
        console.log("REs from BookingForm.tsx", res);
        if (!res.ok) {
          throw new Error("Failed to fetch booked dates");
        }
        const data = await res.json();
        // Add a check here to ensure the data is an array
        console.log("Data of booked dates", data);
        if (Array.isArray(data)) {
          setBookedRanges(data);
        } else {
          console.error("API returned invalid data format:", data);
          toast.error("Invalid data received for room availability.");
          // Ensure state remains an empty array to avoid errors
          setBookedRanges([]);
        }
      } catch (error) {
        console.error("Failed to load booked ranges:", error);
        toast.error("Failed to load room availability.");
        setBookedRanges([]); // Reset to empty array on error
      }
    };
    fetchBookedDates();
  }, [room._id]);
  // Handle successful payment redirect
  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast.success(
        "Booking confirmed! You will receive a confirmation email shortly."
      );
    }
    if (searchParams.get("cancel") === "true") {
      toast.error("Payment was cancelled. Please try again.");
    }
  }, [searchParams]);

  // Calculate price with debounce
  useEffect(() => {
    const calculatePrice = () => {
      if (checkInDate && checkOutDate) {
        const nights = differenceInDays(checkOutDate, checkInDate);
        const basePrice = room.price * nights;
        // This is a client-side placeholder. A real app would make an API call
        // to securely calculate the price and apply the promo code on the server.
        const sanitizedPromo = promoCode?.trim().toUpperCase();
        let calculatedDiscount = 0;
        if (sanitizedPromo === "SUMMER24" || sanitizedPromo === "WELCOME10") {
          calculatedDiscount =
            basePrice * (sanitizedPromo === "SUMMER24" ? 0.15 : 0.1);
          setDiscount(calculatedDiscount);
        } else {
          setDiscount(0);
        }
        setTotalPrice(basePrice - calculatedDiscount);
      } else {
        setTotalPrice(0);
        setDiscount(0);
      }
    };
    const debounceTimer = setTimeout(calculatePrice, 300);
    return () => clearTimeout(debounceTimer);
  }, [checkInDate, checkOutDate, room.price, promoCode]);

  // Generate a list of disabled dates for the calendar
  const disabledDates = bookedRanges.flatMap((range) => {
    const start = new Date(range.checkInDate);
    const end = new Date(range.checkOutDate);
    const dates: Date[] = [];
    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }
    return dates;
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Client-side validation (UX only)
      if (data.numberOfGuests > room.maxOccupancy) {
        throw new Error(
          `This room accommodates a maximum of ${room.maxOccupancy} guests.`
        );
      }

      // Prepare payload (DO NOT send userId or totalPrice)
      const payload = {
        room: room._id,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        numberOfGuests: data.numberOfGuests,
        promoCode: data.promoCode, // if used on server
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      console.log("📨 Booking response:", response);

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 401) {
          router.push("/sign-in");
          // throw new Error(
          //   "You must be logged in to book a room. Please sign in and try again."
          // );
          return toast.error(
            "You must be logged in to book a room. Please sign in and try again"
          );
        }

        throw new Error(errorData.message || "Booking failed.");
      }

      const result = await response.json();
      // toast.success("Successfully Booked the Room!");
      toast.success("Successfully Booked the Room!", {
        // description: (
        //   <div className="flex flex-col gap-1">
        //     <span>
        //       {new Date(booking.checkInDate).toLocaleDateString("en-US", {
        //         weekday: "long",
        //         year: "numeric",
        //         month: "long",
        //         day: "numeric",
        //       })}
        //       {" at "}
        //       {new Date(booking.checkInDate).toLocaleTimeString("en-US", {
        //         hour: "2-digit",
        //         minute: "2-digit",
        //       })}
        //     </span>
        //     <span className="text-sm">
        //       Room #{booking.room.roomNumber} • {booking.room.roomType}
        //     </span>
        //   </div>
        // ),
        action: {
          label: "View Booking",
          onClick: () =>
            router.push(`/booking/success?bookingId=${result.data._id}`),
        },
        duration: 10000, // 10 seconds
      });

      console.log("✅ Booking result:", result);

      // Optionally redirect
      router.push(`/booking/success?bookingId=${result.data._id}`);
      // router.push(`/booking/success?bookingId=${result.data._id}`);
    } catch (error) {
      console.error("❌ Booking failed:", error);
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
      form.setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <span className="font-semibold">${room.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-500">
            Max Occupancy
          </span>
          <span className="font-medium">{room.maxOccupancy} guests</span>
        </div>
      </div>

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
                            "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
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
                      className="w-auto p-0 bg-white animate-popover"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                          disabledDates.some(
                            (d) => d.toDateString() === date.toDateString()
                          )
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
                            "w-full justify-start text-left font-normal h-12 rounded-xl border-gray-300 transition-all",
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
                      className="w-auto p-0 bg-white animate-popover"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          if (!checkInDate) return true;
                          return (
                            date <= checkInDate ||
                            disabledDates.some(
                              (d) => d.toDateString() === date.toDateString()
                            )
                          );
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
                      className="h-12 rounded-xl transition-all"
                      value={field.value}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Promo Code */}
          <FormField
            control={form.control}
            name="promoCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 mb-1">
                  Promo Code (Optional)
                </FormLabel>
                <div className="flex gap-2">
                  <FormControl>
                    <Input
                      placeholder="Enter promo code"
                      className="h-12 rounded-xl flex-1 transition-all"
                      {...field}
                      onChange={(e) => {
                        const sanitized = e.target.value.replace(
                          /[^a-zA-Z0-9]/g,
                          ""
                        );
                        field.onChange(sanitized);
                      }}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    onClick={() => form.trigger("promoCode")}
                    variant="outline"
                    className="h-12 rounded-xl transition-all"
                  >
                    Apply
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {promoCode && discount > 0 && (
            <p className="text-sm text-green-600">Discount applied!</p>
          )}

          {/* Price Summary */}
          <div className="bg-gray-50 p-4 rounded-xl transition-all hover:bg-gray-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">
                {checkInDate && checkOutDate
                  ? `${differenceInDays(checkOutDate, checkInDate)} nights`
                  : "N/A"}
              </span>
              <span className="font-medium">
                ${room.price.toFixed(2)} ×{" "}
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
            <div className="text-red-500 text-sm animate-fade-in">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-[1.01] cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
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
            You will be redirected to a secure payment page.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
