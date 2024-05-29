"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import { FiArrowUpRight } from "react-icons/fi";
import "@/styles/projectstyles.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const OpenSpotNotifier = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/deep-goyal/open-spot-notifier", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-20 bg-black text-white dark:bg-white dark:text-black">
      <NavBar />
      <h2 className="text-7xl mb-10 flex items-center justify-left">
        Open Spot Notifier <FiArrowUpRight />
      </h2>
      <p className="text-3xl mb-10 flex items-center justify-left pjsub">
        Helps ASU students find a spot during class registration.
      </p>
      <div
        className="flex items-center justify-between bg-gray-900 text-white py-3 w-40 px-2 rounded-[5px] cursor-pointer"
        onClick={redirectToGithub}
      >
        <FaChevronLeft />
        <FaChevronRight />
        <p className="px-2 ">Source Code</p>
      </div>

      <Link href="/">
        <p className="absolute bottom-10 left-10">
          <FaArrowLeft />
        </p>
      </Link>
    </div>
  );
};

export default OpenSpotNotifier;
