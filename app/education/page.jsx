"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import ASUSeal from "@/public/asuseal.png";
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
      <PageNav prevUrl="/" nextUrl="/linecount" />

      <div className="flex items-reverse w-screen justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">
            bachelor of science in computer science
          </p>
          <p>aug 2022 - may 2026</p>
          <p className="pb-5">perfect 4.0 gpa</p>
          <p className="pb-2 underline">courses</p>
          <ul className="pb-5 list-disc list-inside">
            <li>cse450- design and analysis of algorithms</li>
            <li>cse355- theoretical computer science</li>
            <li>mat343- applied linear algebra</li>
            <li>cse310- data structures and algorithms</li>
            <li>cse335- principles of mobile app dev</li>
            <li>cse365- information assurance</li>
            <li>cse240- programming languages and paradigms</li>
          </ul>

          <p className="pb-2 underline">awards and recognition</p>
          <ul className="list-disc list-inside">
            <li>dean's list - fa22, sp23, fa23, sp24</li>
            <li>
              $750 in devils invent for building an automated attendance
              management system
            </li>
          </ul>
        </div>
        <div className="pr-40 flex-grow">
          <Image src={ASUSeal} alt="ASU Seal" width={250} height={250} />
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
