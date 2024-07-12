import React, { useState } from "react";
import Image from "next/image";
import "@/styles/sushiscroll.css";
import SushiScrollPreview from "@/public/sushiscrollpreview.png";

const SushiScroll = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setPreviewVisible(true);
    document.body.classList.add("no-cursor");
  };

  const handleMouseLeave = () => {
    setPreviewVisible(false);
    document.body.classList.remove("no-cursor");
  };

  const handleMouseMove = (e) => {
    setCursorPos({ top: e.clientY - 200, left: e.clientX + 10 });
  };

  return (
    <>
      <div
        className="sushiScrollCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/sushiscroll";
        }}
      >
        <div className="content">
          <p className="sushiScrollText">SUSHI SCROLL</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={SushiScrollPreview}
            alt="Preview"
            width={400}
            height={400}
            layout="fixed"
            objectFit="cover"
          />
        </div>
      )}
    </>
  );
};

export default SushiScroll;
