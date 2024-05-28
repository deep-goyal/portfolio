"use client";

import React, { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";

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
    <nav className="flex justify-end items-center pt-10 pb-0 px-0 bg-gray-000 text-white dark:bg-white dark:text-black">
      <div className="flex justify-end">
        <a href="mailto:deep.goyal@icloud.com" className="mr-4">
          email ↗
        </a>
        <a
          href="https://github.com/deep-goyal"
          target="_blank"
          className="mr-4"
        >
          github ↗
        </a>
        <a href="/resume.pdf" target="_blank">
          resume ↗
        </a>
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none px-5 pr-20"
        >
          {darkMode ? <FiMoon size={25} /> : <GoSun size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
