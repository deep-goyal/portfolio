"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import OtherSeal from "@/public/otherseal.png";

import Image from "next/image";

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
    <>
      <PageNav prevUrl="/infomaze" nextUrl="/linecount" />

      <div className="flex items-reverse w-screen justify-center pt-20 gap-20">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">frontend engineer</p>
          <p>jan 2023 - dec 2023</p>
          <p className="pb-5">asu automation projects @scai-asu</p>
          <p className="pb-2 underline">fun fact!</p>
          <ul className="pb-5 list-disc list-inside">
            <li>
              in devils invent 2022 - my team and i built an automated
              attendance management system and won the second place in the
              competition
            </li>
            <li>
              the project was so impressive that arizona state university found
              it compelling to fund the project and have us integrate it in all
              their classes
            </li>
          </ul>

          <p className="pb-2 underline">what did i do?</p>
          <ul className="list-disc list-inside">
            <li>
              i designed user interface components using figma and built them
              with react and tailwindcss
            </li>
            <li>
              i developed postman scripts to test 10 of our rest api endpoints
            </li>
            <li>i taught my teammates html, css and js </li>
          </ul>
        </div>
        <div className="pr-40 flex-grow">
          <Image src={OtherSeal} alt="ASU Seal" width={1000} height={1000} />
        </div>
      </div>

      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
};

export default page;
