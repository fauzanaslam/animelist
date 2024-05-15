import React from "react";

type ParamsProps = {
  title: string;
};

const Header = ({ title }: ParamsProps): React.ReactElement => {
  return (
    <div>
      <h1 className="font-bold py-2 text-xl pt-10 px-2 text-primary">
        {title}
      </h1>
    </div>
  );
};

export default Header;
