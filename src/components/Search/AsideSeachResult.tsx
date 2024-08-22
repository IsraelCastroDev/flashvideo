import styles from "./AsideSearchResult.module.css";

function AsideSeachResult() {
  return (
    <aside className="md:w-1/3">
      <div className="bg-sky-500 text-white p-2">
        <h2 className="font-bold md:text-xl">Resultado de la búsqueda</h2>
      </div>

      <div className="border shadow">
        <ul
          className={`flex md:flex-col items-center md:items-start gap-5 md:gap-0 overflow-x-scroll py-2 px-3 md:px-0 md:py-0 ${styles["custom-scroll"]} font-bold`}
        >
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Series
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Películas
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Colecciones
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Palabras Claves
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Gente
          </li>
          <li className="whitespace-nowrap md:hover:bg-gray-300 w-full h-full md:p-3">
            Compañías
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default AsideSeachResult;
