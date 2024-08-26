import {
  CreditsResponse,
  KeywordsResponse,
  RecommendationsResponse,
} from "../../types";
import Carousel from "../ui/Carousel";

interface Props {
  credits: CreditsResponse;
  recommendations: RecommendationsResponse;
  keywords: KeywordsResponse;
}

function RelatedInformationAboutMovie({
  credits,
  recommendations,
  keywords,
}: Props) {
  return (
    <section className="px-4 md:px-10 py-2 mt-4 lg:flex">
      <div className="lg:w-2/3 md:space-y-3">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">Reparto</h3>
          <div className="mt-2">
            {credits?.cast && <Carousel data={credits?.cast} />}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold md:text-2xl">Recomendaciones</h3>
          <div className="mt-2">
            {recommendations?.results && (
              <Carousel data={recommendations.results} />
            )}
          </div>
        </div>
      </div>

      <aside className="lg:w-1/3 lg:pl-4 shadow-box-shadow-left shadow-box-shadow">
        <h3 className="text-xl font-bold md:text-2xl">Palabras claves</h3>

        <div className="flex w-full flex-wrap justify-start gap-2 mt-2">
          {keywords?.keywords.map((keyword) => (
            <div key={keyword.id} className="bg-gray-300 px-2 py-1 rounded-md">
              <p className="font-semibold text-sm md:font-bold">
                {keyword.name}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
export default RelatedInformationAboutMovie;
