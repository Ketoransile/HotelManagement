import { NextResponse } from "next/server";
import Request from "next/server";
import Room from "../../../../../models/Room";
import { connectDB } from "@/lib/connectDB";

// GET a single room by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const room = await Room.findById(id);
    console.log("room from room id api", room);
    if (!room) {
      return NextResponse.json("Room not found.", { status: 404 });
    }
    return NextResponse.json(room, { status: 200 });
  } catch {
    return NextResponse.json("Failed to fetch room.", { status: 500 });
  }
}

// PUT (Update) a single room by ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { id } = await params;
    const updatedRoom = await Room.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRoom) {
      return NextResponse.json("Room not found.", { status: 404 });
    }
    return NextResponse.json(updatedRoom, { status: 200 });
  } catch (error: unknown) {
    let message = "Failed to update room";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(`${message}`, {
      status: 400,
    });
  }
}

// DELETE a single room by ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      return NextResponse.json("Room not found.", { status: 404 });
    }
    return NextResponse.json("Room deleted successfully.", { status: 200 });
  } catch {
    return NextResponse.json("Failed to delete room.", { status: 500 });
  }
}
