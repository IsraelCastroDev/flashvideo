import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SearchHome() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchInput.toLowerCase())
      return toast.error("Ingresa algo para buscar");
    return navigate(`/search?query=${searchInput}`);
  };

  return (
    <div className="bg-bg-image bg-center bg-cover bg-no-repeat min-h-72 max-h-80 flex justify-center items-center text-white">
      <div className="p-5 md:p-10 space-y-2 md:space-y-5 h-full w-full">
        <div>
          <h2 className="text-5xl font-black">Te damos la bienvenida.</h2>
          <h3 className="text-3xl font-bold">
            Millones de películas, series y gente por descubrir. Explora ya.
          </h3>
        </div>

        <div className="bg-white h-12 rounded-full mt-2 md:mt-20">
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-between h-full"
          >
            <input
              type="text"
              className="outline-none bg-transparent text-gray-700 placeholder:text-gray-400 h-full px-3 md:px-5 w-full"
              placeholder="Busca una película, serie o persona..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              type="submit"
              className="bg-emerald-500 md:hover:text-black h-full px-7 rounded-full font-bold"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SearchHome;
