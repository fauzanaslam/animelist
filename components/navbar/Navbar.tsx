import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = (): React.ReactElement => {
  return (
    <header>
      <div className="fixed inset-x-0 z-50 flex flex-col md:flex-row justify-between items-center bg-secondary p-4 shadow-lg">
        <Link href="/" className="">
          <h1 className="flex items-center font-bold text-2xl">JUST4WIBU🦹</h1>
        </Link>
        <div className="md:flex items-center gap-4">
          <InputSearch />
          <UserActionButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
