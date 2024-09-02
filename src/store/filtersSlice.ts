import { StateCreator } from "zustand";

export type FiltersSliceType = {
  sort: string;
  genreFilterId: number | null;
  changeSort: (filter: string) => void;
  changeSelectedGenreFilterId: (genre: number | null) => void;
};

export const filtersSlice: StateCreator<FiltersSliceType> = (set) => ({
  sort: "releaseDateDesc",
  genreFilterId: null,
  changeSort: (filter) => {
    set({ sort: filter });
  },
  changeSelectedGenreFilterId: (genreFilterId) => {
    set((state) => ({ ...state, genreFilterId }));
  },
});
