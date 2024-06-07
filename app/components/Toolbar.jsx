"use client";

import React from "react";

const Toolbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="toolbar fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-80 backdrop-blur-md px-5 py-5 rounded-full shadow-lg">
      <button
        className="mx-3 text-white text-2xl hover:underline"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        deep.
      </button>

      <button
        className="mx-3 text-white text-lg hover:underline"
        onClick={() => scrollToSection("aboutme")}
      >
        About Me
      </button>
      <button
        className="mx-3 text-white text-lg hover:underline"
        onClick={() => scrollToSection("education")}
      >
        Education
      </button>
      <button
        className="mx-3 text-white text-lg hover:underline"
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </button>
      <button
        className="mx-3 text-white text-lg hover:underline"
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </button>
      <button
        className="mx-3 text-white text-lg hover:underline"
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </button>
    </div>
  );
};

export default Toolbar;
