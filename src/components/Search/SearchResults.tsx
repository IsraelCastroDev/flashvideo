import { Link } from "react-router-dom";
import { convertStringToSlug, formatDate } from "../../helpers";
import { Movie, Multi, Person, SearchResult } from "../../types";
import { ImageIcon } from "../ui/Icons";

interface Props {
  searchResult: Multi;
  isMovie: (item: SearchResult) => item is Movie;
  isPerson: (item: SearchResult) => item is Person;
}

function SearchResults({ searchResult, isMovie, isPerson }: Props) {
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
        } else {
          return (
            <li
              key={res.id}
              className="flex items-center gap-2 w-full shadow-md md:py-3"
            >
              <div className="w-1/4 flex items-center justify-center">
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
              </div>

              <div className="w-3/4">
                <div>
                  <h2 className="font-bold text-lg">{res.name}</h2>
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
