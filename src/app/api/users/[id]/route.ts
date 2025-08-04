// app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import User, { IUser } from "../../../../models/User";
import { connectDB } from "@/lib/connectDB";

// GET a single user by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json("User not found.", { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch user.", { status: 500 });
  }
}

// PUT (Update) a user by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await request.json();
    // **IMPORTANT:** You must add authentication here to ensure that a user
    // can only update their own profile, or an admin can update any profile.
    const updatedUser = await User.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return NextResponse.json("User not found.", { status: 404 });
    }
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(`Failed to update user: ${error.message}`, {
      status: 400,
    });
  }
}

// DELETE a user by ID (Admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    // **IMPORTANT:** This route should be protected to only allow
    // authenticated administrators to delete a user.
    const deletedUser = await User.findByIdAndDelete(params.id);
    if (!deletedUser) {
      return NextResponse.json("User not found.", { status: 404 });
    }
    return NextResponse.json("User deleted successfully.", { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to delete user.", { status: 500 });
  }
}
