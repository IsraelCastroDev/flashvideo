import { Swiper, SwiperSlide } from "swiper/react";
import { CastMember, Movie } from "../../types";
import { Link } from "react-router-dom";
import "swiper/css";

interface Props {
  data: Movie[] | CastMember[];
}

function isMovie(item: Movie | CastMember): item is Movie {
  return (item as Movie).title !== undefined;
}

function isCast(item: Movie | CastMember): item is CastMember {
  return (item as CastMember).known_for_department !== undefined;
}

function Carousel({ data }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      tag="ul"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          tag="li"
          className={`${
            isMovie(item)
              ? ""
              : isCast(item)
              ? "bg-white h-60"
              : "bg-gray-200 h-60"
          } rounded-xl h-72`}
        >
          <Link
            to={`${
              isMovie(item) ? `/peliculas/${item.id}` : `/persona/${item.id}`
            }`}
          >
            <img
              src={`${
                isCast(item)
                  ? item.profile_path
                    ? `${import.meta.env.VITE_IMAGE_URL}w200${
                        item.profile_path
                      }`
                    : "/img/perfil-default.jpg"
                  : `${
                      item.poster_path !== null
                        ? `${import.meta.env.VITE_IMAGE_URL}w200${
                            item.poster_path
                          }`
                        : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
                    }`
              }
              `}
              /*
              ${import.meta.env.VITE_IMAGE_URL}w200${
                isMovie(item)
                  ? item.poster_path
                  : isCast(item)
                  ? item.profile_path
                  : item.poster_path
              }
              */
              alt={`Poster de ${isMovie(item) ? item.title : item.name}`}
              className="rounded-xl"
              loading="lazy"
            />

            <div className="p-2">
              <h2
                className="text-sm font-bold"
                title={`${isMovie(item) ? item.title : item.original_name}`}
              >
                {isMovie(item) ? item.title : item.original_name}
              </h2>
              {isCast(item) && <p className="text-sm">{item.character}</p>}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
