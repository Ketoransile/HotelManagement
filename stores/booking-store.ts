import React, { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the interface for a booking
interface BookingDetails {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
}

// Define the interface for the state
interface BookingState {
  currentBooking: BookingDetails | null;
  bookings: any[]; // You would define a more specific type for your booking objects
  isBookingLoading: boolean;
  bookingError: string | null;

  // Actions
  setBookingDetails: (details: Partial<BookingDetails>) => void;
  clearCurrentBooking: () => void;
  fetchUserBookings: () => Promise<void>;
  createBooking: (bookingData: BookingDetails) => Promise<void>;
  cancelBooking: (bookingId: string) => Promise<void>;
}

// Create the Zustand store for booking functionality with persistence
const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      // Initial state
      currentBooking: null,
      bookings: [],
      isBookingLoading: false,
      bookingError: null,

      // Action to update the booking details as the user interacts with the UI
      setBookingDetails: (details) =>
        set((state) => ({
          currentBooking: {
            ...(state.currentBooking || {}),
            ...details,
          } as BookingDetails,
        })),

      // Action to clear the current booking details, for example, after a successful booking
      clearCurrentBooking: () => set({ currentBooking: null }),

      // Async action to fetch a user's bookings from the backend
      fetchUserBookings: async () => {
        set({ isBookingLoading: true, bookingError: null });
        try {
          // TODO: Replace with your actual API endpoint for fetching user bookings
          // const response = await fetch('/api/bookings/user');
          // const data = await response.json();
          const mockBookings = [
            {
              id: "1",
              roomId: "A101",
              checkInDate: "2025-08-10",
              checkOutDate: "2025-08-15",
              status: "Confirmed",
            },
            {
              id: "2",
              roomId: "B202",
              checkInDate: "2025-09-01",
              checkOutDate: "2025-09-05",
              status: "Pending",
            },
          ];
          set({ bookings: mockBookings, isBookingLoading: false });
        } catch (error) {
          set({
            isBookingLoading: false,
            bookingError: "Failed to fetch bookings.",
          });
        }
      },

      // Async action to create a new booking
      createBooking: async (bookingData) => {
        set({ isBookingLoading: true, bookingError: null });
        try {
          // TODO: Replace with your actual API endpoint for creating a booking
          // const response = await fetch('/api/bookings', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(bookingData),
          // });
          // const newBooking = await response.json();
          console.log("Creating booking:", bookingData);
          set({ isBookingLoading: false, currentBooking: null });
        } catch (error) {
          set({
            isBookingLoading: false,
            bookingError: "Failed to create booking.",
          });
        }
      },

      // Async action to cancel an existing booking
      cancelBooking: async (bookingId) => {
        set({ isBookingLoading: true, bookingError: null });
        try {
          // TODO: Replace with your actual API endpoint for canceling a booking
          // const response = await fetch(`/api/bookings/${bookingId}`, {
          //   method: 'DELETE',
          // });
          console.log("Canceling booking:", bookingId);
          set((state) => ({
            bookings: state.bookings.filter((b) => b.id !== bookingId),
            isBookingLoading: false,
          }));
        } catch (error) {
          set({
            isBookingLoading: false,
            bookingError: "Failed to cancel booking.",
          });
        }
      },
    }),
    {
      name: "booking-storage", // unique name for the item in localStorage
    }
  )
);
