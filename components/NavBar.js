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
    <nav className="flex justify-between items-center pt-10 pb-0 px-0 bg-gray-000 text-white dark:bg-white dark:text-black">
      <h1 className="px-10 text-8xl">deep.</h1>
      <div className="flex justify-end">
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
          resume {<MdArrowOutward />}
        </a>
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none px-4 pr-20"
        >
          {darkMode ? <FiMoon size={25} /> : <GoSun size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
