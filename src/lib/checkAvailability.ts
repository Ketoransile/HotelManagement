// lib/checkAvailability.ts
import Booking from "../../models/Booking"; // Assuming Booking model is in a file named Booking.ts
import { connectDB } from "./connectDB";

/**
 * Checks if a room is available for a given date range.
 * @param roomId The ID of the room to check.
 * @param checkInDate The desired check-in date.
 * @param checkOutDate The desired check-out date.
 * @returns A boolean indicating if the room is available.
 */
export const checkAvailability = async (
  roomId: string,
  checkInDate: string,
  checkOutDate: string
): Promise<boolean> => {
  await connectDB();

  const existingBookings = await Booking.find({
    room: roomId,
    $and: [
      { checkInDate: { $lt: new Date(checkOutDate) } },
      { checkOutDate: { $gt: new Date(checkInDate) } },
    ],
  });

  return existingBookings.length === 0;
};
