"use client";

import React, { useState } from "react";

type ParamsProps = {
  anime_mal_id: string;
  user_email: string;
  anime_image?: string;
  anime_title?: string;
};

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}: ParamsProps) => {
  const [isCreated, setIcreated] = useState(false);
  const handleCollection = async (event: any) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      setIcreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil Ditambahkan Ke Koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-primary rounded"
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
