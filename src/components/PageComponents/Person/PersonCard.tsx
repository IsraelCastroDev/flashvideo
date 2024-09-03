import { Link, useLocation } from "react-router-dom";
import { convertStringToSlug, formatDate } from "../../../helpers";
import { Person } from "../../../types";
import { ImageIcon } from "../../ui/Icons";

interface Props {
  person: Person;
}

function PersonCard({ person }: Props) {
  const location = useLocation();
  const isPersonPage = location.pathname.startsWith("/person");

  return (
    <li
      key={person.id}
      className={`flex items-center ${
        isPersonPage ? "flex-col" : ""
      } gap-2 w-full shadow-md md:py-3`}
    >
      <div
        className={`flex items-center ${
          isPersonPage ? "" : "justify-center w-1/4 "
        }`}
      >
        <Link to={`/person/${person.id}-${convertStringToSlug(person.name!)}`}>
          {person.profile_path !== null ? (
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/w300${
                person.profile_path
              }`}
              alt={person.name!}
              className={`block object-cover ${
                isPersonPage ? "w-full" : "w-30 h-44"
              }`}
            />
          ) : (
            <ImageIcon classname="fill-gray-500" width="10rem" height="14rem" />
          )}
        </Link>
      </div>

      <div className="w-3/4">
        <div>
          <Link to={`/movie/${person.id}-${convertStringToSlug(person.name!)}`}>
            <h2 className="font-bold text-lg">{person.name}</h2>
          </Link>
          <small className="text-gray-500">
            {formatDate(person.birthday!)}
          </small>
        </div>

        {!isPersonPage && (
          <div>
            <p className="truncate-text text-gray-500">{person.biography}</p>
          </div>
        )}
      </div>
    </li>
  );
}
export default PersonCard;
