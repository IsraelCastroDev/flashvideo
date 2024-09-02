import { Link, useLocation } from "react-router-dom";
import { TVSerie } from "../../../types";
import { ImageIcon } from "../../ui/Icons";
import { convertStringToSlug, formatDate } from "../../../helpers";
import { useMemo } from "react";

interface Props {
  tvSerie: TVSerie;
}

function TVSerieCard({ tvSerie }: Props) {
  const pathName = useLocation().pathname;
  const isTVSeriePage = useMemo(() => pathName.startsWith("/tv"), [pathName]);

  return (
    <li
      key={tvSerie.id}
      className={`flex items-center ${
        isTVSeriePage ? "flex-col" : ""
      } gap-2 w-full shadow-md md:py-3`}
    >
      <div
        className={`flex items-center ${
          isTVSeriePage ? "" : "justify-center w-1/4 "
        }`}
      >
        <Link to={`/movie/${tvSerie.id}-${convertStringToSlug(tvSerie.name!)}`}>
          {tvSerie.poster_path !== null ? (
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                tvSerie.poster_path
              }`}
              alt={tvSerie.name!}
              className={`block object-cover ${
                isTVSeriePage ? "w-full" : "w-30 h-44"
              }`}
            />
          ) : (
            <ImageIcon classname="fill-gray-500" width="10rem" height="14rem" />
          )}
        </Link>
      </div>

      <div className="w-3/4">
        <div>
          <Link
            to={`/movie/${tvSerie.id}-${convertStringToSlug(tvSerie.name!)}`}
          >
            <h2 className="font-bold text-lg">{tvSerie.name}</h2>
          </Link>
          <small className="text-gray-500">
            {formatDate(tvSerie.first_air_date!)}
          </small>
        </div>

        {!isTVSeriePage && (
          <div>
            <p className="truncate-text text-gray-500">{tvSerie.overview}</p>
          </div>
        )}
      </div>
    </li>
  );
}
export default TVSerieCard;
