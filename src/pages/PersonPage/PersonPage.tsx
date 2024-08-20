import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AsidePerson from "../../components/Person/AsidePerson";
import InfoPerson from "../../components/Person/InfoPerson";
import Loader from "../../components/ui/Loader/Loader";
import { usePerson } from "../../hooks/people/usePerson";

function PersonPage() {
  const { id } = useParams<{ id: string }>();
  const personId = id ? Number(id) : 0;

  const { personQuery, movieCreditsFromPersonQuery } = usePerson(personId);

  const {
    data: person,
    isLoading: isLoadingPerson,
    isError: isErrorPerson,
  } = personQuery;
  const {
    data: movieCreditsFromPerson,
    isLoading: isLoadingMovieCreditsFromPerson,
    isError: isErrorMovieCreditsFromPerson,
  } = movieCreditsFromPersonQuery;

  if (isLoadingPerson || isLoadingMovieCreditsFromPerson) return <Loader />;
  if (isErrorPerson || isErrorMovieCreditsFromPerson)
    return toast.error("No se pudo cargar la información");

  if (!person) return <p>No se encontró la persona</p>;
  if (!movieCreditsFromPerson)
    return <p>No se encontró la información de la persona</p>;

  return (
    <>
      <AsidePerson
        person={person}
        movieCreditsFromPerson={movieCreditsFromPerson}
      />

      <InfoPerson movieCreditsFromPerson={movieCreditsFromPerson} />
    </>
  );
}
export default PersonPage;
