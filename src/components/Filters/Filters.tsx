import { useAppStore } from "../../store/useAppStore";
import { GreaterThenIcon } from "../ui/Icons";

function Filters() {
  const changeFilter = useAppStore((state) => state.changeFilter);

  return (
    <aside className="md:mas-w-1/5">
      <div className="w-full shadow h-auto">
        <div className="flex items-center justify-between border border-b-gray-600 p-2 md:p-3 cursor-pointer">
          <h2 className="font-bold text-2xl">Ordenar</h2>
          <div>
            <GreaterThenIcon />
          </div>
        </div>

        <div className="p-2 md:p-3 ">
          <label htmlFor="order">Ordenar resultados por</label>
          <select
            onChange={(e) => changeFilter(e.target.value)}
            name="order"
            id="order"
            className="w-full bg-gray-300 text-gray-800 font-semibold"
          >
            <option value="releaseDateDesc">
              Fecha de estreno descendente
            </option>
            <option value="releaseDateAsc">Fecha de estreno ascendente</option>
            <option value="titleAZ">Título (a-z)</option>
            <option value="titleZA">Título (z-a)</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
export default Filters;
