// import "dotenv/config";
import axios from "axios";
import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

const session = await auth.api.getSession({
  headers: await headers(), // you need to pass the headers object.
});
const token = session?.session.token;
console.log("session from axiosConfig.ts is ", session);
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = axios.create({
  baseURL: `${BASE_URL}`, // Your API base URL
  // timeout: 5000, // Request timeout (5s)
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Optional auth header
  },
});

export default apiClient;
