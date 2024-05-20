"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackCircle } from "react-icons/io5";

type ParamsProps = {
  title: string;
};

const Header = ({ title }: ParamsProps) => {
  const router = useRouter();

  const handleBack = (event: any) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4 px-4">
      <button className="text-color-primary" onClick={handleBack}>
        <IoArrowBackCircle size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
