import { toast } from "react-toastify";
import PersonCard from "@components/PageComponents/Person/PersonCard";
import Loader from "@components/ui/Loader/Loader";
import { usePerson } from "../../../hooks/people/usePerson";

function PopularPersons() {
  const { popularPersonsQuery } = usePerson();
  const { data: popularPersons, isLoading, isError } = popularPersonsQuery;

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {popularPersons && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {popularPersons.results.length > 0 ? (
            popularPersons.results.map((tvSerie) => {
              return <PersonCard person={tvSerie} key={tvSerie.id} />;
            })
          ) : (
            <li>No se encontró la información</li>
          )}
        </ul>
      )}
    </section>
  );
}
export default PopularPersons;
