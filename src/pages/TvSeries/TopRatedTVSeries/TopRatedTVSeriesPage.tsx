import { toast } from "react-toastify";
import Loader from "../../../components/ui/Loader/Loader";
import { useFilterTopRatedTVSeries } from "../../../hooks/filters/useFiltersTVSeries";
import { useTVSerie } from "../../../hooks/tvserie/useTVSerie";
import TVSerieCard from "../../../components/PageComponents/TVSerie/TVSerieCard";

function TopRatedTVSeriesPage() {
  const { topRatedTVSeriesQuery } = useTVSerie();
  const { data: topRatedTVSeries, isLoading, isError } = topRatedTVSeriesQuery;

  const { filteredTopRatedTvSeries } = useFilterTopRatedTVSeries(
    topRatedTVSeries?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredTopRatedTvSeries && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredTopRatedTvSeries.length > 0 ? (
            filteredTopRatedTvSeries.map((tvSerie) => {
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
export default TopRatedTVSeriesPage;
