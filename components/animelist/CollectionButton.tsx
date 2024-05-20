"use client";

import React from "react";

type ParamsProps = {
  anime_mal_id: string;
  user_email: string;
};

const CollectionButton = ({ anime_mal_id, user_email }: ParamsProps) => {
  const handleCollection = async (event: any) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    console.log("🚀 ~ handleCollection ~ collection:", collection);
  };

  return (
    <button className="p-2 bg-primary rounded-md" onClick={handleCollection}>
      Add to Collection
    </button>
  );
};

export default CollectionButton;
