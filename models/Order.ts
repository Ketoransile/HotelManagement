// models/Order.ts
import mongoose, { Schema, Document } from "mongoose";
import type { IFood } from "./Food"; // Assuming Food model is in a file named Food.ts

// Define a TypeScript interface for the Order document
export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  items: Array<{
    foodItem: mongoose.Schema.Types.ObjectId | IFood;
    quantity: number;
  }>;
  totalPrice: number;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}

const orderSchema: Schema<IOrder> = new mongoose.Schema(
  {
    // Reference to the user who made the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Array of food items in the order
    items: [
      {
        foodItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
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
      required: true,
      enum: ["Pending", "Processing", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from recreating models in development mode
const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
