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
          <p className="text-4xl line-clamp-4 pb-5">teaching assistant</p>
          <p>aug 2023 - present</p>
          <p className="pb-5">ira fulton schools of engineering</p>

          <p className="pb-2 underline">what i do?</p>
          <ul className="list-disc list-inside">
            <li>
              i teach object oriented programming and data structures in java to
              over 1000 students
            </li>
            <li>
              i hold regular office hours, plan review sessions, and manage
              other teaching assistants
            </li>
          </ul>

          <p className="pb-2 pt-5 underline">see my work</p>
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
                sp24- final study guide
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
                sp24- midterm study guide
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
                fa23- final review session
                <HiMiniArrowTopRightOnSquare className="pb-[1px]" />
              </div>
            </li>
          </ul>

          <p className="pt-5 pb-2 underline">courses i've ta'ed for:</p>
          <ul className="list-disc list-inside">
            <li>sp24: cse205 - prof. lydia fritz</li>
            <li>fa23: cse205 - prof. farideh tadayon navabi</li>
            <li>fa23: cse110 - prof. farideh tadayon navabi</li>
            <li>fa23: fse404 - prof. adwith malpe, prof. suzan allaham</li>
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
