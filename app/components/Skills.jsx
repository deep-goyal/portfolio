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
  "Next.js": "#FF4500",
  React: "#FFA500",
  "Express.js": "#00BFFF",
  Apollo: "#007BA7",
  Flask: "#E2725B",
  "Node.js": "#FFD700",
  Selenium: "#808000",
  TypeScript: "#2E46AB",
  JavaScript: "#4682B4",
  Bootstrap: "#6F2DA8",
  TailwindCSS: "#06B6D4",
  ChakraUI: "#40E0D0",
  GraphQL: "#9400D3",
  Python: "#3776AB",
  Java: "#FF00FF",
  C: "#FF7F50",
  "C++": "#CC7722",
  Swift: "#87CEEB",
  MySQL: "#1cd220",
  HTML5: "#FF7F50",
  CSS: "#008080",
  BASH: "#006400",
  Figma: "#FFBF00",
  Postman: "#FF6347",
  Jquery: "#4682B4",
  Git: "#F05032",
  Linux: "#C11B17",
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
