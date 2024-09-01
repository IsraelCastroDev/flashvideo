import { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { GreaterThenIcon } from "../ui/Icons";

function Filters() {
  const changeSort = useAppStore((state) => state.changeSort);
  const [sortingOption, setSortingOption] = useState<string | null>(null);

  const handleOpen = (option: string) => {
    setSortingOption((prev) => (prev === option ? null : option));
  };

  return (
    <aside className="md:w-2/5 space-y-5">
      <h1 className="text-3xl font-bold">Películas populares</h1>
      <div>
        <div className="w-full h-auto">
          <div
            onClick={() => handleOpen("order")}
            className="flex items-center justify-between border border-b-gray-200 p-2 md:p-3 cursor-pointer shadow"
          >
            <h2 className="font-bold text-2xl">Ordenar</h2>
            <div
              className={`transition-transform duration-500 ${
                sortingOption === "order" ? "rotate-90" : "rotate-0"
              }`}
            >
              <GreaterThenIcon />
            </div>
          </div>

          <div
            className={`p-2 md:p-3 space-y-2 shadow ${
              sortingOption ? "block" : "hidden"
            } transition-opacity duration-500`}
          >
            <label htmlFor="order">Ordenar resultados por</label>
            <select
              onChange={(e) => changeSort(e.target.value)}
              name="order"
              id="order"
              className={`w-full bg-gray-300 text-gray-800 font-semibold p-2 outline-none`}
            >
              <option value="releaseDateDesc">
                Fecha de estreno descendente
              </option>
              <option value="releaseDateAsc">
                Fecha de estreno ascendente
              </option>
              <option value="titleAZ">Título (a-z)</option>
              <option value="titleZA">Título (z-a)</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Filters;
