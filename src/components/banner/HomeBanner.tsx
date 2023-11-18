import React from "react";

const HomeBanner = () => {
  return (
    <div className="card container mx-auto max-w-[1180px] mb-7">
      <div>
        <div className="gradient-background min-h-[192px] rounded-xl">
        
        </div>
        <div className="flex gap-3 ">
        <div className=" w-28 h-28 rounded-full p-3 card ml-4 relative bottom-5 bg-white">
          <img src="/assets/profile.svg" className="w-full h-full" />
        </div>
        <p className=" md:text-xl font-semibold pt-3">Some of our latest posts</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
