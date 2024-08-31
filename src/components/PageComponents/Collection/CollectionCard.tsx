import { Link } from "react-router-dom";
import { CollectionWithType } from "../../../types";
import { convertStringToSlug } from "../../../helpers";
import { ImageIcon } from "../../ui/Icons";

interface Props {
  collection: CollectionWithType;
}

function CollectionCard({ collection }: Props) {
  return (
    <li
      key={collection.id}
      className="flex items-center gap-2 w-full shadow-md md:py-3"
    >
      <div className="w-1/4 flex items-center justify-center">
        <Link
          to={`/collection/${collection.id}-${convertStringToSlug(
            collection.original_name!
          )}`}
        >
          {collection.poster_path !== null ? (
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                collection.poster_path
              }`}
              alt={collection.name!}
              className="block object-cover w-30 h-44"
            />
          ) : (
            <ImageIcon classname="fill-gray-500" width="10rem" height="14rem" />
          )}
        </Link>
      </div>

      <div className="w-3/4">
        <div>
          <Link
            to={`/movie/${collection.id}-${convertStringToSlug(
              collection.original_name!
            )}`}
          >
            <h2 className="font-bold text-lg">{collection.original_name}</h2>
          </Link>
          {/* <small className="text-gray-500">
                    {formatDate(collection.!)}
                  </small> */}
        </div>

        <div>
          <p className="truncate-text text-gray-500">{collection.overview}</p>
        </div>
      </div>
    </li>
  );
}
export default CollectionCard;
