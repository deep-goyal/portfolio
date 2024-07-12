import React, { useState } from "react";
import "@/styles/fecard.css";
import FEPreview from "@/public/scaipreview.png";
import Image from "next/image";

const FECard = () => {
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
        className="frontendEngineerCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/scai";
        }}
      >
        <div className="content">
          <p className="frontendEngineerText theneue">Frontend Engineer</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image src={FEPreview} alt="Preview" width={400} height={400} />
        </div>
      )}
    </>
  );
};

export default FECard;
