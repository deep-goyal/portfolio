import React from "react";
import Image from "next/image";
import ASUSeal from "@/public/asuseal.png";
import "@/styles/education.css";

const Education = () => {
  return (
    <div
      className="education-card"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
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
  );
};

export default Education;
