import React, { useState, useEffect } from "react";
import Deep from "../images/deep.png";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import GifPreview from "./GifPreview";

const Gallery = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const mediaMap: Record<number, string> = {
    1: "/verbalist.mp4", // Media for "Hack @UC Berkeley"
    2: "/harvard.mp4", // Media for "Hack @Harvard University"
    3: "/blank.png", // Media for "Software Engineering Internship"
    4: "/taaward.png", // Media for "Teaching Assistant @ASU"
    5: "/sushiscroll.mp4", // Media for "Sushi Scroll"
    6: "/devilsinvent.png", // Media for "Attendance System for ASU"
  };

  const galleryItems = [
    { id: 1, text: "Hack @UC Berkeley", year: "2024" },
    { id: 2, text: "Hack @Harvard University", year: "2024" },
    { id: 5, text: "Sushi Scroll", year: "2023" },
    { id: 3, text: "Software Engineering Internship", year: "2023" },
    { id: 4, text: "Teaching Assistant @ASU", year: "2023" },
    { id: 6, text: "Attendance System for ASU", year: "2022" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-left justify-start gap-40 pt-10">
      <Image src={Deep} alt="deep" width={150} className="self-center" />
      <div className="flex pl-40 gap-40">
        <div className="flex flex-col text-white hover:cursor-none">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between items-center p-5 rounded-full transition-transform duration-300 ${
                activeHover === item.id
                  ? "bg-[#212124] scale-105"
                  : "hover:bg-[#212124] hover:scale-105"
              }`}
              onMouseEnter={() => setActiveHover(item.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <p>{item.text}</p>
              <p className="text-gray-500 pl-10">{item.year}</p>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div
          className={`self-center cursor-blue-line text-2xl transition-opacity duration-300 ${
            activeHover ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>Hi, I'm Deep Goyal!</p>
          <div className="flex align-start gap-[9px] justify-start hover:cursor-blue-line">
            <p>Citizen of </p>
            <div
              className="flex items-center text-blue-300 cursor-none hover:text-blue-600"
              onClick={() => {
                window.open(
                  "https://en.wikipedia.org/wiki/Terra#:~:text=An%20alternate%20name%20for%20planet,Latin%20name%20for%20the%20planet"
                );
              }}
            >
              <p>Terra</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>
          </div>
          <div className="flex pt-3 text-lg cursor-none">
            <div
              className="flex items-center hover:text-gray-600 pr-3 cursor-none"
              onClick={() => {
                window.open("https://read.cv/deepindots");
              }}
            >
              <p>About</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>

            <div
              className="flex items-center hover:text-gray-600 cursor-none pr-3"
              onClick={() => {
                window.location.href =
                  "mailto:deep.goyal@icloud.com?subject=Hi!";
              }}
            >
              <p>Email</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>

            <div
              className="flex items-center pr-3 hover:text-gray-600 cursor-none"
              onClick={() => {
                window.open("https://www.linkedin.com/in/goyal-deep/");
              }}
            >
              <p>LinkedIn</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>

            <div className="flex items-center hover:text-gray-600 cursor-none ">
              <p>Resume</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>
          </div>
        </div>

        {/* GifPreview Component */}
        <GifPreview
          isHovered={!!activeHover}
          media={activeHover ? mediaMap[activeHover] : null}
        />
      </div>
    </div>
  );
};

export default Gallery;
