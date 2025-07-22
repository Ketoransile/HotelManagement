import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDB } from "../lib/connectDB";
import { nextCookies } from "better-auth/next-js";
import { admin as adminPlugin } from "better-auth/plugins";

const client = await connectDB();
export const auth = betterAuth({
  // Async function to provide the database adapter

  database: mongodbAdapter(client.db()),

  plugins: [nextCookies(), adminPlugin()],
  emailAndPassword: {
    enabled: true,
  },
});
