"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ParamsProps = {
  anime_mal_id: string;
  user_email: string;
  username: string;
  anime_title: string;
};

const CommentInput = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}: ParamsProps) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIcreated] = useState(false);
  const router = useRouter();

  const handleInput = (event: any) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event: any) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIcreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {isCreated && <p className="">postingan terkirim</p>}

      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full md:w-1/2 h-32"
        placeholder="comment disini"
      />
      <button onClick={handlePosting} className="py-2 px-4 bg-accent">
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentInput;
