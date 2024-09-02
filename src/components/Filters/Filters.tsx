import { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { GreaterThenIcon } from "../ui/Icons";

function Filters() {
  const genres = useAppStore((state) => state.genres);
  const changeSelectedGenre = useAppStore(
    (state) => state.changeSelectedGenreFilterId
  );

  const changeSort = useAppStore((state) => state.changeSort);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const [sortingOption, setSortingOption] = useState<string | null>(null);

  const handleOpen = (option: string) => {
    setSortingOption((prev) => (prev === option ? null : option));
  };

  const handleSelectGenre = (genre: string | null) => {
    setSelectedGenre((prevGenre) => (prevGenre === genre ? null : genre));
  };

  const handleChangeFilter = (genre: number | null) => {
    if (genre === null) {
      changeSelectedGenre(null);
    } else {
      changeSelectedGenre(genre);
    }
  };

  return (
    <aside className="md:w-2/5 space-y-5">
      <h1 className="text-3xl font-bold">Películas populares</h1>
      <div className="space-y-5">
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
              sortingOption === "order" ? "block" : "hidden"
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

        <div className="w-full h-full">
          <div
            onClick={() => handleOpen("filter")}
            className="flex items-center justify-between border border-b-gray-200 p-2 md:p-3 cursor-pointer shadow"
          >
            <h2 className="font-bold text-2xl">Filtros</h2>
            <div
              className={`transition-transform duration-500 ${
                sortingOption === "filter" ? "rotate-90" : "rotate-0"
              }`}
            >
              <GreaterThenIcon />
            </div>
          </div>

          <div
            className={`p-2 md:p-3 space-y-2 shadow ${
              sortingOption === "filter" ? "block" : "hidden"
            } transition-opacity duration-500`}
          >
            <div>
              <h3 className="text-gray-600">Géneros</h3>

              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => {
                    handleChangeFilter(null);
                    handleSelectGenre(null);
                  }}
                  className={`px-2 py-1 border border-gray-400 rounded-full hover:bg-sky-500 hover:text-white ${
                    selectedGenre === null ? "bg-sky-500 text-white" : ""
                  } cursor-pointer disabled:cursor-default`}
                  disabled={selectedGenre === null}
                >
                  Todos
                </button>
                {genres.map((genre) => (
                  <button
                    onClick={() => {
                      handleSelectGenre(genre.name);
                      handleChangeFilter(genre.id);
                    }}
                    key={genre.id}
                    className={`px-2 py-1 border border-gray-400 rounded-full hover:bg-sky-500 ${
                      selectedGenre === genre.name
                        ? "bg-sky-500 text-white"
                        : ""
                    } hover:text-white cursor-pointer disabled:cursor-default`}
                    disabled={selectedGenre === genre.name}
                  >
                    <small>{genre.name}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Filters;
