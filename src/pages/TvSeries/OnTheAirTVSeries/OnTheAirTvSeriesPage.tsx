import { toast } from "react-toastify";
import TVSerieCard from "@components/PageComponents/TVSerie/TVSerieCard";
import Loader from "@components/ui/Loader/Loader";
import { useFiltersOnTheAirTVSeries } from "@/hooks/filters/useFiltersTVSeries";
import { useTVSerie } from "@/hooks/tvserie/useTVSerie";

function OnTheAirTvSeriesPage() {
  const { airingTodayTVSeriesQuery } = useTVSerie();
  const {
    data: airingTodayTVSeries,
    isLoading,
    isError,
  } = airingTodayTVSeriesQuery;

  const { filteredOnTheAirTvSeries } = useFiltersOnTheAirTVSeries(
    airingTodayTVSeries?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredOnTheAirTvSeries && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredOnTheAirTvSeries.length > 0 ? (
            filteredOnTheAirTvSeries.map((tvSerie) => {
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
export default OnTheAirTvSeriesPage;
