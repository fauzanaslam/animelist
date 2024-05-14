import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = async ({ api }: any): Promise<React.ReactElement> => {
  return (
    <div className="px-2">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {api.data.map((data: any) => {
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
                className="w-full max-h-64 object-cover"
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
