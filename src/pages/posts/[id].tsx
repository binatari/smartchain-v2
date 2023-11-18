import PostBanner from "@/components/banner/PostBanner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const { query } = useRouter();
  const id = query?.id as string;
  return (
    <div>
    <div className="flex container mx-auto ">
    <Link href={'/'}>
    <button className="card py-[12px_!important] mt-4">Back</button>
    </Link>

    </div>
    
      <PostBanner id={id} />
    </div>
  );
};

export default Post;
