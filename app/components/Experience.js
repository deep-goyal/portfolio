import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center p-20 bg-black text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-7xl mb-20 flex items-center justify-center">
        Experience <FiArrowDownRight />
      </h2>

      <div className="w-full max-w-5xl">
        <div className="flex justify-between mb-4">
          <div className="w-3/4">
            <p className="text-4xl">Undergraduate Teaching Assistant</p>
            <p className="italic text-2xl">
              Arizona State University, Tempe AZ
            </p>
          </div>
          <div className="flex flex-col items-end pt-1">
            <p className="text-2xl">Aug 2023 - Present</p>
          </div>
        </div>

        <div>
          <p className="text-2xl pb-4">Assisted the following courses: </p>
          <ul className="list-disc list-inside ml-6 text-2xl">
            <li>CSE110 - Intro to Programming in Java (fa23)</li>
            <li>
              CSE205 - Object Oriented Programming and Algorithms (fa23, sp24,
              fa24)
            </li>
            <li>FSE404 - Engineering Projects in Community Service (fa23)</li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-5xl pt-10">
        <div className="flex justify-between mb-4">
          <div className="w-3/4">
            <p className="text-4xl">Software Developer</p>
            <p className="italic text-2xl">ASU Automation Projects, Tempe AZ</p>
          </div>
          <div className="flex flex-col items-end pt-1">
            <p className="text-2xl">Jan 2023 - Dec 2023</p>
          </div>
        </div>

        <div>
          <ul className="list-disc list-inside ml-6 text-2xl">
            <li>
              Created figma wireframes for the new automated attendance
              management system
            </li>
            <li>
              Developed testing scripts in Postman to automate testing the
              system’s REST api with over 20 endpoints to ensure faster bug
              detection anf fixes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
