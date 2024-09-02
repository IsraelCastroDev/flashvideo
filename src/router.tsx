import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/ui/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

const HomePageLazy = lazy(() => import("./pages/HomePage"));
const LayoutLazy = lazy(() => import("./layouts/Layout"));
const LayoutMovieLazy = lazy(() => import("./layouts/LayoutMovie"));
const LayoutSearch = lazy(() => import("./layouts/LayoutSearch"));
const LayoutPage = lazy(() => import("./layouts/LayoutPage"));

const CollectionPageLazy = lazy(
  () => import("./pages/CollectionPage/CollectionPage")
);
const MoviePageLazy = lazy(() => import("./pages/Movies/MoviePage/MoviePage"));
const PopularMoviePageLazy = lazy(
  () => import("./pages/Movies/PopularMovies/PopularMoviesPage")
);
const UpcomingMoviePageLazy = lazy(
  () => import("./pages/Movies/UpcomingMovies/UpcomingMoviesPage")
);
const TopRatedMoviePageLazy = lazy(
  () => import("./pages/Movies/TopRatedMovies/TopRatedMoviesPage")
);

const PersonPageLazy = lazy(() => import("./pages/PersonPage/PersonPage"));
const SearchTvPage = lazy(() => import("./pages/SearchPage/SearchTvPage"));
const TVSeriePageLazy = lazy(() => import("./pages/TVSeriePage/TVSeriePage"));
const SearhPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SearchMoviePageLazy = lazy(
  () => import("./pages/SearchPage/SearchMoviePage")
);
const SearchPersonPage = lazy(
  () => import("./pages/SearchPage/SearchPersonPage")
);
const SearchCollectionPage = lazy(
  () => import("./pages/SearchPage/SearchCollectionPage")
);
const SearchKeywordPage = lazy(
  () => import("./pages/SearchPage/SearchKeywordPage")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<LayoutPage />}>
            <Route path="/movie" element={<PopularMoviePageLazy />} />
            <Route path="movie/upcoming" element={<UpcomingMoviePageLazy />} />
            <Route path="movie/top-rated" element={<TopRatedMoviePageLazy />} />
          </Route>

          <Route element={<LayoutLazy />}>
            <Route path="/" element={<HomePageLazy />} index />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<LayoutSearch />}>
            <Route path="/search" element={<SearhPage />} />
            <Route path="/search/person" element={<SearchPersonPage />} />
            <Route path="/search/movie" element={<SearchMoviePageLazy />} />
            <Route path="/search/tv" element={<SearchTvPage />} />
            <Route path="/search/keyword" element={<SearchKeywordPage />} />
            <Route
              path="/search/collection"
              element={<SearchCollectionPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<LayoutMovieLazy />}>
            <Route path="/movie/:id" element={<MoviePageLazy />} />
            <Route path="/person/:id" element={<PersonPageLazy />} />
            <Route path="/tv/:id" element={<TVSeriePageLazy />} />
            <Route path="/collection/:id" element={<CollectionPageLazy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer pauseOnHover={false} closeOnClick={true} />
    </>
  );
}

export default App;
