import { authors } from "@/lib/data";
import React from "react";
import AuthorCard from "../cards/AuthorCard";
import { InteractiveMarquee } from "./Marquee";
const Authors = () => {
  return (
    <InteractiveMarquee>
      {authors.map((author) => (
        <AuthorCard image={author} key={author} />
      ))}
    </InteractiveMarquee>
  );
};

export default Authors;
