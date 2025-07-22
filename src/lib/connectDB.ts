import "dotenv/config";

import mongoose from "mongoose";

console.log("Loaded MONGODB_URI:", process.env.NEXT_PUBLIC_MONGODB_URI);

const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
console.log("Loaded MONGODB_URI:", process.env.NEXT_PUBLIC_MONGODB_URI);

if (!URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}
let cachedClient: ReturnType<typeof mongoose.connection.getClient> | null =
  null;

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1 && cachedClient) {
      console.log("✅ Reusing existing Mongoose connection");
      return cachedClient;
    }

    await mongoose.connect(URI!, {
      // dbName: "CarRentalDB",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    cachedClient = mongoose.connection.getClient();
    console.log("✅ Mongoose connected");

    return cachedClient;
  } catch (error) {
    console.error("❌ Mongoose connection error", error);
    throw error;
  }
}
