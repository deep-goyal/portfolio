import React from "react";
import "@/styles/tacard.css";

const TACard = () => {
  return (
    <div
      className="taCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
      onClick={() => {
        window.location.href = "/ta";
      }}
    >
      <div className="content">
        <p className="taText fanwood">Outstanding TA of the Year</p>
      </div>
    </div>
  );
};

export default TACard;
