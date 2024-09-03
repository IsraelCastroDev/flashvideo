import { toast } from "react-toastify";
import TVSerieCard from "@components/PageComponents/TVSerie/TVSerieCard";
import Loader from "@components/ui/Loader/Loader";
import { useFilterAiringTodayTVSeries } from "../../../hooks/filters/useFiltersTVSeries";
import { useTVSerie } from "../../../hooks/tvserie/useTVSerie";

function AiringTodayTVSeriesPage() {
  const { airingTodayTVSeriesQuery } = useTVSerie();
  const {
    data: airingTodayTVSeries,
    isLoading,
    isError,
  } = airingTodayTVSeriesQuery;

  const { filteredUpcomingTvSeries } = useFilterAiringTodayTVSeries(
    airingTodayTVSeries?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredUpcomingTvSeries && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredUpcomingTvSeries.length > 0 ? (
            filteredUpcomingTvSeries.map((tvSerie) => {
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
export default AiringTodayTVSeriesPage;
