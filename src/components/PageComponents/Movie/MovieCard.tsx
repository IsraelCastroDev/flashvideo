import { Link, useLocation } from "react-router-dom";
import { convertStringToSlug, formatDate } from "../../../helpers";
import { Movie } from "../../../types";
import { ImageIcon } from "../../ui/Icons";
import { useMemo } from "react";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  const pathName = useLocation().pathname;
  const isSearchPage = useMemo(() => pathName === "/movie", [pathName]);

  return (
    <li
      key={movie.id}
      className={`flex items-center ${
        isSearchPage ? "flex-col" : ""
      } gap-2 w-full shadow-md md:py-3`}
    >
      <div
        className={`flex items-center ${
          isSearchPage ? "" : "justify-center w-1/4 "
        }`}
      >
        <Link to={`/movie/${movie.id}-${convertStringToSlug(movie.title!)}`}>
          {movie.poster_path !== null ? (
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/w300${movie.poster_path}`}
              alt={movie.name!}
              className={`block object-cover ${
                isSearchPage ? "w-full" : "w-30 h-44"
              }`}
            />
          ) : (
            <ImageIcon classname="fill-gray-500" width="10rem" height="14rem" />
          )}
        </Link>
      </div>

      <div className="w-3/4">
        <div>
          <Link to={`/movie/${movie.id}-${convertStringToSlug(movie.title!)}`}>
            <h2 className="font-bold text-lg">{movie.title}</h2>
          </Link>
          <small className="text-gray-500">
            {formatDate(movie.release_date!)}
          </small>
        </div>

        {!isSearchPage && (
          <div>
            <p className="truncate-text text-gray-500">{movie.overview}</p>
          </div>
        )}
      </div>
    </li>
  );
}
export default MovieCard;
