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
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder=" cari anime..."
        className=" w-full p-2 rounded"
        ref={searchRef}
      />
      <button className="absolute end-2 top-2" onClick={handleSearch}>
        <FaSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
