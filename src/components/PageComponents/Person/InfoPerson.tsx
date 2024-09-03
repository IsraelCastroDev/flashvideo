import { Link } from "react-router-dom";
import { MovieCredits } from "@/types";
import { convertStringToSlug, getYear } from "@/helpers";

interface Props {
  movieCreditsFromPerson: MovieCredits;
}

function InfoPerson({ movieCreditsFromPerson }: Props) {
  return (
    <section className="px-4 py-4 md:hidden">
      <h2 className="text-xl md:text-2xl font-semibold">Interpretacións</h2>

      <div className="mt-4">
        {movieCreditsFromPerson.cast.map((movie) => (
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
                to={`/movie/${movie.id}-${convertStringToSlug(movie.title!)}`}
                className="font-bold hover:text-sky-500"
              >
                {movie.title}
              </Link>
              <p>
                como <span>{movie.character}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default InfoPerson;
