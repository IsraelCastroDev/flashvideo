import { Swiper, SwiperSlide } from "swiper/react";
import { Cast, Movie, RecommendedMovie } from "../../types";
import { Link } from "react-router-dom";
import "swiper/css";

interface Props {
  data: Movie[] | Cast[] | RecommendedMovie[];
}

function isMovie(item: Movie | Cast | RecommendedMovie): item is Movie {
  return (item as Movie).title !== undefined;
}

function isCast(item: Movie | Cast | RecommendedMovie): item is Cast {
  return (item as Cast).known_for_department !== undefined;
}

function Carousel({ data }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          tag="li"
          className={
            isMovie(item)
              ? ""
              : isCast(item)
              ? "bg-white h-52"
              : "bg-gray-200 h-60"
          }
        >
          <Link
            to={`${
              isMovie(item) ? `/peliculas/${item.id}` : `/persona/${item.id}`
            }`}
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}w200${
                isMovie(item)
                  ? item.poster_path
                  : isCast(item)
                  ? item.profile_path
                  : item.poster_path
              }`}
              alt={`Poster de ${
                isMovie(item)
                  ? item.title
                  : isCast(item)
                  ? item.name
                  : item.poster_path
              }`}
              className="rounded-xl"
            />
            <h2 className="text-sm font-bold">
              {isMovie(item)
                ? item.title
                : isCast(item)
                ? item.original_name
                : item.title}
            </h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
