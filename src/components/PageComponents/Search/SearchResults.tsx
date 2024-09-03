import {
  CollectionWithType,
  MovieWithType,
  MultiWithType,
  PersonWithType,
  SearchResult,
} from "@/types";
import MovieCard from "@components/PageComponents/Movie/MovieCard";
import PersonCard from "@components/PageComponents/Person/PersonCard";
import CollectionCard from "@components/PageComponents/Collection/CollectionCard";
import TVSerieCard from "@components/PageComponents/TVSerie/TVSerieCard";

interface Props {
  searchResult: MultiWithType;
}

const isMovie = (item: SearchResult): item is MovieWithType => {
  return (item as MovieWithType).type_identifier === "movie"; // devuelve true o false
};

const isPerson = (item: SearchResult): item is PersonWithType => {
  return (item as PersonWithType).type_identifier === "person";
};

const isCollectionMovies = (item: SearchResult): item is CollectionWithType => {
  return (item as CollectionWithType).type_identifier === "collection";
};

function SearchResults({ searchResult }: Props) {
  return (
    <>
      {searchResult.results.length > 0 ? (
        searchResult?.results.map((res) => {
          if (isMovie(res)) {
            return <MovieCard movie={res} key={res.id} />;
          } else if (isPerson(res)) {
            return <PersonCard person={res} key={res.id} />;
          } else if (isCollectionMovies(res)) {
            return <CollectionCard collection={res} key={res.id} />;
          } else {
            return <TVSerieCard tvSerie={res} key={res.id} />;
          }
        })
      ) : (
        <p className="font-bold text-lg">No se encontraron resultados.</p>
      )}
    </>
  );
}
export default SearchResults;
