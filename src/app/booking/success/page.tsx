// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import {
//   CheckCircle2,
//   Hotel,
//   MapPin,
//   CalendarDays,
//   Users,
//   BadgePercent,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import Link from "next/link";
// import mongoose from "mongoose";
// import { authClient } from "@/lib/auth-client";
// import { UnauthorizedPage } from "@/components/UnauthorizedPage";

// interface BookingDetails {
//   _id: mongoose.Types.ObjectId;
//   user: mongoose.Types.ObjectId;
//   room: {
//     _id: mongoose.Types.ObjectId;
//     roomNumber: string;
//     roomType: string;
//     price: number;
//     amenities: string[];
//   };
//   checkInDate: string;
//   checkOutDate: string;
//   totalPrice: number;
//   numberOfGuests: number;
//   status: "Pending" | "Confirmed" | "Cancelled" | "Completed";
// }

// export default function BookingSuccessPage() {
//   const {
//     data: session,
//     isPending, //loading state
//     // error, //error object
//     refetch, //refetch the session
//   } = authClient.useSession();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const bookingId = searchParams.get("bookingId");
//   const [booking, setBooking] = useState<BookingDetails | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBooking = async () => {
//       try {
//         if (!bookingId) {
//           setError("No booking ID provided");
//           setLoading(false);
//           return;
//         }

//         // Wait for session to load
//         if (isPending) return;

//         console.log("session from success page is", session);
//         const userId = session?.user?.id;
//         console.log("User id from seccess page is ", userId);

//         if (!userId) {
//           setError("You must be signed in to view this page");
//           setLoading(false);
//           return;
//         }

//         const res = await fetch(`/api/bookings/${bookingId}`);
//         if (!res.ok) {
//           throw new Error("Failed to fetch booking");
//         }

//         const result = await res.json();
//         console.log("result from success page is ", result);

//         // Convert both IDs to strings for comparison
//         const bookingUserId = result.user.toString();
//         if (bookingUserId !== userId) {
//           setError("You are not authorized to view this booking");
//           setLoading(false);
//           return;
//         }

//         setBooking(result);
//         toast.success("Booking Confirmed!", {
//           description: `Reservation #${result._id} confirmed`,
//           duration: 5000,
//         });
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to load booking");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooking();
//   }, [bookingId, session, isPending]); // Add isPending to dependencies

//   if (loading) return <div className="text-center p-8">Loading...</div>;
//   if (error)
//     return (
//       <div className="text-center p-8 text-red-500">
//         {error}
//         <UnauthorizedPage />
//       </div>
//     );
//   if (!booking) return <div className="text-center p-8">Booking not found</div>;

//   const checkInDate = new Date(booking.checkInDate);
//   const checkOutDate = new Date(booking.checkOutDate);
//   const nights = Math.floor(
//     (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
//   );

"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { CheckCircle2, Hotel, MapPin, CalendarDays, Users } from "lucide-react";
import { CheckCircle2, Hotel, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { UnauthorizedPage } from "@/components/UnauthorizedPage";
// import { LoadingSpinner } from "@/components/LoadingSpinner"; // Assume you have this component
import { authClient } from "@/lib/auth-client";
import mongoose from "mongoose";
import Loading from "@/app/loading";
interface BookingDetails {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  room: {
    _id: mongoose.Types.ObjectId;
    roomNumber: string;
    roomType: string;
    price: number;
    amenities: string[];
  };
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  numberOfGuests: number;
  status: "Pending" | "Confirmed" | "Cancelled" | "Completed";
}
export default function BookingSuccessPage() {
  const { data: session, isPending: isSessionLoading } =
    authClient.useSession();
  const searchParams = useSearchParams();
  // const router = useRouter();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        setIsLoading(true);

        // Validate booking ID
        if (!bookingId) {
          setError("No booking ID provided");
          return;
        }

        // Wait for session to load
        if (isSessionLoading) return;

        const userId = session?.user?.id;

        // Check authentication
        if (!userId) {
          setError("Authentication required");
          return;
        }

        // Fetch booking data
        const res = await fetch(`/api/bookings/${bookingId}`);
        if (!res.ok) throw new Error("Failed to fetch booking");

        const result = await res.json();

        // Authorization check
        if (result.user.toString() !== userId) {
          setError("Unauthorized access");
          return;
        }

        setBooking(result);
        toast.success("Booking Confirmed!", {
          description: `Reservation #${result._id} confirmed`,
          duration: 5000,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId, session, isSessionLoading]);

  // Loading state
  if (isLoading || isSessionLoading) {
    // return <LoadingSpinner fullPage />;
    return <Loading />;
  }

  // Error states
  if (error) {
    if (
      error === "Authentication required" ||
      error === "Unauthorized access"
    ) {
      return (
        <UnauthorizedPage
          message={
            error === "Authentication required"
              ? "Please sign in to view your booking"
              : "You don't have permission to view this booking"
          }
        />
      );
    }
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  // No booking found
  if (!booking) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold mb-2">Booking Not Found</h2>
        <p className="text-gray-600 mb-4">
          We couldn&apos;t find the requested booking
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  // Calculate nights
  const checkInDate = new Date(booking.checkInDate);
  const checkOutDate = new Date(booking.checkOutDate);
  const nights = Math.floor(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Your reservation #{booking._id.toString()} is now confirmed.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 mb-8">
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Hotel className="h-6 w-6 text-white" />
                <h2 className="text-xl font-bold text-white">
                  Booking #{booking._id.toString().slice(-6).toUpperCase()}
                </h2>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {booking.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600">
                    <Hotel className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {booking.room.roomType}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Room #{booking.room.roomNumber}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {booking.room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Dates</h3>
                  <p className="text-sm text-gray-500">
                    {checkInDate.toLocaleDateString()} →{" "}
                    {checkOutDate.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {nights} night{nights !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Guests</h3>
                  <p className="text-sm text-gray-500">
                    {booking.numberOfGuests} guest
                    {booking.numberOfGuests !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Payment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  ${booking.room.price.toFixed(2)} × {nights} nights
                </span>
                <span className="font-medium">
                  ${(booking.room.price * nights).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">
                  ${booking.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
