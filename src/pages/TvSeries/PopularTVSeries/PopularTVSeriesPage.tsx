import { toast } from "react-toastify";
import Loader from "@components/ui/Loader/Loader";
import { useFilterPopularTVSeries } from "../../../hooks/filters/useFiltersTVSeries";
import { useTVSerie } from "../../../hooks/tvserie/useTVSerie";
import TVSerieCard from "@components/PageComponents/TVSerie/TVSerieCard";

function PopularTVSeriePage() {
  const { popularTVSerieQuery } = useTVSerie();
  const { data: popularTVSeries, isLoading, isError } = popularTVSerieQuery;

  const { filteredPopularTvSeries } = useFilterPopularTVSeries(
    popularTVSeries?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredPopularTvSeries && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredPopularTvSeries.length > 0 ? (
            filteredPopularTvSeries.map((tvSerie) => {
              return <TVSerieCard tvSerie={tvSerie} key={tvSerie.id} />;
            })
          ) : (
            <li>No se encontró la información</li>
          )}
        </ul>
      )}
    </section>
  );
}
export default PopularTVSeriePage;
