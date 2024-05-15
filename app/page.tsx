import { getAnime } from "@/libs/api-lib";
import AnimeList from "../components/animelist/AnimeList";
import Header from "../components/animelist/Header";

const Home = async (): Promise<React.ReactElement> => {
  const topAnime = await getAnime("top/anime", "limit=24");

  return (
    <>
      <Header title="Paling Populer" />
      <AnimeList api={topAnime} />
    </>
  );
};

export default Home;
