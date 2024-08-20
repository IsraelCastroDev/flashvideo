import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/ui/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

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
          </Route>
          <Route element={<LayoutMovieLazy />}>
            <Route path="/peliculas/:id" element={<MoviePageLazy />} />
            <Route path="/persona/:id" element={<PersonPageLazy />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
