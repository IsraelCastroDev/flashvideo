import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { filtersSlice, FiltersSliceType } from "./filtersSlice";
import { genresSlice, GenresSliceType } from "./genresSlice";

export const useAppStore = create<FiltersSliceType & GenresSliceType>()(
  devtools((...a) => ({
    ...filtersSlice(...a),
    ...genresSlice(...a),
  }))
);
