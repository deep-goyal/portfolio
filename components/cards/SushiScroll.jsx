import React from "react";
import "@/styles/sushiscroll.css";

const SushiScroll = () => {
  return (
    <div
      className="sushiScrollCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
      onClick={() => {
        window.location.href = "/sushiscroll";
      }}
    >
      <div className="content">
        <p className="sushiScrollText">SUSHI SCROLL</p>
      </div>
    </div>
  );
};

export default SushiScroll;
