import { getAnime } from "@/libs/api-lib";
import React from "react";
import VideoPlayer from "../../../components/util/VideoPlayer";
import CollectionButton from "../../../components/animelist/CollectionButton";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";
import CommentInput from "../../../components/animelist/CommentInput";
import DisplayComment from "../../../components/animelist/DisplayComment";

const Page = async ({ params: { id } }: any) => {
  const anime = await getAnime(`anime/${id}`);
  const user: any = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <div className="pt-32 md:pt-24 px-2">
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      <div className="flex items-center gap-4 my-2">
        <h1 className="font-semibold text-4xl">{anime.data.title}</h1>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
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
      <div className="px-4 py-2 flex flex-col gap-2">
        <h3 className="font-bold text-xl">Komentar penonton</h3>
        <DisplayComment anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
