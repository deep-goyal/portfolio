"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";

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
      <PageNav prevUrl="/scai" nextUrl="/typography" />

      <div className="flex items-reverse w-screen justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">blogs</p>
          <p className="text-gray-500">coming soon</p>
        </div>
        <div className="pr-40 flex-grow">
          {/* <Image src={Infomaze} alt="Infomaze" width={500} height={500} /> */}
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
