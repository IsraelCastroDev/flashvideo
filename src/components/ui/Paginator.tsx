// import { Link } from "react-router-dom";

function Paginator() {
  return (
    <>
      {/* <div className="flex items-center gap-2">
        {Array.from({ length: data.total_pages }, (_, index) => (
          <Link
            to={`/search/movie?query=${query}&page=${data.page + index}`}
            key={index}
            className="px-2 py-1 bg-gray-300 text-black font-bold rounded-md"
          >
            {index + 1}
          </Link>
        ))}
      </div> */}
    </>
  );
}
export default Paginator;
