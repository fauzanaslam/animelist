import { getAnime } from "@/libs/api-lib";
import React from "react";
import VideoPlayer from "../../../components/util/VideoPlayer";

const Page = async ({ params: { id } }: any) => {
  const anime = await getAnime(`anime/${id}`);

  return (
    <div className="pt-32 md:pt-24 px-2">
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      <h1 className="font-semibold text-4xl">{anime.data.title}</h1>
      <hr />
      <p className="text-primary">{anime.data.synopsis}</p>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-xl">score :</h3>
        <p className="text-xl text-primary"> {anime.data.score}</p>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-xl">rank :</h3>
        <p className="text-xl text-primary"> {anime.data.rank}</p>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-xl">realese :</h3>
        <p className="text-xl text-primary"> {anime.data.year}</p>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-xl">episode :</h3>
        <p className="text-xl text-primary"> {anime.data.episodes}</p>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-xl">popularity :</h3>
        <p className="text-xl text-primary"> {anime.data.popularity}</p>
      </div>
    </div>
  );
};

export default Page;
