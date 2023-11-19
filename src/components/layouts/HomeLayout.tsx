import { componentWithChildren } from "@/lib/types";
import React from "react";
import HomeHeader from "../header/HomeHeader";

const HomeLayout = ({ children }: componentWithChildren) => {
  return (
    <div className=" overflow-x-hidden">
      <HomeHeader />
      {children}
    </div>
  );
};

export default HomeLayout;
