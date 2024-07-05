import React from "react";
import Image from "next/image";
import Deep from "@/public/deep.png";
import {
  RiHomeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const PageNav = () => {
  return (
    <div className="flex flex-wrap w-screen justify-center items-center py-20">
      <div className="flex-grow pl-40">
        <Image src={Deep} alt="Deep" width={100} height={100} />
      </div>
      <div className="flex justify-between items-center gap-8 text-xl pr-40">
        <div
          className="flex items-center hover:text-gray-800"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
        >
          <RiArrowLeftSLine />
          <p>prev</p>
        </div>

        <RiHomeLine
          className="hover:text-gray-800"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
        />
        <div
          className="flex items-center hover:text-gray-800"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
        >
          <p>next</p>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default PageNav;
