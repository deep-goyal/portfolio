import React from "react";
import Deep from "../images/deep.png";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-left justify-start gap-40 pt-10">
      <Image src={Deep} alt="deep" width={150} className="self-center" />
      <div className="flex px-40 gap-40">
        <div className="flex flex-col text-white hover:cursor-none">
          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p className="">Hack @UC Berkeley</p>
            <p className="text-gray-500 pl-10">2024</p>
          </div>

          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p>Hack @Harvard University</p>
            <p className="text-gray-500 pl-10">2024</p>
          </div>

          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p>Software Engineering Internship</p>
            <p className="text-gray-500 pl-10">2023</p>
          </div>

          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p>Teaching Assistant @ASU</p>
            <p className="text-gray-500 pl-10">2023</p>
          </div>

          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p>Sushi Scroll</p>
            <p className="text-gray-500 pl-10">2023</p>
          </div>

          <div className="flex justify-between items-center p-5 rounded-full hover:bg-[#212124] hover:scale-105 transition-transform duration-300">
            <p>Attendance System for ASU</p>
            <p className="text-gray-500 pl-10">2022</p>
          </div>
        </div>
        <div className="self-center text-2xl">
          <p className="hover:cursor-blue-line">Hi, I'm Deep!</p>
          <div className="flex align-start gap-1 justify-start hover:cursor-blue-line">
            <p>Citizen of </p>
            <div className="flex items-center text-blue-300 cursor-none hover:text-blue-600">
              <p>Terra</p>
              <RxArrowTopRight className="hover:scale-x-110 hover:scale-y-110" />
            </div>
          </div>
          <div className="flex pt-3 text-lg cursor-none">
            <div className="flex items-center hover:text-gray-600 pr-3 cursor-none">
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
      </div>
    </div>
  );
};

export default Gallery;
