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
    <nav className="fixed top-0 left-0 right-0 p-6 flex items-center bg-gray-400 bg-opacity-20 backdrop-blur-md text-white dark:bg-gray-200 dark:bg-opacity-50 dark:text-black">
      <h1 className="px-10 text-8xl">deep.</h1>
      <div className="flex justify-end ml-auto pr-10">
        <a
          href="mailto:deep.goyal@icloud.com"
          className="mr-4 flex items-center"
        >
          email <MdArrowOutward />
        </a>
        <a
          href="https://github.com/deep-goyal"
          target="_blank"
          className="mr-4 flex items-center"
        >
          github <MdArrowOutward />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="mr-4 flex items-center"
        >
          resume <MdArrowOutward />
        </a>
        <button onClick={toggleDarkMode} className="focus:outline-none px-4">
          {darkMode ? <FiMoon size={25} /> : <GoSun size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
