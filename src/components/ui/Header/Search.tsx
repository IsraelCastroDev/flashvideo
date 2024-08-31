import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "../Icons";
import { useState } from "react";
import { toast } from "react-toastify";

function Search() {
  const queryParam = useLocation().search;
  const query = queryParam.split("=")[1];

  const [queryValue, setQueryValue] = useState(query || "");
  const navigate = useNavigate();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!queryValue.toLowerCase())
      return toast.error("Ingresa algo para buscar");

    navigate(`/search?query=${queryValue}`);
  };

  return (
    <div className="flex items-center gap-2 md:gap-4 w-full border border-b-gray-500 bg-white px-4 py-2 md:py-4 md:px-10 sticky top-0">
      <div>
        <SearchIcon classname="fill-slate-500" />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center flex-1">
        <input
          type="text"
          className="w-full outline-none h-full placeholder:text-gray-400 italic text-gray-500"
          onChange={handleOnchange}
          value={queryValue}
        />
        <button
          type="submit"
          className="text-gray-500 hover:text-gray-600 font-black"
        >
          X
        </button>
      </form>
    </div>
  );
}
export default Search;
