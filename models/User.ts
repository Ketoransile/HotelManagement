// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

// Define a TypeScript interface for the User document
export interface IUser extends Document {
  name: string;
  email: string;
  emailVerified?: Date;
  role: "user" | "admin";
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    emailVerified: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, // This automatically adds createdAt and updatedAt fields
  }
);

// Prevent mongoose from recreating models in development mode
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
