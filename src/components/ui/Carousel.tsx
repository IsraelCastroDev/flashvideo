import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../../types";
import { Link } from "react-router-dom";
import "swiper/css";

interface Props {
  movies: Movie[];
}

function Carousel({ movies }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} tag="li">
          <Link to={`/peliculas/${movie.id}`}>
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}w200${movie.poster_path}`}
              alt={`Poster de ${movie.title}`}
              className="rounded-xl"
            />
            <h2 className="text-sm font-bold">{movie.title}</h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Carousel;
