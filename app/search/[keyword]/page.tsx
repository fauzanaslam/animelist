"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/animelist/Header";
import AnimeList from "@/components/animelist/AnimeList";
import Pagination from "../../../components/util/Pagination";

const Page = ({ params }: any) => {
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime]: any = useState([]);

  const { keyword } = params;
  const keywordDecoded = decodeURI(keyword);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${keyword}&page=${page}&limit=24`
    );
    const data = await response.json();
    setSearchAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Header title={`pencarian untuk ${keywordDecoded}...`} />
      <AnimeList api={searchAnime} />
      <Pagination
        page={page}
        lastPage={searchAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
