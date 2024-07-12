"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import SushiScroll from "@/public/sushiscroll.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <PageNav prevUrl="/typography" nextUrl="/openspotnotifier" />

      <div className="flex items-reverse justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <div className="text-4xl line-clamp-4 pb-5 inline-flex gap-2">
            <p>Sushi Scroll</p>
            <HiMiniArrowTopRightOnSquare
              className="transition-colors duration-300 ease-in-out hover:text-gray-500"
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              onClick={() =>
                window.open("https://sushi-scroll.vercel.app", "_blank")
              }
            />
            <FaGithub
              className="transition-colors duration-300 ease-in-out hover:text-gray-500"
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              onClick={() => {
                window.open(
                  "https://github.com/deep-goyal/SushiScroll",
                  "_blank"
                );
              }}
            />
          </div>
          <p className="pb-2">
            A special anime exploration experience --built with React, Anilist
            GraphQL, ChakraUI and Typescript.
          </p>
        </div>
        <div className="pr-40 flex-grow">
          <Image
            src={SushiScroll}
            alt="Sushi Scroll"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </div>
  );
};

export default page;
