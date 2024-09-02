import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { sortSlice, FiltersSliceType } from "./sortSlice";
import { genresSlice, GenresSliceType } from "./genresSlice";

export const useAppStore = create<FiltersSliceType & GenresSliceType>()(
  devtools((...a) => ({
    ...sortSlice(...a),
    ...genresSlice(...a),
  }))
);
