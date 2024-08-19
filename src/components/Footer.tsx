import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-sky-950 text-white text-center p-3">
      Hecho por Israel Castro con la API de{" "}
      <strong>
        <Link
          to="https://www.themoviedb.org/"
          target="_blank"
          className="underline"
        >
          TheMovieDB
        </Link>
      </strong>
    </footer>
  );
}
export default Footer;
