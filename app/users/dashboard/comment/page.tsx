import React from "react";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-lib";
import Link from "next/link";
import Header from "@/components/dashboard/Header";

const page = async () => {
  const user: any = await authUserSession();

  const comments: any = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="pt-44 md:pt-32 px-2">
      <Header title="My Comment" />
      <div className=" grid md:grid-cols-4 gap-4">
        {comments.map((comment: any, index: number) => (
          <Link
            href={`/anime/${comment.anime_mal_id}`}
            key={index}
            className="bg-accent rounded px-2 h-44"
          >
            <p>{comment.anime_title}</p>
            <hr />
            <p>{comment.comment}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
