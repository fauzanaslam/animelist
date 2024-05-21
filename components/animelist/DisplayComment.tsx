import React from "react";
import prisma from "@/libs/prisma";

type ParamsProps = {
  anime_mal_id: string;
};

const DisplayComment = async ({ anime_mal_id }: ParamsProps) => {
  const comments: any = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
      {comments.map((comment: any) => (
        <div key={comment.id} className="bg-secondary h-44 rounded p-2">
          <p>{comment.username}</p>
          <hr />
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayComment;
