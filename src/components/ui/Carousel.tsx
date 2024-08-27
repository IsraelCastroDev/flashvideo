import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CastMember, Movie, TVSerie } from "../../types";
import { convertStringToSlug, formatDate } from "../../helpers";
import "swiper/css";

type DataCarousel = Movie[] | CastMember[] | TVSerie[];
type Item = Movie | CastMember | TVSerie;

interface Props {
  data: DataCarousel;
}

function isMovie(item: Item): item is Movie {
  return (item as Movie).title !== undefined;
}

function isCast(item: Item): item is CastMember {
  return (item as CastMember).profile_path !== undefined;
}

function isTVSerie(item: Item): item is TVSerie {
  return (item as TVSerie).seasons !== undefined;
}

function Carousel({ data }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
        830: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        touchStartPreventDefault: {
          touchStartPreventDefault: false,
          simulateTouch: true,
          grabCursor: true,
        },
      }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id || item.original_name}
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
              isMovie(item)
                ? `/movie/${item.id}-${convertStringToSlug(item.title!)}`
                : isTVSerie(item)
                ? `/tv/${item.id}-${convertStringToSlug(item.name!)}`
                : `/person/${item.id}-${convertStringToSlug(item.name!)}`
            }`}
          >
            <img
              src={`${
                isCast(item)
                  ? item.profile_path
                    ? `${import.meta.env.VITE_IMAGE_URL}/w200${
                        item.profile_path
                      }`
                    : "/img/perfil-default.jpg"
                  : `${
                      item.poster_path !== null
                        ? `${import.meta.env.VITE_IMAGE_URL}/w200${
                            item.poster_path
                          }`
                        : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
                    }`
              }
              `}
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
              {isCast(item) && (
                <p className="text-sm text-gray-600">{item.character}</p>
              )}

              <p className="text-gray-600 text-sm">
                {isMovie(item) && formatDate(item.release_date!)}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
