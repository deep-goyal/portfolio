import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const skills = [
  "Next.js",
  "React",
  "Express.js",

  "Apollo",
  "Flask",
  "Node.js",

  "Selenium",
  "TypeScript",
  "JavaScript",
  "Bootstrap",
  "TailwindCSS",
  "ChakraUI",
  "GraphQL",

  "Python",
  "Java",
  "C",
  "C++",
  "Swift",
  "MySQL",
  "HTML5",
  "CSS",
  "BASH",
  "Figma",
  "Postman",
  "Jquery",
  "Git",
  "Linux",
];

const skillColors = {
  "Next.js": "#f2d0a4",
  React: "#f19f01",
  GraphQL: "#ff0044",
  Apollo: "#2e46ab",
  "Express.js": "#b2e6d4",
  MySQL: "#1cd220",
  Selenium: "#938274",
  TypeScript: "#b9f18c",
  JavaScript: "#7b5e7b",
  Bootstrap: "#ceb5a7",
  Flask: "#e0f2e9",
  "Node.js": "#ff7d00",
  Python: "#ffecd1",
  C: "#ffafc5",
  "C++": "#ffffea",
  Swift: "#d8d8d8",
  Java: "#c3c3e6",
  HTML5: "#d1c8e1",
  CSS: "#b370b0",
  BASH: "#e9fae3",
  Figma: "#dee8d5",
  Postman: "#d5c7bc",
  Git: "#ffcfd2",
  Linux: "#e0479e",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center p-20 bg-black text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-7xl mb-20 flex items-center justify-center">
        Skills <FiArrowDownRight />
      </h2>
      <div className="grid grid-cols-7 gap-6">
        {skills.map((skill) => {
          const color = skillColors[skill] || "#FFFFFF";
          return (
            <div
              key={skill}
              className="flex justify-center items-center p-2 px-5 rounded-lg"
              style={{ border: `2px solid ${color}` }}
            >
              <span className="text-lg" style={{ color }}>
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
