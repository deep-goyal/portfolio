"use client";

import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import LineAnimation from "../components/LineAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isLoading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="flex flex-col items-start flex-1">
        <div className="relative w-full h-full">
          <LineAnimation />
          <Header />
        </div>

        <Grid />

        <div
          className="cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
      </div>
    </div>
  );
}
