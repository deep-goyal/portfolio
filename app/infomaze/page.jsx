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
    <div className="flex flex-col w-screen h-screen">
      <PageNav prevUrl="/linecount" nextUrl="/scai" />

      <div className="flex items-reverse justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-6 pb-5">Software Engineer Intern</p>
          <p>Jun 2024 - Jul 2024</p>
          <p className="pb-5">Infomaze Technologies, Remote</p>
          <p className="pb-2 underline">My Work</p>
          <ul className="pb-5 list-disc list-inside">
            <li>
              I worked with a product manager to build mobile apps using React
              Native and backend apis using ExpressJS and Mongodb.
            </li>
            <li>I designed user interfaces in Figma.</li>
            <li>
              I collected, annotated data, and trained an NLP model and later
              built a linear programming model to minimize costs for a local
              printing business.
            </li>
            <li>
              I also learnt some pretty cool technologies while building stuff
              for this company. Some of which include- Scikit-Learn, Numpy,
              Pandas, Agile Development, AWS, Azure.
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
    </div>
  );
};

export default page;
