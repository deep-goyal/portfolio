import React from "react";
import "@/styles/fecard.css";

const FECard = () => {
  return (
    <div
      className="frontendEngineerCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="frontendEngineerText">Frontend Engineer</p>
      </div>
    </div>
  );
};

export default FECard;