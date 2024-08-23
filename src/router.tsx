import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/ui/Loader/Loader";
import SearhPage from "./pages/SearchPage/SearchPage";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import SearchPersonPage from "./pages/SearchPage/SearchPersonPage";
import LayoutSearch from "./layouts/LayoutSearch";
import SearchCollectionPage from "./pages/SearchPage/SearchCollectionPage";
import SearchMoviePage from "./pages/SearchPage/SearchMoviePage";
import SearchKeywordPage from "./pages/SearchPage/SearchKeywordPage";
import SearchTvPage from "./pages/SearchPage/SearchTvPage";

const HomePageLazy = lazy(() => import("./pages/HomePage"));
const LayoutLazy = lazy(() => import("./layouts/Layout"));
const LayoutMovieLazy = lazy(() => import("./layouts/LayoutMovie"));
const MoviePageLazy = lazy(() => import("./pages/MoviePage/MoviePage"));
const PersonPageLazy = lazy(() => import("./pages/PersonPage/PersonPage"));
const PeoplePageLazy = lazy(() => import("./pages/PeoplePage"));
const SeriesPageLazy = lazy(() => import("./pages/SeriesPage"));
const MoviesPageLazy = lazy(() => import("./pages/MoviesPage"));

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
            <Route path="/search/movie" element={<SearchMoviePage />} />
            <Route path="/search/company" element={<SearchPersonPage />} />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer pauseOnHover={false} closeOnClick={true} />
    </>
  );
}

export default App;
