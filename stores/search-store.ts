import { create } from "zustand";

interface SearchState {
  location: string;
  setLocation: (location: string) => void;

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;

  amenities: string[];
  toggleAmenity: (amenity: string) => void;

  rating: number | null;
  setRating: (rating: number | null) => void;

  resetFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  location: "",
  setLocation: (location) => set({ location }),

  priceRange: [0, 1000],
  setPriceRange: (priceRange) => set({ priceRange }),

  amenities: [],
  toggleAmenity: (amenity) =>
    set((state) => ({
      amenities: state.amenities.includes(amenity)
        ? state.amenities.filter((a) => a !== amenity)
        : [...state.amenities, amenity],
    })),

  rating: null,
  setRating: (rating) => set({ rating }),

  resetFilters: () =>
    set({
      location: "",
      priceRange: [0, 1000],
      amenities: [],
      rating: null,
    }),
}));
