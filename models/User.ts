// // models/User.ts
// import mongoose, { Schema, Document } from "mongoose";

// // Define a TypeScript interface for the User document
// export interface IUser extends Document {
//   name: string;
//   email: string;
//   emailVerified?: Date;
//   role: "user" | "admin";
// }

// const userSchema: Schema<IUser> = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     emailVerified: {
//       type: Date,
//       default: null,
//     },
//     role: {
//       type: String,
//       enum: ["user", "admin"],
//       default: "user",
//     },
//   },
//   {
//     timestamps: true, // This automatically adds createdAt and updatedAt fields
//   }
// );

// // Prevent mongoose from recreating models in development mode
// const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

// export default User;
import mongoose, { Schema, Document } from "mongoose";

// 1. Interface for type safety
export interface IUser extends Document {
  name: string;
  email: string;
  emailVerified: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Schema definition
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    role: { type: String, default: "user" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    strict: false, // Allows additional fields if present
    timestamps: false, // Disable Mongoose's timestamps since Better Auth already adds them
  }
);

// 3. Model creation with hot-reload support
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
