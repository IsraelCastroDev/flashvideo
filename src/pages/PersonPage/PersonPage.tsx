import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import Carousel from "../../components/ui/Carousel";
import { getYear } from "../../helpers";
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
      <section className="px-4">
        <div className="flex justify-center items-center flex-col mt-10 gap-3">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}w200${person.profile_path}`}
            alt={`Imagen de perfil de ${person.name}`}
            className="w-40 h-48 block rounded-md"
          />
          <h1 className="font-bold text-3xl">{person.name}</h1>
        </div>

        <div className="space-y-2 mt-4">
          <h2 className="text-xl font-bold">Información personal</h2>

          <div>
            <h3 className="font-bold">Fecha de nacimiento</h3>
            <p>{person.birthday}</p>
          </div>

          {person.deathday && (
            <div>
              <h3 className="font-bold">Fecha de fallecimiento</h3>
              <p>{person.deathday}</p>
            </div>
          )}

          <div>
            <h3 className="font-bold">Lugar de nacimiento</h3>
            <p>{person.place_of_birth}</p>
          </div>

          <div>
            <h3 className="font-bold">Biografía</h3>
            <p className="text-pretty">
              {person.biography === null || person.biography?.length === 0
                ? "Biografía no disponible"
                : `${person.biography}`}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 mt-4 space-y-2">
        <h2 className="text-xl font-bold">Conocido por</h2>
        <Carousel data={movieCreditsFromPerson.cast} />
      </section>

      <section className="px-4">
        <h2 className="text-xl font-bold">Interpretación</h2>

        <div className="mt-4">
          {movieCreditsFromPerson.cast.map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-6 border border-t-gray-500 py-2 last-of-type:border-b-gray-500"
            >
              <p className="font-semibold flex-initial">
                {movie.release_date ? getYear(movie.release_date) : "-----"}
              </p>
              <div>
                <h4 className="font-bold">{movie.title}</h4>
                <p>
                  como <span>{movie.character}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default PersonPage;
