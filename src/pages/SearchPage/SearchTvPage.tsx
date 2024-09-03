import { useParams } from "react-router-dom";
import { useSearch } from "@/hooks/search/useSearch";
import Loader from "@components/ui/Loader/Loader";
import { toast } from "react-toastify";
import SearchResults from "@components/PageComponents/Search/SearchResults";

function SearchTvPage() {
  const queryParam = useParams().search;
  const query = queryParam?.split("=")[1];

  const { tvSearchQuery } = useSearch(query!);

  const {
    data: tvSearchResult,
    isLoading: isLoadingTVSearch,
    isError: isErrorTVSearch,
  } = tvSearchQuery;

  if (isLoadingTVSearch) return <Loader />;
  if (isErrorTVSearch) toast.error("Ocurrió un error al cargar la información");
  if (!tvSearchResult) return <p>No se encontró la información</p>;

  return (
    <ul className="flex flex-col gap-4 md:w-2/3">
      {tvSearchResult.results.length > 0 ? (
        <SearchResults searchResult={tvSearchResult} />
      ) : (
        <div className="h-[calc(100vh-237px)]">
          <p className="text-lg font-bold">No se encontraron resultados.</p>
        </div>
      )}
    </ul>
  );
}
export default SearchTvPage;
