"use client";

import React, { useState, useEffect, useMemo } from "react";
import Deep from "../../public/deep.png";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import GifPreview from "../components/GifPreview";

const Home = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const mediaMap: Record<number, string> = useMemo(
    () => ({
      1: "/verbalist.mp4",
      2: "/harvard.mp4",
      3: "/blank.mp4",
      4: "/ta.mp4",
      5: "/sushiscroll.mp4",
      6: "/devilsinvent.mp4",
    }),
    []
  );

  const galleryItems = [
    { id: 1, text: "Hack @UC Berkeley", year: "2024" },
    { id: 2, text: "Hack @Harvard University", year: "2024" },
    { id: 5, text: "Sushi Scroll", year: "2023" },
    { id: 3, text: "Software Engineering Internship", year: "2023" },
    { id: 4, text: "Teaching Assistant @ASU", year: "2023" },
    { id: 6, text: "Attendance System for ASU", year: "2022" },
  ];

  useEffect(() => {
    const preloadMedia = async () => {
      for (const media of Object.values(mediaMap)) {
        try {
          const response = await fetch(media, {
            cache: "force-cache",
          });
          if (!response.ok) {
            console.error(`Failed to preload media: ${media}`);
          }
        } catch (error) {
          console.error("Error preloading media:", error);
        }
      }
    };

    preloadMedia();
  }, [mediaMap]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-gray-300">
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

            <div
              className={`self-center cursor-blue-line text-2xl transition-opacity duration-300 ${
                activeHover ? "opacity-0" : "opacity-100"
              }`}
            >
              <p>Hi, I am Deep Goyal!</p>
              <div className="flex align-start text-md text-gray-500 gap-[9px] justify-start cursor-blue-line">
                <p>Software Engineer</p>
              </div>
              <div className="flex pt-3 text-lg cursor-none">
                <div
                  className="flex items-center hover:text-gray-500 hover:underline pr-3 cursor-none"
                  onClick={() => {
                    window.open("https://read.cv/deepindots");
                  }}
                >
                  <p>Curriculum Vitaé</p>
                  <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
                </div>

                <div
                  className="flex items-center hover:text-gray-500 hover:underline cursor-none pr-3"
                  onClick={() => {
                    window.location.href =
                      "mailto:deep.goyal@icloud.com?subject=Hi!";
                  }}
                >
                  <p>Email</p>
                  <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
                </div>

                <div
                  className="flex items-center pr-3 hover:text-gray-500 hover:underline cursor-none"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/goyal-deep/");
                  }}
                >
                  <p>LinkedIn</p>
                  <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
                </div>

                <div
                  className="flex items-center hover:text-gray-500 hover:underline cursor-none "
                  onClick={() => {
                    window.open("/resume-goyal-deep.pdf");
                  }}
                >
                  <p>Résumé</p>
                  <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
                </div>
              </div>
            </div>

            <GifPreview
              isHovered={!!activeHover}
              media={activeHover ? mediaMap[activeHover] : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
