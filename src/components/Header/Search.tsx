function Search() {
  return (
    <div className="bg-bg-image bg-center bg-cover bg-no-repeat min-h-72 max-h-80 flex justify-center items-center">
      <div className="p-5 md:p-10 space-y-2 md:space-y-5 h-full w-full">
        <div>
          <h2 className="text-5xl font-black">Te damos la bienvenida.</h2>
          <h3 className="text-3xl font-bold">
            Millones de películas, series y gente por descubrir. Explora ya.
          </h3>
        </div>

        <div className="bg-white flex justify-between h-12 rounded-full mt-2 md:mt-20">
          <input
            type="text"
            className="outline-none bg-transparent text-gray-700 placeholder:text-gray-400 h-full px-3 md:px-5 w-full"
            placeholder="Buscar..."
          />
          <button className="bg-emerald-500 md:hover:text-black h-full px-7 rounded-full font-bold">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
