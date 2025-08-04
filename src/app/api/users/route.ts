// app/api/users/route.ts
import { NextResponse } from "next/server";
import User, { IUser } from "../../../../models/User";
import { connectDB } from "@/lib/connectDB";

// GET all users (Admin only)
export async function GET() {
  try {
    await connectDB();
    // **IMPORTANT:** In a production app, this route should be protected
    // to only allow requests from authenticated administrators.
    const users: IUser[] = await User.find({});
    // This will return an array of user objects with fields like _id, name, email, etc.
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch users.", { status: 500 });
  }
}
