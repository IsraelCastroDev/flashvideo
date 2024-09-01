import { StateCreator } from "zustand";

export type FiltersSliceType = {
  filters: string;
  changeFilter: (filter: string) => void;
};

export const filtersSlice: StateCreator<FiltersSliceType> = (set) => ({
  filters: "releaseDateDesc",
  changeFilter: (filter) => {
    set({
      filters: filter,
    });
  },
});
