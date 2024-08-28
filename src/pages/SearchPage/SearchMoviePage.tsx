import { useParams } from "react-router-dom";
import { useSearch } from "../../hooks/search/useSearch";
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

  if (isLoadingMovieSearch) return <Loader />;
  if (isErrorMovieSearch)
    toast.error("Ocurrió un error al cargar la información");
  if (!movieSearchResult) return <p>No se encontró la información</p>;

  return (
    <ul className="flex flex-col gap-4 md:w-2/3">
      {movieSearchResult && movieSearchResult.results.length > 0 ? (
        <SearchResults searchResult={movieSearchResult} />
      ) : (
        <div className="h-[calc(100vh-237px)]">
          <p className="text-lg font-bold">No se encontraron resultados.</p>
        </div>
      )}
    </ul>
  );
}
export default SearchMoviePage;
