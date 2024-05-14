import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=24`
  );
  const anime = await response.json();
  return (
    <div className="px-2 pt-20">
      <h1 className="font-bold py-2 text-xl">Paling Populer</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {anime.data.map((data: any) => {
          return (
            <Link
              href={`/anime/${data.mal_id}`}
              className="shadow-lg hover:scale-105 duration-300 ease-in-out transition-all cursor-pointer"
              key={data.mal_id}
            >
              <Image
                src={data.images.webp.image_url}
                alt={data.title}
                width={350}
                height={350}
              />
              <h3 className="font-semibold text-lg px-1">{data.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
