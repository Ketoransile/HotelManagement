// app/api/bookings/[id]/route.ts
import { NextResponse } from "next/server";
import Booking, { IBooking } from "../../../../../models/Booking";
import { connectDB } from "@/lib/connectDB";

// GET a single booking by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const booking = await Booking.findById(params.id).populate("room");
    if (!booking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json(booking, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch booking.", { status: 500 });
  }
}

// PUT (Update) a single booking by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await request.json();
    const updatedBooking = await Booking.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBooking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json(updatedBooking, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(`Failed to update booking: ${error.message}`, {
      status: 400,
    });
  }
}

// DELETE a single booking by ID (for cancellation)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deletedBooking = await Booking.findByIdAndDelete(params.id);
    if (!deletedBooking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json("Booking deleted successfully.", { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to delete booking.", { status: 500 });
  }
}
