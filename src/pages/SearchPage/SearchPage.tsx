import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import { useSearch } from "../../hooks/search/useSearch";
import { Movie, Person, SearchResult } from "../../types";
import { formatDate } from "../../helpers";

function SearhPage() {
  const queryParam = useLocation().search;
  const query = queryParam.split("=")[1];

  const { searchQuery } = useSearch(query);
  const {
    data: searchResult,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = searchQuery;

  const isMovie = (item: SearchResult): item is Movie => {
    return "original_title" in item; // devuelve true o false
  };

  const isPerson = (item: SearchResult): item is Person => {
    return "birthday" in item;
  };

  if (isLoadingSearch) return <Loader />;
  if (isErrorSearch) toast.error("Ocurrió un error al cargar la información");
  if (!searchResult) return <p>No se encontró la información</p>;
  console.log(searchResult);

  return (
    <>
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {searchResult?.results.map((res) => {
            if (isMovie(res)) {
              return (
                <>
                  <li key={res.id} className="flex flex-col gap-2">
                    <div className="w-full">
                      <img
                        src={`${
                          import.meta.env.VITE_IMAGE_URL
                        }/w300${res.poster_path!}`}
                        alt={res.name!}
                        className="block object-cover w-full"
                      />
                    </div>

                    <div>
                      <p>{res.title}</p>
                      <small>{formatDate(res.release_date!)}</small>
                    </div>
                  </li>
                </>
              );
            } else if (isPerson(res)) {
              return (
                <li key={res.id}>
                  <div className="w-full">
                    {res.profile_path !== null ? (
                      <img
                        src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                          res.profile_path
                        }`}
                        alt={res.name!}
                        className="block object-cover w-full"
                      />
                    ) : (
                      <img
                        src={`https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg`}
                        alt={res.name!}
                        className="block object-cover w-full"
                      />
                    )}
                  </div>
                  <h2>{res.name}</h2>
                  <p>{res.also_known_as?.map((name) => name)}</p>
                </li>
              );
            } else {
              return (
                <li key={res.id}>
                  <div className="w-full">
                    {res.poster_path !== null ||
                    res.poster_path !== undefined ? (
                      <img
                        src={`${
                          import.meta.env.VITE_IMAGE_URL
                        }/w300${res.poster_path!}`}
                        alt={res.name!}
                        className="block object-cover w-full"
                      />
                    ) : (
                      <img
                        src={`https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg`}
                        alt={res.name!}
                        className="block object-cover w-full"
                      />
                    )}
                  </div>

                  <div>
                    <p>{res.original_name}</p>
                    <small>{formatDate(res.first_air_date!)}</small>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </>
  );
}
export default SearhPage;
