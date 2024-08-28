import { toast } from "react-toastify";
import MovieDetails from "../../components/PageComponents/Movie/MovieDetails";
import RelatedInformationAboutMovie from "../../components/PageComponents/Movie/RelatedInformationAboutMovie";
import { useCollection } from "../../hooks/collection/useCollection";
import Loader from "../../components/ui/Loader/Loader";
import { useParams } from "react-router-dom";

function CollectionPage() {
  const { id } = useParams<{ id?: string }>();
  const idMovieSplit = id?.split("-")[0];

  const movieId = idMovieSplit !== undefined ? Number(idMovieSplit) : 0;

  const { collectionQuery } = useCollection(movieId);

  const {
    data: collectionData,
    isLoading: isLoadingCollection,
    isError: isErrorCollection,
  } = collectionQuery;

  if (isLoadingCollection) return <Loader />;
  if (isErrorCollection)
    return toast.error("No se ha podido cargar la colección");
  if (!collectionData)
    return toast.error("No se ha podido cargar la colección");

  return (
    <>
      {collectionData && (
        <>
          <MovieDetails movie={collectionData} />

          <RelatedInformationAboutMovie movie={collectionData} />
        </>
      )}
    </>
  );
}
export default CollectionPage;
