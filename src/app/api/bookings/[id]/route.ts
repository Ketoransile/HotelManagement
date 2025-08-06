// app/api/bookings/[id]/route.ts
import { NextResponse } from "next/server";
import Booking from "../../../../../models/Booking";
import { connectDB } from "@/lib/connectDB";
import "../../../../../models/Room";

// GET a single booking by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const booking = await Booking.findById(id).populate("room");
    // .populate("user");
    console.log("fetched Booking from db in route.ts is ", booking);
    if (!booking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json(booking, { status: 200 });
  } catch (error) {
    console.log("Unknown errors", error);
    return NextResponse.json("Failed to fetch booking.", { status: 500 });
  }
}

// PUT (Update) a single booking by ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { id } = await params;
    const updatedBooking = await Booking.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBooking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json(updatedBooking, { status: 200 });
  } catch (error: unknown) {
    let message = "Failed to update booking";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(`${message}`, {
      status: 400,
    });
  }
}

// DELETE a single booking by ID (for cancellation)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return NextResponse.json("Booking not found.", { status: 404 });
    }
    return NextResponse.json("Booking deleted successfully.", { status: 200 });
  } catch (error) {
    console.log("unknown errors", error);
    return NextResponse.json("Failed to delete booking.", { status: 500 });
  }
}
