// app/api/bookings/route.ts
import { NextResponse } from "next/server";
import Booking, { IBooking } from "../../../../models/Booking";
// import Room from "../../../../models/Room";
import { connectDB } from "@/lib/connectDB";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Room from "../../../../models/Room";

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
    console.log("📥 Received POST request to /api/bookings");

    await connectDB();
    console.log("✅ Connected to MongoDB");

    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user.id;
    console.log("👤 Authenticated user ID:", userId);

    if (!userId) {
      console.warn("⚠️ Unauthorized: No user ID found in session");
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    console.log("📦 Request body:", body);

    const { room: roomId, checkInDate, checkOutDate, numberOfGuests } = body;

    if (!roomId || !checkInDate || !checkOutDate || !numberOfGuests) {
      console.error("❌ Missing required booking fields");
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn >= checkOut || checkIn < today) {
      console.warn("⚠️ Invalid check-in/check-out dates", {
        checkIn,
        checkOut,
      });
      return NextResponse.json(
        { message: "Invalid date range" },
        { status: 400 }
      );
    }

    const room = await Room.findById(roomId);
    if (!room) {
      console.error("❌ Room not found with ID:", roomId);
      return NextResponse.json({ message: "Room not found" }, { status: 404 });
    }

    console.log("🏨 Room found:", {
      roomId: room._id,
      maxOccupancy: room.maxOccupancy,
    });

    if (numberOfGuests > room.maxOccupancy) {
      console.warn(
        `⚠️ Number of guests (${numberOfGuests}) exceeds max occupancy (${room.maxOccupancy})`
      );
      return NextResponse.json(
        {
          message: `Max occupancy is ${room.maxOccupancy}`,
        },
        { status: 400 }
      );
    }

    const existingBooking = await Booking.findOne({
      room: roomId,
      status: { $in: ["Pending", "Confirmed"] },
      $or: [
        {
          checkInDate: { $lt: checkOut },
          checkOutDate: { $gt: checkIn },
        },
      ],
    });

    if (existingBooking) {
      console.warn("⚠️ Booking conflict found:", existingBooking);
      return NextResponse.json(
        {
          message: "Room is already booked during this date range",
        },
        { status: 409 }
      );
    }

    const nights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = nights * room.price;

    console.log(
      `💰 Calculated total price: ${totalPrice} (${nights} nights × $${room.price})`
    );

    const newBooking = await Booking.create({
      user: userId,
      room: roomId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuests,
      totalPrice,
      status: "Pending",
    });

    console.log("✅ Booking created successfully:", newBooking);

    return NextResponse.json({ data: newBooking }, { status: 201 });
  } catch (error: unknown) {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }

    console.error("❌ Error while creating booking:", message);
    return NextResponse.json(
      { message: `Failed to create booking: ${message}` },
      {
        status: 400,
      }
    );
  }
}
