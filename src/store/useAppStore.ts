import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { sortSlice, FiltersSliceType } from "./filtersSlice";

export const useAppStore = create<FiltersSliceType>()(
  devtools((...a) => ({
    ...sortSlice(...a),
  }))
);
