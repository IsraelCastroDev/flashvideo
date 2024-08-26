import styles from "./AsideSearchResult.module.css";
import { NavLink } from "react-router-dom";

interface Props {
  query: string;
}

function AsideSeachResult({ query }: Props) {
  return (
    <aside className="md:w-1/3">
      <div className="bg-sky-500 text-white p-2">
        <h2 className="font-bold md:text-xl">Resultado de la búsqueda</h2>
      </div>

      <div className="border shadow">
        <ul
          className={`flex md:flex-col items-center md:items-start gap-5 md:gap-0 overflow-x-scroll py-2 px-3 md:px-0 md:py-0 ${styles["custom-scroll"]} font-bold w-full`}
        >
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full cursor-pointer">
            <NavLink
              to={`/search/tv?query=${query}`}
              className={({ isActive }) =>
                `block w-full h-full ${isActive ? "md:bg-gray-300" : ""} md:p-3`
              }
            >
              Series
            </NavLink>
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full cursor-pointer">
            <NavLink
              to={`/search/movie?query=${query}`}
              className={({ isActive }) =>
                `block h-full w-full ${isActive ? "md:bg-gray-300" : ""} md:p-3`
              }
            >
              Películas
            </NavLink>
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full cursor-pointer">
            <NavLink
              to={`/search/collection?query=${query}`}
              className={({ isActive }) =>
                `block h-full w-full ${isActive ? "md:bg-gray-300" : ""} md:p-3`
              }
            >
              Colecciones
            </NavLink>
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full cursor-pointer">
            <NavLink
              to={`/search/keyword?query=${query}`}
              className={({ isActive }) =>
                `block h-full w-full ${isActive ? "md:bg-gray-300" : ""} md:p-3`
              }
            >
              Palabras Claves
            </NavLink>
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full cursor-pointer">
            <NavLink
              to={`/search/person?query=${query}`}
              className={({ isActive }) =>
                `block h-full w-full ${isActive ? "md:bg-gray-300" : ""} md:p-3`
              }
            >
              Gente
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default AsideSeachResult;
