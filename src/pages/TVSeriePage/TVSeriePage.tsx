import { useParams } from "react-router-dom";
import RelatedInformationAboutTVSerie from "../../components/TVSerie/RelatedInformationAboutTVSerie";
import TVSerieDetails from "../../components/TVSerie/TVSerieDetails";
import { useTVSerie } from "../../hooks/tvserie/useTVSerie";
import Loader from "../../components/ui/Loader/Loader";
import { toast } from "react-toastify";
import { useTVSerieDetails } from "../../hooks/tvserie/useTVSerieDetails";

function TVSeriePage() {
  const params = useParams<{ id: string }>();
  const idParam = params.id?.split("-")[0];
  const id = idParam ? Number(idParam) : 0;

  // Queries
  const { tvSerieQuery } = useTVSerie(id);
  const {
    tvSerieCreditsQuery,
    tvSerieVideosQuery,
    tvSerieRecommendationsQuery,
    tvSerieKeywordsQuery,
  } = useTVSerieDetails(id);

  // data
  const {
    data: tvSerieResult,
    isLoading: isLoadingTVSerie,
    isError: isErrorTVSerie,
  } = tvSerieQuery;

  const {
    data: tvSerieCreditsResult,
    isLoading: isLoadingTVSerieCredits,
    isError: isErrorTVSerieCredits,
  } = tvSerieCreditsQuery;

  const {
    data: tvSerieVideosResult,
    isLoading: isLoadingTVSerieVideos,
    isError: isErrorTVSerieVideos,
  } = tvSerieVideosQuery;

  const {
    data: tvSerieRecommendationsResult,
    isLoading: isLoadingTVSerieRecommendations,
    isError: isErrorTVSerieRecommendations,
  } = tvSerieRecommendationsQuery;

  const {
    data: tvSerieKeywordsResult,
    isLoading: isLoadingTVSerieKeywords,
    isError: isErrorTVSerieKeywords,
  } = tvSerieKeywordsQuery;

  if (
    isLoadingTVSerie ||
    isLoadingTVSerieCredits ||
    isLoadingTVSerieVideos ||
    isLoadingTVSerieRecommendations ||
    isLoadingTVSerieKeywords
  )
    return <Loader />;
  if (
    isErrorTVSerie ||
    isErrorTVSerieCredits ||
    isErrorTVSerieVideos ||
    isErrorTVSerieRecommendations ||
    isErrorTVSerieKeywords
  )
    return toast.error("No se pudo cargar la información");

  return (
    <>
      {tvSerieResult && tvSerieCreditsResult && tvSerieVideosResult && (
        <TVSerieDetails
          tvSerie={tvSerieResult}
          tvSerieCredits={tvSerieCreditsResult}
          tvSerieVideos={tvSerieVideosResult.results}
          key={tvSerieResult?.id}
        />
      )}

      {tvSerieCreditsResult &&
        tvSerieRecommendationsResult &&
        tvSerieKeywordsResult && (
          <RelatedInformationAboutTVSerie
            tvSerieCredits={tvSerieCreditsResult}
            tvSerieRecommendations={tvSerieRecommendationsResult}
            tvSerieKweywords={tvSerieKeywordsResult}
          />
        )}
    </>
  );
}
export default TVSeriePage;
