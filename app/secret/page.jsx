"use client";

import React, { useEffect, useState } from "react";
import Deep from "@/public/deep.png";
import Image from "next/image";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  //update the custom circular cursor
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //shows the submit button on change in input
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center gap-5 items-center">
      <div
        onMouseEnter={() => document.body.classList.add("no-cursor")}
        onMouseLeave={() => document.body.classList.remove("no-cursor")}
      >
        <Image
          src={Deep}
          width={200}
          height={100}
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
      <div className="relative mt-2">
        <input
          type="password"
          value={inputValue}
          onChange={handleChange}
          placeholder="enter the secret code"
          className="bg-[#121117] p-2 rounded-[4px] w-80 cursor-none text-sm focus:outline-none "
        />
        {showSubmitButton && (
          <div
            className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center hover:text-xl hover:text-gray-500"
            onMouseEnter={() => document.body.classList.add("no-cursor")}
            onMouseLeave={() => document.body.classList.remove("no-cursor")}
          >
            <LuArrowUpRightFromCircle />
          </div>
        )}
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
