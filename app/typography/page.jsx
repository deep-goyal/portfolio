"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import "@/styles/textdecor.css";

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
      <PageNav prevUrl="/blogs" nextUrl="/sushiscroll" />

      <div className="px-40 pt-10">
        <p className="text-4xl pb-10">typography</p>
        <p className="pb-10">the font of the month is....drumroll..</p>

        <p className="text-9xl pb-5 hoverdecor">monaco</p>

        <p>
          monaco is quite an elegant font. it is readable, clean, and there are
          no funky strokes like papyrus
        </p>
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
