import { Link } from "react-router-dom";
import { TVSerie } from "../../../types";
import { ImageIcon } from "../../ui/Icons";
import { convertStringToSlug, formatDate } from "../../../helpers";

interface Props {
  tvSerie: TVSerie;
}

function TVSerieCard({ tvSerie }: Props) {
  return (
    <li
      key={tvSerie.id}
      className="flex items-center gap-2 w-full shadow-md md:py-3"
    >
      <div className="w-1/4 flex items-center justify-center">
        <Link to={`/tv/${tvSerie.id}-${convertStringToSlug(tvSerie.name!)}`}>
          {tvSerie.poster_path !== null ? (
            <img
              src={`${
                import.meta.env.VITE_IMAGE_URL
              }/w300${tvSerie.poster_path!}`}
              alt={tvSerie.name!}
              className="block object-cover w-30 h-44"
            />
          ) : (
            <ImageIcon classname="fill-gray-500" width="10rem" height="14rem" />
          )}
        </Link>
      </div>

      <div className="w-3/4">
        <div>
          <Link to={`/tv/${tvSerie.id}-${convertStringToSlug(tvSerie.name!)}`}>
            <h2 className="font-bold text-lg">{tvSerie.name}</h2>
          </Link>
          <small className="text-gray-500">
            {formatDate(tvSerie.first_air_date!)}
          </small>
        </div>

        <div>
          <p className="truncate-text text-gray-500">{tvSerie.overview}</p>
        </div>
      </div>
    </li>
  );
}
export default TVSerieCard;
