"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Deep from "@/public/deep.png";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-20">
      <Image
        src={Deep}
        width={200}
        height={200}
        className="self-center"
        onMouseEnter={() => document.body.classList.add("no-cursor")}
        onMouseLeave={() => document.body.classList.remove("no-cursor")}
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <div className="flex justify-center py-20">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTz_EvvaF5p3UgLu0cOck-BSLqTw-EEecBBi-KdC3WVNEjKeqiIROYEk5VB-tnd6juoDtDmpsT-zJIf/embed?start=false&loop=false&delayms=3000"
          width="960"
          height="569"
        ></iframe>
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

export default Page;
