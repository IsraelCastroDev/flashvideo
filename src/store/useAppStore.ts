import { create } from "zustand";
import { filtersSlice, FiltersSliceType } from "./filtersSlice";

export const useAppStore = create<FiltersSliceType>((...a) => ({
  ...filtersSlice(...a),
}));
