import { Link } from "react-router-dom";
import {
  CollectionWithType,
  CreditsResponse,
  KeywordsResponse,
  RecommendationsResponse,
} from "@/types";
import { convertStringToSlug, formatDate } from "@/helpers";
import { ImageIcon } from "@components/ui/Icons";
import Carousel from "@components/ui/Carousel";

interface Props {
  credits?: CreditsResponse;
  recommendations?: RecommendationsResponse;
  keywords?: KeywordsResponse;
  movie?: CollectionWithType;
}

function RelatedInformationAboutMovie({
  credits,
  recommendations,
  keywords,
  movie,
}: Props) {
  return (
    <section className="px-4 md:px-10 py-2 mt-4 ">
      <div className="lg:flex">
        <div className="lg:w-2/3 md:space-y-3">
          {credits && (
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Reparto</h3>
              <div className="mt-2">
                {credits.cast.length > 0 ? (
                  <Carousel data={credits?.cast} />
                ) : (
                  <p>No hay reparto</p>
                )}
              </div>
            </div>
          )}

          {recommendations && (
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Recomendaciones</h3>
              <div className="mt-2">
                {/* movies recommendations */}
                {recommendations.results.length > 0 ? (
                  <Carousel data={recommendations.results} />
                ) : (
                  <p>No hay recomendaciones</p>
                )}
              </div>
            </div>
          )}
        </div>

        {keywords && (
          <aside className="lg:w-1/3 lg:pl-4 shadow-box-shadow-left shadow-box-shadow">
            <h3 className="text-xl font-bold md:text-2xl">Palabras claves</h3>

            <div className="flex w-full flex-wrap justify-start gap-2 mt-2">
              {keywords.keywords.length === 0 && (
                <p className="w-full text-gray-800">
                  No se encontraron palabras claves
                </p>
              )}
              {keywords?.keywords.map((keyword) => (
                <div
                  key={keyword.id}
                  className="bg-gray-300 px-2 py-1 rounded-md"
                >
                  <p className="font-semibold text-sm md:font-bold">
                    {keyword.name}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
      {movie && (
        <div>
          <h3 className="text-xl font-bold md:text-2xl">
            {movie.parts?.length} películas
          </h3>

          <div>
            <ul className="py-4">
              {movie?.parts?.map((res) => (
                <li
                  key={res.id}
                  className="flex items-center gap-2 w-full shadow-md md:py-3"
                >
                  <div className="w-1/4 flex justify-center items-center">
                    <Link
                      to={`/movie/${res.id}-${convertStringToSlug(res.title!)}`}
                    >
                      {res.poster_path !== null ? (
                        <img
                          src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                            res.poster_path
                          }`}
                          alt={res.name!}
                          className="block object-cover w-30 h-44"
                        />
                      ) : (
                        <ImageIcon
                          classname="fill-gray-500"
                          width="10rem"
                          height="14rem"
                        />
                      )}
                    </Link>
                  </div>

                  <div className="w-3/4">
                    <div>
                      <Link
                        to={`/movie/${res.id}-${convertStringToSlug(
                          res.title!
                        )}`}
                      >
                        <h2 className="font-bold text-lg">{res.title}</h2>
                      </Link>
                      <small className="text-gray-500">
                        {formatDate(res.release_date!)}
                      </small>
                    </div>

                    <div>
                      <p className="truncate-text text-gray-500">
                        {res.overview}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
export default RelatedInformationAboutMovie;
