import { singlePost } from "@/lib/api";
import { user } from "@/lib/types";
import React, { useState, useEffect } from "react";

const PostBanner = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState<user>();

  const getPost = () => {
    setLoading(true);
    setError(false);
    const post = singlePost(id)
      .then((res) => setPost(res))
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  return (
    <div className="card container mx-auto max-w-[1180px] my-7">
      <div>
        <div className="gradient-background min-h-[192px] relative rounded-xl px-3 pt-24 pb-3 text-white">
          <div className=" w-28 h-28 rounded-full p-3 card ml-4 absolute -top-5 bg-white">
            <img src="/assets/profile.svg" className="w-full h-full" />
          </div>
          {post ? (
            <>
              <p className=" md:text-2xl font-semibold capitalize pt-3">
                {post.title}
              </p>
              <p className=" font-medium pt-3">{post.body}</p>
            </>
          ) : null}
          <p className=" md:text-xl font-semibold pt-3"></p>
        </div>
        <div className="flex gap-3 ">
          <p className=" md:text-xl font-semibold pt-3">Other posts</p>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
