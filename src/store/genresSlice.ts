import { StateCreator } from "zustand";
import { Genre } from "../types";

export type GenresSliceType = {
  genres: Genre[];
  genresTVSerie: Genre[];
  setGenres: (genres: Genre[]) => void;
  setGenresTVSeries: (genresTVSerie: Genre[]) => void;
};

export const genresSlice: StateCreator<GenresSliceType> = (set) => ({
  genres: [],
  genresTVSerie: [],
  setGenres: (genres) => {
    set({ genres });
  },
  setGenresTVSeries: (genresTVSerie) => {
    set({ genresTVSerie });
  },
});
