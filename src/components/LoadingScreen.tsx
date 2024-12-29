"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Deep from "../../public/deep.png";

const LoadingScreen: React.FC = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate percentage from 0 to 100
    tl.to(
      {},
      {
        duration: 3,
        ease: "power1.inOut",
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          const percentage = document.querySelector(
            ".percentage"
          ) as HTMLElement;
          if (percentage) percentage.textContent = `${progress}`;
        },
      }
    )
      .to({}, { duration: 0.5 }) // Pause briefly after reaching 100
      .add(() => {
        // Hide the number and show the image when progress reaches 100
        setShowImage(true);
      })
      .to(".percentage", { opacity: 0, duration: 0.5 }) // Fade out the number
      .to({}, { duration: 2 }) // Display the image for 2 seconds
      .to(".preloader", {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          const preloader = document.querySelector(".preloader") as HTMLElement;
          if (preloader) preloader.style.display = "none"; // Hide preloader after animation
        },
      });
  }, []);

  return (
    <div className="preloader fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-white z-50">
      {!showImage && (
        <div className="percentage font-bold text-[20vw] opacity-100">0</div>
      )}
      {showImage && (
        <Image
          src={Deep}
          alt="Deep"
          className="transition-opacity"
          width={400}
        />
      )}
    </div>
  );
};

export default LoadingScreen;
