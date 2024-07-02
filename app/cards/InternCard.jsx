import React from "react";
import "../../styles/interncard.css";

const InternCard = () => {
  return (
    <div
      className="sweInternCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="sweInternText">SWE Intern</p>
      </div>
    </div>
  );
};

export default InternCard;
