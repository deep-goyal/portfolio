import React, { useState } from "react";
import Image from "next/image";
import "@/styles/number.css";
import CountPreview from "@/public/linecountpreview.png";

const Number = () => {
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
    setCursorPos({ top: e.clientY + 10, left: e.clientX + 10 });
  };

  return (
    <>
      <div
        className="numberCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/linecount";
        }}
      >
        <div className="content">
          <p className="numberText">50000</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={CountPreview}
            alt="Preview"
            width={600}
            height={600}
            layout="fixed"
            objectFit="cover"
          />
        </div>
      )}
    </>
  );
};

export default Number;
