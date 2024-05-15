"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/animelist/Header";
import AnimeList from "@/components/animelist/AnimeList";
import Pagination from "../../../components/util/Pagination";
import { getAnime } from "@/libs/api-lib";

const Page = ({ params }: any) => {
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime]: any = useState([]);

  const { keyword } = params;
  const keywordDecoded = decodeURI(keyword);

  const fetchData = async () => {
    const response = await getAnime(
      "anime",
      `q=${keyword}&page=${page}&limit=24`
    );
    setSearchAnime(response);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Header title={`pencarian untuk ${keywordDecoded}...`} />
      <Pagination
        page={page}
        lastPage={searchAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
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
