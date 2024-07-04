import React from "react";
import "@/styles/typography.css";

const Typography = () => {
  return (
    <div
      className="typographyCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="typographyText">typography</p>
      </div>
    </div>
  );
};

export default Typography;
