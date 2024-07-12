import React, { useState } from "react";
import Image from "next/image";
import "@/styles/interncard.css";
import SWEPreview from "@/public/swepreview.png";

const InternCard = () => {
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
    setCursorPos({ top: e.clientY - 50, left: e.clientX + 10 });
  };

  return (
    <>
      <div
        className="sweInternCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/infomaze";
        }}
      >
        <div className="content">
          <p className="sweInternText raleway px-20 pb-5">SWE Intern</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={SWEPreview}
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

export default InternCard;
