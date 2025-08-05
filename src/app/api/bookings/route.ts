// app/api/bookings/route.ts
import { NextResponse } from "next/server";
import Booking, { IBooking } from "../../../../models/Booking";
// import Room from "../../../../models/Room";
import { connectDB } from "@/lib/connectDB";

// GET all bookings
export async function GET() {
  try {
    await connectDB();
    const bookings: IBooking[] = await Booking.find({}).populate("room"); // Populate the room details
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.log("UNknown errors", error);
    return NextResponse.json("Failed to fetch bookings.", { status: 500 });
  }
}

// POST a new booking
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // **IMPORTANT:** Add logic here to check if the room is available
    // for the requested dates before creating the booking.
    // For example:
    // const isRoomAvailable = await checkAvailability(body.roomId, body.checkInDate, body.checkOutDate);
    // if (!isRoomAvailable) {
    //   return NextResponse.json('Room is not available for the selected dates.', { status: 409 });
    // }

    const newBooking: IBooking = await Booking.create(body);
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error: unknown) {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return NextResponse.json(`Failed to create booking: ${message}`, {
      status: 400,
    });
  }
}
