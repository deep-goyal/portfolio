"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Deep from "@/public/deep.png";

const Page = () => {
  const [feedback, setFeedback] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(
        "https://feedback-seven-beige.vercel.app/api/feedback"
      );
      const data = await response.json();
      setFeedback(data);
    };

    fetchFeedback();
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-5 py-20">
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
      <h1 className="text-4xl text-emerald-500 underline px-40">Feedback</h1>
      <ul className="list-inside list-decimal px-40">
        {feedback.map((item, index) => (
          <li key={index}>{item.feedback}</li>
        ))}
      </ul>

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
