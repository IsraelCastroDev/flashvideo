import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-sky-950 text-white text-center p-3">
      Hecho por Israel Castro con la API de{" "}
      <small>
        <Link to="https://www.themoviedb.org/">TheMovieDB</Link>
      </small>
    </footer>
  );
}
export default Footer;
