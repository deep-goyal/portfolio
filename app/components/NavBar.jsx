"use client";

import React, { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-6 flex items-center bg-gray-500 bg-opacity-20 backdrop-blur-md text-white dark:bg-gray-200 dark:bg-opacity-50 dark:text-black">
      <h1 className="px-10 text-8xl">deep.</h1>
      <div className="flex justify-end ml-auto pr-10 space-x-4">
        <a
          href="mailto:deep.goyal@icloud.com"
          className="group flex items-center cursor-default"
        >
          email <MdArrowOutward className="hover-diagonal ml-1" />
        </a>
        <a
          href="https://github.com/deep-goyal"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center cursor-default"
        >
          github <MdArrowOutward className="hover-diagonal ml-1" />
        </a>
        <a
          href="https://drive.google.com/file/d/1_DWO6U_l2MitrPu7d8WcpGQe0YK0FU7q/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center cursor-default"
        >
          resume <MdArrowOutward className="hover-diagonal ml-1" />
        </a>
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none px-4 cursor-default hover:scale-110 transition-transform duration-200"
        >
          {darkMode ? <FiMoon size={25} /> : <GoSun size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
