import React from "react";
import Award from "../images/taaward.png";
import Image from "next/image";

interface GifPreviewProps {
  isHovered: boolean;
}

const GifPreview = ({ isHovered }: GifPreviewProps) => {
  return (
    <div
      className={`fixed top-1/2 right-[10%] -translate-y-1/2 transition-opacity ease-in-out duration-500 ${
        isHovered
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ width: "70vw", maxWidth: "50vw" }}
    >
      {/* <Image
        src={Award}
        alt="award"
        layout="intrinsic"
        className="object-contain"
        priority
      /> */}

      <video
        preload="metadata"
        className="rounded-lg shadow-lg w-full"
        autoPlay
        muted
        loop
      >
        <source src="/harvard.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default GifPreview;
