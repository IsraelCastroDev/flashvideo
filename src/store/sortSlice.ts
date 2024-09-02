import { StateCreator } from "zustand";

export type FiltersSliceType = {
  sort: string;
  changeSort: (filter: string) => void;
};

export const sortSlice: StateCreator<FiltersSliceType> = (set) => ({
  sort: "releaseDateDesc",
  changeSort: (filter) => {
    set({ sort: filter });
  },
});
