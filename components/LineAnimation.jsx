import React from "react";
import "../styles/LineAnimation.scss";

export default function LineAnimation() {
  return (
    <div className="curveWrap">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="curve" fill="none">
          <path d="M 0, 60 S 300, -60, 600, 60, 800, -120, 1200 60" />
          <path d="M 0, 60 S 200, -60, 400, 60, 900, -120, 1200 60" />
          <path d="M 0, 60 S 200, -70, 400, 70, 800, -120, 1200 60" />
          <path d="M 0, 60 S 200, -60, 400, 80, 600, -120, 1200 60" />
        </g>
      </svg>
    </div>
  );
}
