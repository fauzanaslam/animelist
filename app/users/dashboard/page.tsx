import React from "react";
import { authUserSession } from "@/libs/auth-lib";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const Page = async () => {
  const user: any = await authUserSession();
  // if (!user) redirect("/");

  return (
    <div className="pt-44 md:pt-24 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-accent text-color-dark font-bold px-4 py-3 text-xl rounded-full"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-accent text-color-dark font-bold px-4 py-3 text-xl rounded-full"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
