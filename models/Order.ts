// models/Order.ts
import mongoose, { Schema, Document, Types } from "mongoose";
import type { IFood } from "./Food";

// Interface for input data or internal logic
export interface IOrderSchema {
  user: Types.ObjectId;
  booking: Types.ObjectId; // Link to hotel booking
  items: {
    foodItem: Types.ObjectId | IFood;
    quantity: number;
    notes?: string;
  }[];
  totalPrice: number;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}

// Mongoose document interface (includes _id, timestamps, etc.)
export interface IOrder extends IOrderSchema, Document {}

const orderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    items: [
      {
        foodItem: {
          type: Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        notes: {
          type: String,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Delivered", "Cancelled"],
      default: "Pending",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite on hot reload (Next.js)
const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
