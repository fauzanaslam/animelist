import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header>
      <Link
        href="/"
        className="fixed inset-x-0 z-50 flex flex-col md:flex-row justify-between bg-orange-500 p-4 shadow-lg"
      >
        <h1 className="flex items-center font-bold text-2xl text-white">
          JUST4WIBU🦹
        </h1>
        <InputSearch />
      </Link>
    </header>
  );
};

export default Navbar;
