import { authors } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";
import AuthorCard from "../cards/AuthorCard";
const Authors = () => {
  return (
    <Marquee className="" autoFill>
      {authors.map((author) => (
        <AuthorCard image={author} key={author} />
      ))}
    </Marquee>
  );
};

export default Authors;
