import React from "react";

const AuthorCard = ({ image }: { image: string }) => {
  return (
    <div className="relative h-[340px] w-[273px] mx-5 rounded-[32px] overflow-hidden">
      <img
        src={`/assets/${image}`}
        className="h-full w-full absolute top-0 left-0 object-cover"
      />
      <div className="absolute bottom-0 left-0 px-4 text-white pb-4">
        <p className="text-sm mb-2">Nolan Speilberg</p>
        <button className="author-card-button">Graphics</button>
      </div>
    </div>
  );
};

export default AuthorCard;
