import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import { useSearch } from "../../hooks/search/useSearch";
import { Movie, Person, SearchResult } from "../../types";
import SearchResults from "../../components/Search/SearchResults";
import AsideSeachResult from "../../components/Search/AsideSeachResult";

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

  return (
    <>
      <section className="flex flex-col md:flex-row gap-5">
        <AsideSeachResult />

        <ul className="flex flex-col gap-4 md:w-2/3">
          {searchResult.results.length > 0 ? (
            <SearchResults
              searchResult={searchResult}
              isMovie={isMovie}
              isPerson={isPerson}
            />
          ) : (
            <div className="h-[calc(100vh-237px)]">
              <p className="text-lg font-bold">No se encontraron resultados.</p>
            </div>
          )}
        </ul>
      </section>
    </>
  );
}
export default SearhPage;
