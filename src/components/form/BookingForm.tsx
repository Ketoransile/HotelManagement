// // components/BookingForm.js
// "use client";
// import React, { useState } from "react";
// type AddonName = "breakfast" | "airportPickup";
// const BookingForm = () => {
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [numberOfGuests, setNumberOfGuests] = useState("");
//   const [addons, setAddons] = useState({
//     breakfast: false,
//     airportPickup: false,
//   });

//   const handleAddonToggle = (addonName: AddonName) => {
//     setAddons((prevAddons) => ({
//       ...prevAddons,
//       [addonName]: !prevAddons[addonName],
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Booking Information:", {
//       checkInDate,
//       checkOutDate,
//       numberOfGuests,
//       addons,
//     });
//     alert("Checking Availability!");
//   };

//   const handleCancel = () => {
//     console.log("Booking cancelled.");
//     setCheckInDate("");
//     setCheckOutDate("");
//     setNumberOfGuests("");
//     setAddons({
//       breakfast: false,
//       airportPickup: false,
//     });
//   };

//   return (
//     <div className="w-full max-w-2xl  bg-white p-2  mt-12 ">
//       <h1 className="text-3xl font-bold my-10">Booking Information</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Check-in Date */}
//         <div>
//           <label
//             htmlFor="checkInDate"
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Check-in Date
//           </label>
//           <input
//             type="date"
//             id="checkInDate"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
//           />
//         </div>

//         {/* Check-out Date */}
//         <div>
//           <label
//             htmlFor="checkOutDate"
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Check-out Date
//           </label>
//           <input
//             type="date"
//             id="checkOutDate"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
//           />
//         </div>

//         {/* Number of Guests */}
//         <div>
//           <label
//             htmlFor="numberOfGuests"
//             className="block text-sm font-semibold text-gray-700 mb-2"
//           >
//             Number of Guests
//           </label>
//           <input
//             type="number"
//             id="numberOfGuests"
//             placeholder="1"
//             value={numberOfGuests}
//             onChange={(e) => setNumberOfGuests(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
//           />
//         </div>

//         {/* Add-ons */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-3">
//             Add-ons
//           </label>
//           <div className="flex flex-wrap gap-4 justify-center">
//             {" "}
//             {/* Added justify-center for better alignment */}
//             <button
//               type="button"
//               onClick={() => handleAddonToggle("breakfast")}
//               className={`flex-1 min-w-[120px] px-5 py-3 rounded-xl border-2 font-medium text-center transition duration-300 ease-in-out transform hover:scale-105 ${
//                 addons.breakfast
//                   ? "bg-blue-600 text-white border-blue-700 shadow-md"
//                   : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Breakfast
//             </button>
//             <button
//               type="button"
//               onClick={() => handleAddonToggle("airportPickup")}
//               className={`flex-1 min-w-[120px] px-5 py-3 rounded-xl border-2 font-medium text-center transition duration-300 ease-in-out transform hover:scale-105 ${
//                 addons.airportPickup
//                   ? "bg-blue-600 text-white border-blue-700 shadow-md"
//                   : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Airport Pickup
//             </button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-start gap-4 pt-6">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out font-medium"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200 ease-in-out font-semibold"
//           >
//             Check Availability
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SimpleDatePicker } from "../SimpleDatePicker";

export interface AddOns {
  breakfast: boolean;
  airportPickup: boolean;
}

export interface FormSchemaType {
  checkInDate: Date | null; // Changed to Date | null based on default values
  checkOutDate: Date | null; // Changed to Date | null based on default values
  numberOfGuests: number;
  addOns: AddOns;
}

// *** CRITICAL CHANGE: Using z.union for date fields ***
export const formSchema = z
  .object({
    checkInDate: z.union([z.date(), z.null()]).refine(
      (val) => val !== null, // Check for not null
      { message: "Please select a check-in date", path: ["checkInDate"] }
    ),
    checkOutDate: z.union([z.date(), z.null()]).refine(
      (val) => val !== null, // Check for not null
      { message: "Please select a check-out date", path: ["checkOutDate"] }
    ),
    numberOfGuests: z
      .number({
        message: "Please select number of guests", // Correct property for number types
      })
      .min(1, "Number of guests must be at least 1")
      .max(10, "Number of guests cannot exceed 10"),
    addOns: z.object({
      breakfast: z.boolean(),
      airportPickup: z.boolean(),
    }),
  })
  .refine(
    (data) => {
      // Only perform date comparison if both dates are selected (and not null)
      if (data.checkInDate && data.checkOutDate) {
        return data.checkOutDate > data.checkInDate;
      }
      return true; // Allow initial state where dates might be null
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOutDate"],
    }
  );

const BookingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkInDate: null, // Default to null for date pickers
      checkOutDate: null, // Default to null for date pickers
      numberOfGuests: 1, // Default to a valid number
      addOns: {
        breakfast: false,
        airportPickup: false,
      },
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    alert("Form submitted successfully! Check console for data.");
  };

  const handleCancel = () => {
    console.log("Booking cancelled.");
    form.reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-10  bg-white shadow-xl  drop-shadow-neutral-300 rounded-lg">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Booking Information
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Check-in Date */}
          <FormField
            control={form.control}
            name="checkInDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  Check-in Date
                </FormLabel>
                <FormControl>
                  <SimpleDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select Check-in Date"
                    minDate={new Date()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Check-out Date */}
          <FormField
            control={form.control}
            name="checkOutDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  Check-out Date
                </FormLabel>
                <FormControl>
                  <SimpleDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Select Check-out Date"
                    // Ensure minDate is checkInDate if available, otherwise current date
                    minDate={form.watch("checkInDate") || new Date()}
                  />
                </FormControl>
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
                <FormLabel className="text-sm font-semibold text-gray-700">
                  Number of Guests
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={10}
                    placeholder="Select Number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                    value={field.value === undefined ? "" : field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Add-ons */}
          <div>
            <FormLabel className="text-sm font-semibold text-gray-700 mb-3 block">
              Add-ons
            </FormLabel>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Breakfast */}
              <FormField
                control={form.control}
                name="addOns.breakfast"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[120px]">
                    <FormControl>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                          "border px-5 py-3 rounded-xl font-medium text-center transition duration-300 ease-in-out transform hover:scale-105",
                          field.value
                            ? "bg-blue-600 text-white border-blue-700 shadow-md"
                            : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                        )}
                        onClick={() => field.onChange(!field.value)}
                      >
                        Breakfast
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Airport Pickup */}
              <FormField
                control={form.control}
                name="addOns.airportPickup"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-[120px]">
                    <FormControl>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                          "border px-5 py-3 rounded-xl font-medium text-center transition duration-300 ease-in-out transform hover:scale-105",
                          field.value
                            ? "bg-blue-600 text-white border-blue-700 shadow-md"
                            : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                        )}
                        onClick={() => field.onChange(!field.value)}
                      >
                        Airport Pickup
                      </Button>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full grid grid-cols-2 justify-start gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="px-6 py-3 rounded-lg text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition duration-200 ease-in-out font-medium"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200 ease-in-out font-semibold"
            >
              Check Availability
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
