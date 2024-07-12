import React, { useState } from "react";
import Image from "next/image";
import "@/styles/osncard.css";
import OSNPreview from "@/public/osnpreview.png";

const OSNCard = () => {
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
    setCursorPos({ top: e.clientY - 280, left: e.clientX + 10 });
  };

  return (
    <>
      <div
        className="openSpotNotifierCard"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/openspotnotifier";
        }}
      >
        <div className="content">
          <p className="openSpotNotifierText ostrichsans">open spot notifier</p>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={OSNPreview}
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

export default OSNCard;
