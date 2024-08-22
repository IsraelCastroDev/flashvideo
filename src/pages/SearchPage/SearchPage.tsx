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
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {searchResult?.results.map((res) => {
            if (isMovie(res)) {
              return (
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

                  <div>
                    <p className="truncate">{res.overview}</p>
                  </div>
                </li>
              );
            } else if (isPerson(res)) {
              return (
                <li key={res.id}>
                  <div>
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                        res.profile_path
                      }`}
                      alt=""
                    />
                  </div>
                  <h2>{res.name}</h2>
                  <p>{res.also_known_as?.map((name) => name)}</p>
                </li>
              );
            } else {
              return <li key={res.id}>{res.name}</li>;
            }
          })}
        </ul>
      </section>
    </>
  );
}
export default SearhPage;
