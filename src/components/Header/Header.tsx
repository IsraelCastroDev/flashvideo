import { Link, useLocation } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../ui/Icons";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="text-white">
      <div className="flex items-center justify-between gap-1 bg-sky-950 py-5 px-4">
        <label htmlFor="btn-menu" className="cursor-pointer block">
          <MenuIcon />
        </label>
        <input type="checkbox" id="btn-menu" hidden />
        <nav className={`${styles.nav__menu} bg-sky-950 z-50`}>
          <ul className="flex flex-col justify-center gap-4">
            <Link to="/peliculas" className="font-bold text-xl">
              Películas
            </Link>
            <Link to="/series" className="font-bold text-xl">
              Series
            </Link>
            <Link to="/gente" className="font-bold text-xl">
              Gente
            </Link>
          </ul>
        </nav>

        <Link to={"/"}>
          <h1 className="text-2xl font-black">Flash Video</h1>
        </Link>

        <button>
          <SearchIcon classname="fill-emerald-500" />
        </button>
      </div>

      {isHome && (
        <>
          <div className="bg-bg-image bg-center bg-cover bg-no-repeat min-h-72 max-h-80">
            <div className="p-5 space-y-2">
              <div>
                <h2 className="text-5xl font-black">Te damos la bienvenida.</h2>
                <h3 className="text-3xl font-bold">
                  Millones de películas, series y gente por descubrir. Explora
                  ya.
                </h3>
              </div>

              <div className="bg-white flex justify-between h-12 rounded-full">
                <input
                  type="text"
                  className="outline-none bg-transparent text-gray-700 placeholder:text-gray-400 h-full px-3"
                  placeholder="Buscar..."
                />
                <button className="bg-emerald-500 h-full px-7 rounded-full font-bold">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
