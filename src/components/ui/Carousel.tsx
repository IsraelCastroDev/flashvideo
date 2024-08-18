import { Swiper, SwiperSlide } from "swiper/react";
import { Cast, Movie } from "../../types";
import { Link } from "react-router-dom";
import "swiper/css";

interface Props {
  data: Movie[] | Cast[];
}

function isMovie(data: Movie | Cast): data is Movie {
  return (data as Movie).title !== undefined;
}

function Carousel({ data }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          tag="li"
          className={`${isMovie(item) ? "" : "bg-white h-52"}`}
        >
          <Link to={`/peliculas/${item.id}`}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}w200${
                isMovie(item) ? item.poster_path : item.profile_path
              }`}
              alt={`Poster de ${isMovie(item) ? item.title : item.name}`}
              className="rounded-xl"
            />
            <h2 className="text-sm font-bold">{`${
              isMovie(item) ? item.title : item.original_name
            }`}</h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Carousel;
