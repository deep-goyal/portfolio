import React from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`stack ${fadeOut ? "fade-out" : ""}`}>
      <div className="blobs">
        <span className="blob"></span>
        <span className="blob"></span>
        <span className="blob"></span>
        <span className="blob"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
