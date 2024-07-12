import React, { useState } from "react";
import Image from "next/image";
import ASUSeal from "@/public/asuseal.png";
import "@/styles/education.css";
import EducationPreview from "@/public/educationpreview.png";

const Education = () => {
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
        className="education-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => {
          window.location.href = "/education";
        }}
      >
        <div className="content">
          <div className="seal-container">
            <Image
              src={ASUSeal}
              alt="Arizona State University Seal"
              width={200}
              height={200}
              layout="fixed"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {previewVisible && (
        <div
          className="preview-box"
          style={{ top: cursorPos.top, left: cursorPos.left }}
        >
          <Image
            src={EducationPreview}
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

export default Education;
