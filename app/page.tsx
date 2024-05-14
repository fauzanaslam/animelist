import AnimeList from "../components/animelist/AnimeList";
import Header from "../components/animelist/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=24`
  );
  const topAnime = await response.json();

  return (
    <>
      <Header title="Paling Populer" />
      <AnimeList api={topAnime} />
    </>
  );
};

export default Home;
