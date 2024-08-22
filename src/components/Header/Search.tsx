import { SearchIcon } from "../ui/Icons";

function Search() {
  return (
    <div className="flex items-center gap-2 w-full border border-b-gray-500 bg-white px-4 py-2 md:py-4 md:px-10 sticky top-0">
      <SearchIcon classname="fill-slate-500" />
      <input
        type="text"
        placeholder="Avengers"
        className="w-full outline-none h-full placeholder:text-gray-400 text-gray-500"
      />
      <button className="text-gray-500 hover:text-gray-600 font-black">
        X
      </button>
    </div>
  );
}
export default Search;
