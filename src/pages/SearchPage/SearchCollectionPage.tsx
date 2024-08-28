import { useLocation } from "react-router-dom";
import { useSearch } from "../../hooks/search/useSearch";
import Loader from "../../components/ui/Loader/Loader";
import { toast } from "react-toastify";
import SearchResults from "../../components/PageComponents/Search/SearchResults";

function SearchCollection() {
  const queryParam = useLocation().search;
  const query = queryParam.split("=")[1];

  const { collectionSearchQuery } = useSearch(query);

  const {
    data: collectionSearchResult,
    isLoading: isLoadingCollectionSearch,
    isError: isErrorCollectionSearch,
  } = collectionSearchQuery;

  if (isLoadingCollectionSearch) return <Loader />;
  if (isErrorCollectionSearch)
    toast.error("Ocurrió un error al cargar la información");
  if (!collectionSearchResult) return <p>No se encontró la información</p>;

  return (
    <ul className="flex flex-col gap-4 md:w-2/3">
      {collectionSearchResult.results.length > 0 ? (
        <SearchResults searchResult={collectionSearchResult} />
      ) : (
        <div className="h-[calc(100vh-237px)]">
          <p className="text-lg font-bold">No se encontraron resultados.</p>
        </div>
      )}
    </ul>
  );
}
export default SearchCollection;
