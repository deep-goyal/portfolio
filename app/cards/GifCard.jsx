import React from "react";
import "../../styles/gifcard.css";
import SphereGIF from "../../public/sphere.gif";
import Image from "next/image";

const GifCard = () => {
  return (
    <div
      className="gifCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <Image src={SphereGIF} alt="Animated GIF" className="gifImage" />
      </div>
      <div className="overlay">
        <p>Coming Soon</p>
      </div>
    </div>
  );
};

export default GifCard;
