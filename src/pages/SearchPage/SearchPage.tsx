import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import { useSearch } from "../../hooks/search/useSearch";
import SearchResults from "../../components/PageComponents/Search/SearchResults";

function SearhPage() {
  const queryParam = useLocation().search;
  const query = queryParam.split("=")[1];

  const { searchQuery } = useSearch(query);

  const {
    data: searchResult,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = searchQuery;

  if (isLoadingSearch) return <Loader />;
  if (isErrorSearch) toast.error("Ocurrió un error al cargar la información");
  if (!searchResult) return <p>No se encontró la información</p>;

  return (
    <>
      <ul className="flex flex-col gap-4 md:w-2/3">
        {searchResult.results ? (
          <SearchResults searchResult={searchResult} />
        ) : (
          <div className="h-[calc(100vh-237px)]">
            <p className="text-lg font-bold">No se encontraron resultados.</p>
          </div>
        )}
      </ul>
    </>
  );
}
export default SearhPage;
