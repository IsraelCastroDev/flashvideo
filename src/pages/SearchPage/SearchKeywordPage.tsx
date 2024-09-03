import { useParams } from "react-router-dom";
import { useSearch } from "@/hooks/search/useSearch";
import { toast } from "react-toastify";
import Loader from "@components/ui/Loader/Loader";

function SearchKeywordPage() {
  const queryParam = useParams().search;
  const query = queryParam?.split("=")[1];

  const { keywordSearchQuery } = useSearch(query!);

  const {
    data: keywordSearchResult,
    isLoading: isLoadingTVSearch,
    isError: isErrorTVSearch,
  } = keywordSearchQuery;

  if (isLoadingTVSearch) return <Loader />;
  if (isErrorTVSearch) toast.error("Ocurrió un error al cargar la información");
  if (!keywordSearchResult) return <p>No se encontró la información</p>;

  return (
    <ul className="flex flex-col gap-4 md:w-2/3">
      {keywordSearchResult.results.length > 0 ? (
        keywordSearchResult.results.map((keyword) => (
          <li key={keyword.id} className="bg-gray-300 p-4">
            <p className="font-semibold">{keyword.name}</p>
          </li>
        ))
      ) : (
        <div className="h-[calc(100vh-237px)]">
          <p className="text-lg font-bold">No se encontraron resultados.</p>
        </div>
      )}
    </ul>
  );
}
export default SearchKeywordPage;
