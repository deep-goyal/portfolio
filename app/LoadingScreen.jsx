import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`mainCss ${fadeOut ? "fade-out" : ""}`}>
      <div className="dotsCss">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
