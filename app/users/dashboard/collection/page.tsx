import React from "react";
import Header from "../../../../components/dashboard/Header";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";
import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email as string },
  });
  return (
    <div className="pt-32">
      <Header title="MY Collection" />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-2">
        {collection.map((anime: any, index) => (
          <Link
            href={`/anime/${anime.anime_mal_id}`}
            className="relative hover:scale-105 duration-300 transition-all"
            key={index}
          >
            <Image
              src={anime.anime_image}
              alt={anime.anime_image}
              width={250}
              height={250}
              className="w-full"
            />
            <div className="absolute flex items-center justify-center bottom-0 w-full bg-accent h-16">
              <h5 className="text-xl text-center">{anime.anime_title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
