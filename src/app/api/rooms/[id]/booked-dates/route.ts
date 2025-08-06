import { connectDB } from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import Booking from "../../../../../../models/Booking";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log("room id from params in availiablity route is ", id);
    await connectDB();
    const bookings = await Booking.find({
      room: id,
      status: { $in: ["Pending", "Confirmed"] },
    }).sort({ checkInDate: 1 });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("INternal error while getting booked dates", error);
    return NextResponse.json(
      { error: "Failed to get booked dates" },
      { status: 500 }
    );
  }
}
