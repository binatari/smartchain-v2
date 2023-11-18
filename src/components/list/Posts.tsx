import { allPosts } from "@/lib/api";
import { user } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PostCard from "../cards/PostCard";
import ArrowLoader from "../loader/ArrowLoader";

const Posts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<user[]>([]);

  const getPosts = () => {
    setLoading(true);
    setError(false);
    const posts = allPosts()
      .then((res) => setPosts(res))
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center p-7">
        <ArrowLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex justify-center p-7">
        <p>Sorry there was an error getting posts</p>
        <button className="card" onClick={getPosts}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex container mx-auto justify-center gap-4 flex-wrap  mt-10 " id="posts">
      <p className=" md:text-[56px] font-semibold max-w-sm">Explore inspiring posts</p>
      {posts.map((post) => (
        <PostCard {...post} />
      ))}
    </div>
  );
};

export default Posts;
