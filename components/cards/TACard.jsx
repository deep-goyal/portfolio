import React, { useState } from "react";
import Image from "next/image";
import "@/styles/tacard.css";
import TAPreview from "@/public/tapreview.png";

const TACard = () => {
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
    setCursorPos({ top: e.clientY - 280, left: e.clientX });
  };

  return (
    <>
      <div
        className="taCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/ta";
        }}
      >
        <div className="content">
          <p className="taText fanwood">Outstanding TA of the Year</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={TAPreview}
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

export default TACard;
