import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="h-[calc(100vh-180px)] flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        Página no encontrada
      </h2>
      <p className="text-xl md:text-2xl text-center font-semibold">
        La url solicitada no existe
      </p>

      <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className="underline-offset-1 underline text-center text-sky-500"
        >
          Vuelve a la página principal
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
