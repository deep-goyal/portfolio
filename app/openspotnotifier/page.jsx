"use client";

import PageNav from "@/components/PageNav";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Wojak from "@/public/wojak.png";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

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
      <PageNav prevUrl="/sushiscroll" nextUrl="/ta" />

      <div className="flex items-reverse justify-center pt-20 gap-40">
        <div className="flex flex-grow pl-40 flex-col justify-start items-start">
          <div className="text-4xl line-clamp-4 pb-5 inline-flex gap-2">
            <p>Open Spot Notifier</p>
            <HiMiniArrowTopRightOnSquare
              className="transition-colors duration-300 ease-in-out hover:text-gray-500"
              onMouseEnter={() => document.body.classList.add("no-cursor")}
              onMouseLeave={() => document.body.classList.remove("no-cursor")}
              onClick={() =>
                window.open(
                  "https://github.com/deep-goyal/open-spot-notifier",
                  "_blank"
                )
              }
            />
          </div>
          <p className="pb-2">
            For decades, asu students have faced a relentless battle to secure
            classes with their preferred professors. These coveted spots open
            briefly, and platforms like coursicle and classrabbit often monetize
            on this by charging an absurd fee to provide notifications of these
            openings, leaving students in frustration.
          </p>

          <p className="pb-2">
            Enter my open-source selenium script -- a swift and efficient
            savior. Faster and more reliable than existing platforms, it ensures
            students receive real-time class opening alerts.
          </p>

          <p>AND! It's integrated with discord!</p>
        </div>
        <div className="pr-40 flex-grow">
          <Image src={Wojak} width={1500} height={1000} />
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
