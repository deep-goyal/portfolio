import React from "react";
import "../../styles/number.css";

const Number = () => {
  return (
    <div
      className="numberCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="numberText">50000</p>
      </div>
    </div>
  );
};

export default Number;
