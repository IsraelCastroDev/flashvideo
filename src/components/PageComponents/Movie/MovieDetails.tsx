import { getYear } from "../../../helpers";
import { CreditsResponse, MovieWithType, Video } from "../../../types";
import Modal from "../../ui/Modal";

interface Props {
  movie: MovieWithType;
  credits: CreditsResponse;
  videos: Video[];
}

function MovieDetails({ movie, credits, videos }: Props) {
  const trailer = videos.find((v) => v.type.toLowerCase() === "trailer");

  return (
    <section className="md:relative">
      <div>
        <div
          className={`bg-center bg-cover bg-no-repeat h-72 md:h-[calc(100vh-70px)] relative block opacity-45`}
          style={{
            backgroundImage: `url("${
              movie.backdrop_path !== null
                ? `${
                    import.meta.env.VITE_IMAGE_URL
                  }/w1920_and_h800_multi_faces${movie.backdrop_path}`
                : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
            }")`,
          }}
        ></div>

        <div className="md:absolute md:top-[10%] md:px-10">
          <div className="md:flex md:justify-center md:items-center">
            <div className="md:w-1/3">
              <img
                src={
                  movie.poster_path !== null
                    ? `${import.meta.env.VITE_IMAGE_URL}/w200${
                        movie.poster_path
                      }`
                    : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
                }
                alt={`Poster de ${movie.title}`}
                className="block w-32 h-40 md:w-72 md:h-1/2 top-1/3 left-64 -translate-x-48 -translate-y-1/2 md:-translate-x-0 md:translate-y-0 absolute rounded-xl md:static"
              />
            </div>

            <div className="mt-4 px-4 md:w-2/3">
              <div>
                <h1 className="text-center md:text-left text-xl md:text-4xl font-bold md:font-black">
                  {movie.title}{" "}
                  <span className="font-semibold">
                    ({getYear(movie.release_date!)})
                  </span>
                </h1>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold">{movie.release_date}</p>
                  {trailer && (
                    <>
                      <Modal trailer={trailer} />
                    </>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-xl font-bold">Vista general</h3>

                <div>
                  <p className="text-pretty font-semibold mt-2">
                    {movie.overview}
                  </p>
                </div>

                <ol className="grid grid-cols-2 gap-3 mt-4">
                  {credits?.crew.slice(0, 4).map((c) => (
                    <li key={c.credit_id}>
                      <h3 className="font-black">{c.original_name}</h3>
                      <p>{c.known_for_department}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieDetails;