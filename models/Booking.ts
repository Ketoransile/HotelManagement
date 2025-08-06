// models/Booking.ts
import mongoose, { Document, Schema } from "mongoose";

// --- INTERFACES ---

// Interface for the raw data object, before it becomes a Mongoose document.
// This is useful for type-checking data being passed into Mongoose functions (e.g., in a request body).
export interface IBookingSchema {
  user: mongoose.Schema.Types.ObjectId;
  room: mongoose.Schema.Types.ObjectId;
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: number;
  numberOfGuests: number;
  status: "Pending" | "Confirmed" | "Cancelled" | "Completed";
}

// Interface for the Mongoose document itself, which includes all the Mongoose-specific properties
// like _id, timestamps, and other methods.
export interface IBooking extends IBookingSchema, Document {}

// --- SCHEMA DEFINITION ---

const bookingSchema: Schema<IBooking> = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0, // Ensure the total price is a positive number
    },
    numberOfGuests: {
      type: Number,
      required: true,
      min: 1, // Ensure there is at least one guest
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"], // Use a descriptive enum
      default: "Pending",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// --- MODEL CREATION ---

// Prevents mongoose from overwriting the model in environments with hot-reloading (like Next.js development)
const Booking =
  (mongoose.models.Booking as mongoose.Model<IBooking>) ||
  mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
