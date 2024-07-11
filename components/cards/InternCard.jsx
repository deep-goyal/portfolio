import React from "react";
import "@/styles/interncard.css";

const InternCard = () => {
  return (
    <div
      className="sweInternCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
      onClick={() => {
        window.location.href = "/infomaze";
      }}
    >
      <div className="content">
        <p className="sweInternText raleway px-20 pb-5">swe intern</p>
      </div>
    </div>
  );
};

export default InternCard;
