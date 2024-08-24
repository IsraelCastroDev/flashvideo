import { useParams } from "react-router-dom";
import { useSearch } from "../../hooks/search/useSearch";
import { Movie, Person, SearchResult } from "../../types";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import SearchResults from "../../components/Search/SearchResults";

function SearchMoviePage() {
  const queryParam = useParams().search;
  const query = queryParam?.split("=")[1];

  const { movieSearchQuery } = useSearch(query!);

  const {
    data: movieSearchResult,
    isLoading: isLoadingMovieSearch,
    isError: isErrorMovieSearch,
  } = movieSearchQuery;

  const isMovie = (item: SearchResult): item is Movie => {
    return "original_title" in item; // devuelve true o false
  };

  const isPerson = (item: SearchResult): item is Person => {
    return "profile_path" in item;
  };

  if (isLoadingMovieSearch) return <Loader />;
  if (isErrorMovieSearch)
    toast.error("Ocurrió un error al cargar la información");
  if (!movieSearchResult) return <p>No se encontró la información</p>;

  return (
    <ul className="flex flex-col gap-4 md:w-2/3">
      {movieSearchResult.results.length > 0 ? (
        <SearchResults
          searchResult={movieSearchResult}
          isMovie={isMovie}
          isPerson={isPerson}
        />
      ) : (
        <div className="h-[calc(100vh-237px)]">
          <p className="text-lg font-bold">No se encontraron resultados.</p>
        </div>
      )}
    </ul>
  );
}
export default SearchMoviePage;
