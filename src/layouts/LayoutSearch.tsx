import { Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header/Header";
import AsideSeachResult from "../components/Search/AsideSeachResult";
import Loader from "../components/ui/Loader/Loader";
import { useSearch } from "../hooks/search/useSearch";

function LayoutSearch() {
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
      <Header />
      <main className="flex flex-col md:flex-row gap-4 py-2 px-2">
        <AsideSeachResult query={query} />
        <Outlet />
      </main>
    </>
  );
}
export default LayoutSearch;
