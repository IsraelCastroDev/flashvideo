import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PeoplePage from "./pages/PeoplePage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";
import LayoutMovie from "./layouts/LayoutMovie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} index />
          <Route path="/peliculas" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/gente" element={<PeoplePage />} />
        </Route>

        <Route element={<LayoutMovie />}>
          <Route path="/peliculas/:id" element={<MoviePage />} />
          <Route path="/persona/:id" element={<PersonPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
