"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import Infomaze from "@/public/infomaze.png";
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
      <PageNav prevUrl="/linecount" nextUrl="/scai" />

      <div className="flex items-reverse w-screen justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">software engineer intern</p>
          <p>jun 2024 - jul 2024</p>
          <p className="pb-5">infomaze technologies, mysore ka, india</p>
          <p className="pb-2 underline">what did i do?</p>
          <ul className="pb-5 list-disc list-inside">
            <li>
              i worked with a product manager to build mobile apps using react
              native and backend apis using expressjs and mongodb
            </li>
            <li>i designed user interfaces in figma</li>
            <li>
              i collected, annotated data, and trained an nlp model and later
              built a linear programming model to minimize costs for a local
              printing business
            </li>
            <li>
              not only that, but i also learnt some pretty cool technologies
              while building stuff for this company- scikit-learn, numpy,
              pandas, agile dev, aws, azure
            </li>
          </ul>
        </div>
        <div className="pr-40 flex-grow">
          <Image src={Infomaze} alt="Infomaze" width={500} height={500} />
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
