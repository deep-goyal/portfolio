"use client";

import { useEffect, useState, useRef } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import LineAnimation from "../components/LineAnimation";
import Globe from "./Globe";
import Feedback from "./Feedback";
import Footer from "./Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(Date.now());
  const lastMousePos = useRef({ x: 0, y: 0 });
  const thresholdSpeed = 25; //sensitivity

  //timer for shuffling
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  //fast move to open secret page feature
  useEffect(() => {
    const handleMouseMove = (event) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastMouseMoveTime.current;

      if (timeDiff === 0) return; //avoid redirection on zero movements

      const currentPos = { x: event.clientX, y: event.clientY };
      const distance = Math.sqrt(
        Math.pow(currentPos.x - lastMousePos.current.x, 2) +
          Math.pow(currentPos.y - lastMousePos.current.y, 2)
      );

      const speed = distance / timeDiff; // pixels per millisecond

      if (speed > thresholdSpeed) {
        window.open("/secret", "_blank");
      }

      lastMouseMoveTime.current = currentTime;
      lastMousePos.current = currentPos;
      setCursorPosition(currentPos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // loading screen
  if (isLoading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory">
      <div className="flex flex-col items-start flex-1">
        <div className="relative w-full h-full snap-start overflow-hidden pb-20">
          <LineAnimation />
          <Header />
        </div>

        <Grid />

        <div className="flex justify-start align-start overflow-hidden w-screen snap-start">
          <Feedback />
          <div className="overflow-hidden">
            <Globe />
          </div>
        </div>

        <Footer />

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
