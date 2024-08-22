import { Link, useLocation } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../ui/Icons";
import styles from "./Header.module.css";
import SearchHome from "./SearchHome";
import Search from "./Search";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSearchPage = location.pathname.split("/")[1] === "search";

  return (
    <header className={`${!isHome ? "sticky top-0" : ""} text-white z-10`}>
      <div className="flex items-center justify-between gap-1 bg-sky-950 py-5 md:py-1 px-4 md:px-10 sticky top-0 z-20">
        <div className="flex items-center gap-4 md:flex-row-reverse">
          <label htmlFor="btn-menu" className="cursor-pointer block md:hidden">
            <MenuIcon />
          </label>
          <input type="checkbox" id="btn-menu" hidden />
          <nav className={`${styles.nav__menu} bg-sky-950 z-50`}>
            <ul className="flex flex-col md:flex-row justify-center md:items-center gap-4">
              <Link
                to="/peliculas"
                className="font-bold text-xl md:text-[1rem]"
              >
                Películas
              </Link>
              <Link to="/series" className="font-bold text-xl md:text-[1rem]">
                Series
              </Link>
              <Link to="/gente" className="font-bold text-xl md:text-[1rem]">
                Gente
              </Link>
            </ul>
          </nav>

          <Link to={"/"}>
            <h1 className="text-2xl md:text-2xl font-black">Flash Video</h1>
          </Link>
        </div>

        <button>
          <SearchIcon classname="fill-emerald-500" />
        </button>
      </div>

      {isHome && <SearchHome />}
      {isSearchPage && <Search />}
    </header>
  );
}
export default Header;
