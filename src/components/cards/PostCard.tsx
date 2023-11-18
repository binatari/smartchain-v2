import { user } from "@/lib/types";
import Link from "next/link";
import React from "react";

const PostCard = ({ title, body, id }: user) => {
  return (
    <Link href={`/posts/${id}`} className="mb-6">
        <div className="card h-full max-w-sm w-full bg-white relative border pb-3 pt-[45px_!important] px-2">
      <div className=" w-10 h-10 rounded-full p-[12px_!important] card absolute -top-4 bg-white">
        <img src="/assets/user.svg" className="w-full h-full" />
      </div>
      <p className=" md:text-xl font-semibold mb-2">{title}</p>
      <p>{body}</p>
    </div>
    </Link>
  );
};

export default PostCard;
