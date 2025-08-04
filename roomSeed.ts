// run.ts
import mongoose from "mongoose";
import Room, { IRoomSchema } from "./models/Room"; // Now importing IRoomSchema
import "dotenv/config";
import { connectDB } from "./src/lib/connectDB";

// The data array now uses the IRoomSchema type
const rooms: IRoomSchema[] = [
  {
    roomNumber: "101",
    roomType: "Standard",
    price: 150,
    description: "A cozy standard room with a queen-sized bed and city view.",
    images: [
      {
        url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "102",
    roomType: "Standard",
    price: 150,
    description:
      "A comfortable standard room with a queen-sized bed and courtyard view.",
    images: [
      {
        url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "103",
    roomType: "Deluxe",
    price: 250,
    description:
      "A spacious deluxe room with a king-sized bed, balcony, and ocean view.",
    images: [
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1400262/pexels-photo-1400262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Jacuzzi"],
  },
  {
    roomNumber: "104",
    roomType: "Deluxe",
    price: 250,
    description:
      "A luxurious deluxe room with a king-sized bed, balcony, and pool view.",
    images: [
      {
        url: "https://images.pexels.com/photos/18413695/pexels-photo-18413695/free-photo-of-a-beautiful-resort-with-a-pool-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Jacuzzi"],
  },
  {
    roomNumber: "105",
    roomType: "Suite",
    price: 500,
    description:
      "An elegant suite with a separate living area, two bathrooms, and a stunning view.",
    images: [
      {
        url: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 4,
    amenities: [
      "Free Wi-Fi",
      "Coffee Maker",
      "Mini-bar",
      "Jacuzzi",
      "Separate living area",
    ],
  },
  {
    roomNumber: "106",
    roomType: "Standard",
    price: 150,
    description: "A cozy standard room with a queen-sized bed and city view.",
    images: [
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "107",
    roomType: "Standard",
    price: 150,
    description:
      "A comfortable standard room with a queen-sized bed and courtyard view.",
    images: [
      {
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "108",
    roomType: "Deluxe",
    price: 250,
    description:
      "A spacious deluxe room with a king-sized bed, balcony, and ocean view.",
    images: [
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1400262/pexels-photo-1400262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Jacuzzi"],
  },
  {
    roomNumber: "109",
    roomType: "Deluxe",
    price: 250,
    description:
      "A luxurious deluxe room with a king-sized bed, balcony, and pool view.",
    images: [
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/18413695/pexels-photo-18413695/free-photo-of-a-beautiful-resort-with-a-pool-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Jacuzzi"],
  },
  {
    roomNumber: "110",
    roomType: "Family",
    price: 350,
    description:
      "A spacious family room with two queen beds, suitable for up to four guests.",
    images: [
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/3935322/pexels-photo-3935322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 4,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge", "Dining area"],
  },
  {
    roomNumber: "201",
    roomType: "Standard",
    price: 160,
    description:
      "A cozy standard room on the second floor with a king bed and a stunning view of the skyline.",
    images: [
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge", "Desk"],
  },
  {
    roomNumber: "202",
    roomType: "Standard",
    price: 160,
    description:
      "A comfortable standard room on the second floor with two twin beds and a courtyard view.",
    images: [
      {
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "203",
    roomType: "Deluxe",
    price: 260,
    description:
      "A spacious deluxe room on the second floor with a king-sized bed, a balcony overlooking the city.",
    images: [
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1400262/pexels-photo-1400262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Balcony"],
  },
  {
    roomNumber: "204",
    roomType: "Deluxe",
    price: 260,
    description:
      "A luxurious deluxe room on the second floor with a king-sized bed, a small lounge area and a pool view.",
    images: [
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/18413695/pexels-photo-18413695/free-photo-of-a-beautiful-resort-with-a-pool-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Lounge access"],
  },
  {
    roomNumber: "205",
    roomType: "Suite",
    price: 550,
    description:
      "An expansive suite with a full living room, two bedrooms, and floor-to-ceiling windows with a panoramic view.",
    images: [
      {
        url: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 6,
    amenities: [
      "Free Wi-Fi",
      "Coffee Maker",
      "Mini-bar",
      "Butler service",
      "Dining area",
    ],
  },
  {
    roomNumber: "206",
    roomType: "Standard",
    price: 160,
    description:
      "A standard room with a double bed on the second floor, a work desk and a stunning view.",
    images: [
      {
        url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "207",
    roomType: "Standard",
    price: 160,
    description:
      "A comfortable standard room on the second floor with a king bed and a garden view.",
    images: [
      {
        url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge"],
  },
  {
    roomNumber: "208",
    roomType: "Deluxe",
    price: 260,
    description:
      "A spacious deluxe room on the second floor with a king-sized bed, balcony, and river view.",
    images: [
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1400262/pexels-photo-1400262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Balcony"],
  },
  {
    roomNumber: "209",
    roomType: "Deluxe",
    price: 260,
    description:
      "A luxurious deluxe room on the second floor with a king-sized bed, a spa tub and a mountain view.",
    images: [
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/18413695/pexels-photo-18413695/free-photo-of-a-beautiful-resort-with-a-pool-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-bar", "Spa access"],
  },
  {
    roomNumber: "210",
    roomType: "Family",
    price: 380,
    description:
      "A large family room on the second floor with two king beds and an ocean view.",
    images: [
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/3935322/pexels-photo-3935322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        url: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    maxOccupancy: 5,
    amenities: ["Free Wi-Fi", "Coffee Maker", "Mini-fridge", "Balcony"],
  },
];

async function seedRooms() {
  try {
    await connectDB();
    console.log("MongoDB connected successfully.");

    // Clear existing rooms to avoid duplicates
    await Room.deleteMany({});
    console.log("Existing rooms deleted.");

    // Insert the new rooms
    await Room.insertMany(rooms);
    console.log("20 rooms have been inserted successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedRooms();
