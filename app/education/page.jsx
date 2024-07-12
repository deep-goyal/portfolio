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
    <div className="flex flex-col w-screen h-screen">
      <PageNav prevUrl="/" nextUrl="/linecount" isStart={true} isEnd={false} />

      <div className="flex items-reverse justify-center pt-20 gap-20">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">
            Bachelor of Science in Computer Science
          </p>
          <p>Arizona State University, Tempe AZ</p>
          <p>Aug 2022 - May 2026</p>
          <p className="pb-5">Perfect 4.0 GPA</p>
          <p className="pb-2 underline">Courses</p>
          <ul className="pb-5 list-disc list-inside">
            <li>CSE450- Design and Analysis of Algorithms</li>
            <li>CSE355- Theoretical Computer Science</li>
            <li>MAT343- Applied Linear Algebra</li>
            <li>CSE310- Data Structures and Algorithms</li>
            <li>CSE335- Principles of Mobile App Dev</li>
            <li>CSE365- Information Assurance</li>
            <li>CSE240- Programming Languages and Paradigms</li>
          </ul>

          <p className="pb-2 underline">Awards and Recognition</p>
          <ul className="list-disc list-inside">
            <li>Dean's list - fa22, sp23, fa23, sp24</li>
            <li>
              $750 in devils invent for building an automated attendance
              management system.
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
    </div>
  );
};

export default page;
