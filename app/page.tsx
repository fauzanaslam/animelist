import { getAnime, getRecommendedAnime, reproduce } from "@/libs/api-lib";
import AnimeList from "../components/animelist/AnimeList";
import Header from "../components/animelist/Header";

const Home = async (): Promise<React.ReactElement> => {
  const topAnime = await getAnime("top/anime", "limit=24");
  let recomendedanime = await getRecommendedAnime(
    "recommendations/anime",
    "entry"
  );
  recomendedanime = reproduce(recomendedanime, 6);

  return (
    <>
      <section className=" pt-28 md:pt-24">
        <Header title="Paling Populer" />
        <AnimeList api={topAnime} />
      </section>
      <section className="mb-4">
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedanime} />
      </section>
    </>
  );
};

export default Home;
