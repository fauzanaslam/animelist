import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import Header from "@/components/animelist/Header";
import AnimeList from "@/components/animelist/AnimeList";

const page = async ({ params }: any): Promise<React.ReactElement> => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();
  return (
    <>
      <Header title={`pencarian untuk ${keyword}...`} />
      <AnimeList api={searchAnime} />
    </>
  );
};

export default page;
