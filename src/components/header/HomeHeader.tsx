import React from "react";

const HomeHeader = () => {
  return (
    <div className="px-3 py-6  fixed top-0 left-0 w-full z-[100]">
      <div className="flex justify-between items-center gap-3">
        <div>
          <p className=" md:text-lg font-semibold">Smartchain</p>
        </div>
        <div className="flex  gap-3">
        <button className="bg-black text-white py-3 px-6 rounded-full">
          Login
        </button>
        <button className="border py-3 px-6 rounded-full">
          Sign up
        </button>
        </div>
 
      </div>
    </div>
  );
};

export default HomeHeader;
