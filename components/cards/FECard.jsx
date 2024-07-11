import React from "react";
import "@/styles/fecard.css";

const FECard = () => {
  return (
    <div
      className="frontendEngineerCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
      onClick={() => {
        window.location.href = "/scai";
      }}
    >
      <div className="content">
        <p className="frontendEngineerText theneue">frontend engineer</p>
      </div>
    </div>
  );
};

export default FECard;
