import { getYear } from "../../../helpers";
import { CreditsResponse, TVSerie, Video } from "../../../types";
import Modal from "../../ui/Modal";

interface Props {
  tvSerie: TVSerie;
  tvSerieCredits: CreditsResponse;
  tvSerieVideos: Video[];
}

function TVSerieDetails({ tvSerie, tvSerieCredits, tvSerieVideos }: Props) {
  const trailer = tvSerieVideos.find((v) => v.type.toLowerCase() === "trailer");

  return (
    <section className="md:relative">
      <div>
        <div
          className={`bg-center bg-cover bg-no-repeat h-72 md:h-[calc(100vh-70px)] relative block opacity-45`}
          style={{
            backgroundImage: `url("${
              tvSerie.backdrop_path !== null
                ? `${
                    import.meta.env.VITE_IMAGE_URL
                  }/w1920_and_h800_multi_faces${tvSerie.backdrop_path}`
                : "https://img.freepik.com/free-photo/tvSerie-background-collage_23-2149876006.jpg"
            }")`,
          }}
        ></div>

        <div className="md:absolute md:top-[10%] md:px-10">
          <div className="md:flex md:justify-center md:items-center">
            <div className="md:w-1/3">
              <img
                src={
                  tvSerie.poster_path !== null
                    ? `${import.meta.env.VITE_IMAGE_URL}/w200${
                        tvSerie.poster_path
                      }`
                    : "https://img.freepik.com/free-photo/tvSerie-background-collage_23-2149876006.jpg"
                }
                alt={`Poster de ${tvSerie.name}`}
                className="block w-32 h-40 md:w-72 md:h-1/2 top-1/3 left-64 -translate-x-48 -translate-y-1/2 md:-translate-x-0 md:translate-y-0 absolute rounded-xl md:static"
              />
            </div>

            <div className="mt-4 px-4 md:w-2/3">
              <div>
                <h1 className="text-center md:text-left text-xl md:text-4xl font-bold md:font-black">
                  {tvSerie.name}{" "}
                  <span className="font-semibold">
                    ({getYear(tvSerie.first_air_date!)})
                  </span>
                </h1>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold">{tvSerie.first_air_date}</p>
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
                    {tvSerie.overview}
                  </p>
                </div>

                <ol className="grid grid-cols-2 gap-3 mt-4">
                  {tvSerieCredits?.crew.slice(0, 4).map((c) => (
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
export default TVSerieDetails;
