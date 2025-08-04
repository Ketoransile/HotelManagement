// app/api/rooms/route.ts
import { NextResponse } from "next/server";
import Room, { IRoom } from "../../../../models/Room";
import { connectDB } from "@/lib/connectDB";

// GET all rooms
export async function GET() {
  try {
    await connectDB();
    const rooms: IRoom[] = await Room.find({});
    console.log("Rooms from /api/rooms/route.ts", rooms);
    return NextResponse.json(rooms, { status: 200 });
  } catch (error) {
    console.log("unknown errors", error);
    return NextResponse.json("Failed to fetch rooms.", { status: 500 });
  }
}

// POST a new room
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newRoom: IRoom = await Room.create(body);
    return NextResponse.json(newRoom, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(`Failed to create room: ${error.message}`, {
        status: 400,
      });
    }
    return NextResponse.json("Failed to create room.", { status: 500 });
  }
}
