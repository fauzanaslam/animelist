import React from "react";

type ParamsProps = {
  title: string;
};

const Header = ({ title }: ParamsProps) => {
  return (
    <div>
      <h1 className="font-bold py-2 text-xl pt-28 md:pt-24 px-2">{title}</h1>
    </div>
  );
};

export default Header;
