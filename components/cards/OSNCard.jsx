import React from "react";
import "@/styles/osncard.css";

const OSNCard = () => {
  return (
    <div
      className="openSpotNotifierCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="openSpotNotifierText">open spot notifier</p>
      </div>
    </div>
  );
};

export default OSNCard;
