"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = (): React.ReactElement => {
  const searchRef: any = useRef();
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword.length >= 3 && keyword.trim() !== "") {
      router.push(`/search/${keyword}`);
    }
  };

  const handlekeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder=" cari anime..."
        className=" w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handlekeyDown}
      />
      <button className="absolute end-2 top-2" onClick={handleSearch}>
        <FaSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
