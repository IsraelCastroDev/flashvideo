import { Link } from "react-router-dom";
import { MovieCredits, Person } from "../../../types";
import {
  calculateAge,
  convertStringToSlug,
  formatDate,
  getYear,
} from "../../../helpers";
import Carousel from "../../ui/Carousel";

interface Props {
  person: Person;
  movieCreditsFromPerson: MovieCredits;
}

function AsidePerson({ person, movieCreditsFromPerson }: Props) {
  return (
    <section className="px-4 md:px-10 md:flex md:gap-5">
      <aside className="md:w-1/4">
        <div className="flex justify-center items-center md:justify-start md:items-start flex-col mt-10 gap-3">
          <img
            src={`${
              person.profile_path !== null
                ? `${import.meta.env.VITE_IMAGE_URL}/w300_and_h450_bestv2${
                    person.profile_path
                  }`
                : "/img/perfil-default.jpg"
            }`}
            alt={`Imagen de perfil de ${person.name}`}
            className="block rounded-md h-42 w-36 md:h-3/4 md:w-80 object-cover"
          />
          <h1 className="font-bold text-3xl md:hidden">{person.name}</h1>
        </div>

        <div className="space-y-2 mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Información personal
          </h2>

          <div>
            <h3 className="font-semibold">Fecha de nacimiento</h3>
            <p>
              {person.birthday !== null && person.birthday !== undefined
                ? `${formatDate(person.birthday)} (${calculateAge(
                    person?.birthday
                  )} años)`
                : "Fecha de nacimiento no disponible"}
            </p>
          </div>

          {person.deathday && (
            <div>
              <h3 className="font-semibold">Fecha de fallecimiento</h3>
              <p>{person.deathday}</p>
            </div>
          )}

          <div>
            <h3 className="font-semibold">Lugar de nacimiento</h3>
            <p>
              {person.place_of_birth || "Lugar de nacimiento no disponible"}
            </p>
          </div>

          <div className="md:hidden">
            <h3 className="font-semibold">Biografía</h3>
            <p className="text-pretty">
              {person.biography || "Biografía no disponible"}
            </p>
          </div>
        </div>
      </aside>

      <div className="md:px-0 md:mt-10 space-y-2 md:w-3/4">
        <div className="space-y-4 md:space-y-4">
          <h1 className="font-bold text-3xl hidden md:block">{person.name}</h1>
          <div className="hidden md:block">
            <h3 className="font-semibold md:text-2xl">Biografía</h3>
            <p className="text-pretty">
              {person.biography || "Biografía no disponible"}
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold">Conocido por</h2>
          {movieCreditsFromPerson.cast.length > 0 ? (
            <Carousel data={movieCreditsFromPerson.cast} />
          ) : (
            <p>No se encontró la información</p>
          )}
        </div>

        <div className="px-4 py-4 hidden md:block">
          <h2 className="text-xl md:text-2xl font-bold">Interpretación</h2>

          <div className="mt-4">
            {movieCreditsFromPerson.cast.length > 0 ? (
              movieCreditsFromPerson.cast.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-6 border border-t-gray-500 py-2 last-of-type:border-b-gray-500"
                >
                  <p className="font-semibold flex-initial">
                    {movie.release_date !== ""
                      ? getYear(movie.release_date!)
                      : "-----"}
                  </p>
                  <div>
                    <Link
                      to={`/movie/${movie.id}-${convertStringToSlug(
                        movie.title!
                      )}`}
                      className="font-bold hover:text-sky-500"
                    >
                      {movie.title}
                    </Link>
                    <p>
                      como <span>{movie.character}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontró la información</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AsidePerson;
