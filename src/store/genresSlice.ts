import { StateCreator } from "zustand";
import { Genre } from "../types";

export type GenresSliceType = {
  genres: Genre[];
  setGenres: (genres: Genre[]) => void;
};

export const genresSlice: StateCreator<GenresSliceType> = (set) => ({
  genres: [],
  setGenres: (genres) => {
    set({ genres });
  },
});
