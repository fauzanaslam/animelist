import React from "react";
import { LayoutProps } from "../../.next/types/app/layout";

type ParamsProps = {
  page: number;
  setPage: any;
  lastPage: number;
};

const Pagination = ({ page, setPage, lastPage }: ParamsProps) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center text-2xl gap-2 py-4">
      <button
        onClick={handlePrevPage}
        className="hover:text-secondary ease-in-out duration-300"
      >
        prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="hover:text-secondary ease-in-out duration-300"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
