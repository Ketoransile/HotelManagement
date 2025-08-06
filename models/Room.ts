// models/Room.ts
import mongoose, { Document, Schema } from "mongoose";

// Interface for the images
export interface IImage {
  url: string;
  isPrimary?: boolean;
}

// Interface for the data object without Mongoose properties
export interface IRoomSchema {
  roomNumber: string;
  roomType: "Standard" | "Deluxe" | "Suite" | "Family"; // Using a union type for better safety
  price: number;
  description: string;
  images: IImage[];
  maxOccupancy: number;
  amenities: string[];
}

// Interface for the Mongoose document, which includes all the Mongoose-specific properties
export interface IRoom extends IRoomSchema, Document {}

const RoomSchema: Schema = new Schema({
  roomNumber: { type: String, required: true, unique: true },
  roomType: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      isPrimary: { type: Boolean, default: false },
      _id: false,
    },
  ],
  maxOccupancy: { type: Number, required: true },
  amenities: [{ type: String }],
});

const Room = mongoose.models.Room || mongoose.model<IRoom>("Room", RoomSchema);

export default Room;
