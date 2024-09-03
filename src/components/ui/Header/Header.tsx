import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import SearchHome from "./SearchHome";
// import Search from "./Search";
import { MenuIcon, SearchIcon } from "../Icons";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  // const isSearchPage = location.pathname.split("/")[1] === "search";

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpen = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  useEffect(() => {
    // verifica si el click fue fuera del menu
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // recupera el elemento
      // si el click fue fuera del menu
      if (!target.closest(`.${styles.nav__menu}`)) {
        handleCloseMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-0 text-white z-10`}>
        <div className="flex items-center justify-between gap-1 bg-sky-950 py-5 md:py-1 px-4 md:px-10 z-20">
          <div className="flex items-center gap-4 md:flex-row-reverse">
            <label
              htmlFor="btn-menu"
              className="cursor-pointer block md:hidden"
            >
              <MenuIcon />
            </label>
            <input type="checkbox" id="btn-menu" hidden />
            <nav className={`${styles.nav__menu}`}>
              <ul className="flex flex-col md:flex-row justify-center md:items-center gap-4 bg-sky-950 z-50 px-4 py-5">
                <div className="relative">
                  <li
                    onClick={() => handleOpen("movieOpen")}
                    className={`${styles["menu-item"]} font-bold text-lg cursor-pointer`}
                  >
                    Películas
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "movieOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/movie"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Popular
                        </Link>
                      </li>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/movie/upcoming"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Próximos estrenos
                        </Link>
                      </li>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/movie/top-rated"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Mejor puntuadas
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <li
                    onClick={() => handleOpen("serieOpen")}
                    className="font-bold text-lg cursor-pointer"
                  >
                    Series
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "serieOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/tv"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Popular
                        </Link>
                      </li>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/tv/top-rated"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Mejor puntuadas
                        </Link>
                      </li>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/tv/airing-today"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Se emiten hoy
                        </Link>
                      </li>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/tv/airing-today"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          En televisión
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <li
                    onClick={() => handleOpen("peopleOpen")}
                    className="font-bold text-lg cursor-pointer"
                  >
                    Gente
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "peopleOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li
                        className="font-bold text-sm cursor-pointer"
                        onClick={handleCloseMenu}
                      >
                        <Link
                          to={"/person"}
                          className="w-full block hover:bg-gray-300 text-white md:text-gray-600 p-2 rounded-md"
                        >
                          Populares
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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
      </header>
      {isHome && <SearchHome />}
      {/* {isSearchPage && <Search />} */}
    </>
  );
}

export default Header;
