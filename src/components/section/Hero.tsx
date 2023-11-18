import React from "react";
import Authors from "../list/Authors";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-3 pb-6 pt-14  flex flex-col gap-y-7 items-center">
      <button className="bg-[#e1b6ef] py-3 px-6 rounded-full">
        Over 3 million posts available at your fingertips
      </button>
      <p className=" md:text-[72px] font-semibold">
        Welcome to Smartchain Posts
      </p>
      <p className=" font-medium text-xl">
        Amazing community, Amazing posts, all in one place.
      </p>
      <Link href={"#posts"}>
        <button className="bg-black text-white py-3 px-6 rounded-full">
          View posts
        </button>
      </Link>

      <Authors />
    </div>
  );
};

export default Hero;
