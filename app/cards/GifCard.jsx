import React from "react";
import "../../styles/gifcard.css";
import SphereGIF from "../../public/sphere.gif";
import Image from "next/image";

const GifCard = () => {
  return (
    <div className="gifCard">
      <Image src={SphereGIF} alt="Animated GIF" className="gifImage" />
    </div>
  );
};

export default GifCard;
