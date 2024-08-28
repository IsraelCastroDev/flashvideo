import { Link } from "react-router-dom";
import {
  CollectionWithType,
  MovieWithType,
  MultiWithType,
  PersonWithType,
  SearchResult,
} from "../../../types";
import { ImageIcon } from "../../ui/Icons";
import { convertStringToSlug, formatDate } from "../../../helpers";

interface Props {
  searchResult: MultiWithType;
}

const isMovie = (item: SearchResult): item is MovieWithType => {
  return (item as MovieWithType).type_identifier === "movie"; // devuelve true o false
};

const isPerson = (item: SearchResult): item is PersonWithType => {
  return (item as PersonWithType).type_identifier === "person";
};

const isCollectionMovies = (item: SearchResult): item is CollectionWithType => {
  return (item as CollectionWithType).type_identifier === "collection";
};

function SearchResults({ searchResult }: Props) {
  return (
    <>
      {searchResult?.results.map((res) => {
        if (isMovie(res)) {
          return (
            <li
              key={res.id}
              className="flex items-center gap-2 w-full shadow-md md:py-3"
            >
              <div className="w-1/4 flex items-center justify-center">
                <Link
                  to={`/movie/${res.id}-${convertStringToSlug(res.title!)}`}
                >
                  {res.poster_path !== null ? (
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                        res.poster_path
                      }`}
                      alt={res.name!}
                      className="block object-cover w-30 h-44"
                    />
                  ) : (
                    <ImageIcon
                      classname="fill-gray-500"
                      width="10rem"
                      height="14rem"
                    />
                  )}
                </Link>
              </div>

              <div className="w-3/4">
                <div>
                  <Link
                    to={`/movie/${res.id}-${convertStringToSlug(res.title!)}`}
                  >
                    <h2 className="font-bold text-lg">{res.title}</h2>
                  </Link>
                  <small className="text-gray-500">
                    {formatDate(res.release_date!)}
                  </small>
                </div>

                <div>
                  <p className="truncate-text text-gray-500">{res.overview}</p>
                </div>
              </div>
            </li>
          );
        } else if (isPerson(res)) {
          return (
            <li
              key={res.id}
              className="flex items-center gap-2 w-full shadow-md md:py-3"
            >
              <div className="w-1/4 flex items-center justify-center">
                <Link
                  to={`/person/${res.id}-${convertStringToSlug(res.name!)}`}
                >
                  {res.profile_path !== null ? (
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                        res.profile_path
                      }`}
                      alt={res.name!}
                      className="block object-cover w-30 h-44"
                    />
                  ) : (
                    <ImageIcon
                      classname="fill-gray-500"
                      width="10rem"
                      height="14rem"
                    />
                  )}
                </Link>
              </div>

              <div className="w-3/4">
                <div>
                  <Link
                    to={`/person/${res.id}-${convertStringToSlug(res.name!)}`}
                  >
                    <h2 className="font-bold text-lg">{res.name}</h2>
                  </Link>
                  <small className="text-gray-500">
                    {res.also_known_as?.map((a) => a)}
                  </small>
                </div>

                <div>
                  <p className="truncate-text text-gray-500">{res.biography}</p>
                </div>
              </div>
            </li>
          );
        } else if (isCollectionMovies(res)) {
          return (
            <li
              key={res.id}
              className="flex items-center gap-2 w-full shadow-md md:py-3"
            >
              <div className="w-1/4 flex items-center justify-center">
                <Link
                  to={`/collection/${res.id}-${convertStringToSlug(
                    res.original_name!
                  )}`}
                >
                  {res.poster_path !== null ? (
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                        res.poster_path
                      }`}
                      alt={res.name!}
                      className="block object-cover w-30 h-44"
                    />
                  ) : (
                    <ImageIcon
                      classname="fill-gray-500"
                      width="10rem"
                      height="14rem"
                    />
                  )}
                </Link>
              </div>

              <div className="w-3/4">
                <div>
                  <Link
                    to={`/movie/${res.id}-${convertStringToSlug(
                      res.original_name!
                    )}`}
                  >
                    <h2 className="font-bold text-lg">{res.original_name}</h2>
                  </Link>
                  {/* <small className="text-gray-500">
                    {formatDate(res.!)}
                  </small> */}
                </div>

                <div>
                  <p className="truncate-text text-gray-500">{res.overview}</p>
                </div>
              </div>
            </li>
          );
        } else {
          return (
            <li
              key={res.id}
              className="flex items-center gap-2 w-full shadow-md md:py-3"
            >
              <div className="w-1/4 flex items-center justify-center">
                <Link to={`/tv/${res.id}-${convertStringToSlug(res.name!)}`}>
                  {res.poster_path !== null ? (
                    <img
                      src={`${
                        import.meta.env.VITE_IMAGE_URL
                      }/w300${res.poster_path!}`}
                      alt={res.name!}
                      className="block object-cover w-30 h-44"
                    />
                  ) : (
                    <ImageIcon
                      classname="fill-gray-500"
                      width="10rem"
                      height="14rem"
                    />
                  )}
                </Link>
              </div>

              <div className="w-3/4">
                <div>
                  <Link to={`/tv/${res.id}-${convertStringToSlug(res.name!)}`}>
                    <h2 className="font-bold text-lg">{res.name}</h2>
                  </Link>
                  <small className="text-gray-500">
                    {formatDate(res.first_air_date!)}
                  </small>
                </div>

                <div>
                  <p className="truncate-text text-gray-500">{res.overview}</p>
                </div>
              </div>
            </li>
          );
        }
      })}
    </>
  );
}
export default SearchResults;
