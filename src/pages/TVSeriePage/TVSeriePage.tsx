import { useLocation } from "react-router-dom";
import RelatedInformationAboutTVSerie from "../../components/TVSerie/RelatedInformationAboutTVSerie";
import TVSerieDetails from "../../components/TVSerie/TVSerieDetails";
// import { useTVSerie } from "../../hooks/tvserie/useTVSerie";

function TVSeriePage() {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);

  return (
    <>
      <TVSerieDetails />
      <RelatedInformationAboutTVSerie />
    </>
  );
}
export default TVSeriePage;
