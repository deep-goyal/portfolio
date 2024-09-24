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
    <div className="flex flex-col w-screen h-screen">
      <PageNav prevUrl="/infomaze" nextUrl="/blogs" />

      <div className="flex items-reverse justify-center pt-20 gap-20">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">Frontend Engineer</p>
          <p>Aug 2023 - Dec 2023</p>
          <p className="pb-5">ASU Automation Projects @SCAI-ASU</p>
          <p className="pb-2 underline">This Project is Special</p>
          <p className="pb-5">
            In Devils Invent 2022 - my team and I built an automated attendance
            management system that won the second prize in the competition. The
            project was so impressive that ASU found it compelling to fund the
            project and have us integrate it in all their classes.
          </p>

          <p className="pb-2 underline">My Work</p>
          <ul className="list-disc list-inside">
            <li>
              I designed user interface components using Figma and built them
              with React and TailwindCSS.
            </li>
            <li>
              i developed Postman scripts to test 30 of our rest api endpoints.
            </li>
            <li>I taught my teammates HTML, CSS and JS. </li>
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
    </div>
  );
};

export default page;
