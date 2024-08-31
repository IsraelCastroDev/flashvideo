import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header/Header";
import { GreaterThenIcon } from "../components/ui/Icons";

function LayoutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row gap-4 px-4 md:px-10 py-2 md:py-7">
        <aside className="md:mas-w-1/5">
          <div className="w-full shadow h-auto">
            <div className="flex items-center justify-between border border-b-gray-600 p-2 md:p-3 cursor-pointer">
              <h2 className="font-bold text-2xl">Ordenar</h2>
              <div>
                <GreaterThenIcon />
              </div>
            </div>

            <div className="p-2 md:p-3 ">
              <h3>Ordenar resultados por</h3>
              <select
                name=""
                id=""
                className="w-full bg-gray-300 text-gray-800 font-semibold"
              >
                <option value="">Fecha de estreno descendente</option>
                <option value="">Fecha de estreno ascendente</option>
                <option value="">Título (a-z)</option>
                <option value="">Título (z-a)</option>
              </select>
            </div>
          </div>
        </aside>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutPage;
