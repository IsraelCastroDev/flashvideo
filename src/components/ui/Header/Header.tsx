import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import SearchHome from "./SearchHome";
import Search from "./Search";
import { MenuIcon, SearchIcon } from "../Icons";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSearchPage = location.pathname.split("/")[1] === "search";

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpen = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

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
                    className={`${styles["menu-item"]} font-bold text-xl cursor-pointer`}
                  >
                    Películas
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "movieOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li className="font-bold text-lg cursor-pointer">
                        <Link to={"/movie"}>Popular</Link>
                      </li>
                      <li className="font-bold text-lg cursor-pointer">
                        <Link to={"/movie/upcoming"}>Próximos estrenos</Link>
                      </li>
                      <li className="font-bold text-lg cursor-pointer">
                        <Link to={"/movie/top-rated"}>Mejor puntuadas</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <li
                    onClick={() => handleOpen("serieOpen")}
                    className="font-bold text-xl cursor-pointer"
                  >
                    Series
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "serieOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li className="font-bold text-xl cursor-pointer">
                        Cines
                      </li>
                      <li className="font-bold text-xl cursor-pointer">TV</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <li
                    onClick={() => handleOpen("peopleOpen")}
                    className="font-bold text-xl cursor-pointer"
                  >
                    Gente
                  </li>
                  <div
                    className={`${styles.submenu} ${
                      openMenu === "peopleOpen" ? "" : "hidden"
                    } text-gray-800`}
                  >
                    <ul>
                      <li className="font-bold text-xl cursor-pointer">
                        Cines
                      </li>
                      <li className="font-bold text-xl cursor-pointer">TV</li>
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
      {isSearchPage && <Search />}
    </>
  );
}

export default Header;
