import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/ui/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

const HomePageLazy = lazy(() => import("./pages/HomePage"));
const LayoutLazy = lazy(() => import("./layouts/Layout"));
const LayoutMovieLazy = lazy(() => import("./layouts/LayoutMovie"));
const LayoutSearch = lazy(() => import("./layouts/LayoutSearch"));
const CollectionPageLazy = lazy(
  () => import("./pages/CollectionPage/CollectionPage")
);
const MoviePageLazy = lazy(() => import("./pages/MoviePage/MoviePage"));
const PersonPageLazy = lazy(() => import("./pages/PersonPage/PersonPage"));
const PeoplePageLazy = lazy(() => import("./pages/PeoplePage"));
const SeriesPageLazy = lazy(() => import("./pages/SeriesPage"));
const MoviesPageLazy = lazy(() => import("./pages/MoviesPage"));
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
          <Route element={<LayoutLazy />}>
            <Route path="/" element={<HomePageLazy />} index />
            <Route path="/peliculas" element={<MoviesPageLazy />} />
            <Route path="/series" element={<SeriesPageLazy />} />
            <Route path="/gente" element={<PeoplePageLazy />} />
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
