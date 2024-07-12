"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import TAAward from "@/public/taaward.JPG";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

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
      <PageNav prevUrl="/openspotnotifier" nextUrl="/" isEnd={true} />

      <div className="flex items-reverse justify-center pt-10 gap-20">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <p className="text-4xl line-clamp-4 pb-5">Teaching Assistant</p>
          <p>Aug 2023 - Present</p>
          <p className="pb-5">Ira Fulton Schools of Engineering</p>

          <p className="pb-2 underline">My Work</p>
          <ul className="list-disc list-inside">
            <li>
              I teach Object Oriented Programming and Data Structures in Java to
              over 1000 students.
            </li>
            <li>
              I hold regular office hours, plan review sessions, and manage
              other teaching assistants.
            </li>
          </ul>

          <p className="pb-2 pt-5 underline">See My Work</p>
          <ul className="list-disc list-inside">
            <li
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              className="hover:text-gray-500"
              onClick={() => {
                window.open(
                  "https://youtube.com/playlist?list=PLchAnHVcjYABVZtXZ4GZhVHURVpgdSzEc&si=pzmhFH6AOyIIXbpr",
                  "_blank"
                );
              }}
            >
              <div className="inline-flex gap-1 items-center">
                SP24- Final Study Guide
                <HiMiniArrowTopRightOnSquare className="pb-[1px]" />
              </div>
            </li>
            <li
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              className="hover:text-gray-500"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/playlist?list=PLchAnHVcjYAC2lelXaLqkojv0vrRetPAT",
                  "_blank"
                );
              }}
            >
              <div className="inline-flex gap-1 items-center">
                SP24- Midterm Study Guide
                <HiMiniArrowTopRightOnSquare className="pb-[1px]" />
              </div>
            </li>
            <li
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              className="hover:text-gray-500"
              onClick={() => {
                window.open("https://youtu.be/JNbodvlH8Us", "_blank");
              }}
            >
              <div className="inline-flex gap-1 items-center">
                FA23- Final Reviews
                <HiMiniArrowTopRightOnSquare className="pb-[1px]" />
              </div>
            </li>
          </ul>

          <p className="pt-5 pb-2 underline">List of Courses I've Assisted</p>
          <ul className="list-disc list-inside">
            <li>SP24: CSE205 - Prof. Lydia Fritz</li>
            <li>FA23: CSE205 - Prof. Farideh Tadayon Navabi</li>
            <li>FA23: CSE110 - Prof. Farideh Tadayon Navabi</li>
            <li>FA23: FSE404 - Prof. Adwith Malpe, Prof. Suzan Allaham</li>
          </ul>
        </div>
        <div className="pr-40 flex-grow">
          <Image src={TAAward} alt="ASU Seal" width={1000} height={1000} />
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
