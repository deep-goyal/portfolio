"use client";

import PageNav from "@/components/PageNav";
import React, { useEffect, useState } from "react";
import "@/styles/number.css";
import Image from "next/image";
import techStack from "@/data/techstack";

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
    <div className="flex flex-col h-screen w-screen">
      <PageNav prevUrl="/education" nextUrl="/infomaze" />

      <div className="flex flex-col items-center justify-start">
        <p className="text-9xl text-gradient overflow-auto font-medium">
          50000
        </p>
        <p className="line-clamp-5 pt-10 text-lg px-40 text-center overflow-hidden">
          i've typed over 50000 lines of code while learning, teaching, solving
          problems, testing, aligning divs, and most importantly debugging. most
          of my code is written in typeScript, javaScript, c++, and python.
        </p>
        <p className="pt-10 text-lg overflow-hidden">
          all the languages, tools, and frameworks i've used so far:
        </p>
        <div className="grid grid-cols-10 gap-2 pt-10 flex-wrap ">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#121117] overflow-hidden random-gradient-border flex justify-center items-center rounded-[4px] p-4 hover:blur-[2px] "
            >
              <Image src={tech.url} alt={tech.name} width={64} height={64} />
            </div>
          ))}
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
