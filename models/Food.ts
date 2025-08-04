// models/Food.ts
import mongoose, { Schema, Document } from "mongoose";

// Define a TypeScript interface for the Food document
export interface IFood extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  images?: Array<{ url: string }>;
  isAvailable: boolean;
  updatedBy?: mongoose.Schema.Types.ObjectId;
}

const foodSchema: Schema<IFood> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["Appetizer", "Main Course", "Dessert", "Beverage"],
    },
    images: [
      {
        url: String,
      },
    ],
    isAvailable: {
      type: Boolean,
      default: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from recreating models in development mode
const Food = mongoose.models.Food || mongoose.model<IFood>("Food", foodSchema);

export default Food;
