import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center p-20 bg-black text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-7xl mb-20 flex items-center justify-center">
        Education <FiArrowDownRight />
      </h2>

      <div className="w-full max-w-5xl">
        <div className="flex justify-between mb-4">
          <div className="w-3/4">
            <p className="text-4xl">
              BS Computer Science & Minor in Statistics.
            </p>
            <p className="italic text-2xl">
              Arizona State University, Tempe AZ
            </p>
          </div>
          <div className="flex flex-col items-end pt-1">
            <p className="text-2xl">Expected May 2026</p>
            <p className="text-2xl">GPA: 4.0</p>
          </div>
        </div>

        <div>
          <p className="text-2xl mb-2">Notable Courses:</p>
          <ul className="list-disc list-inside ml-6 text-2xl">
            <li>CSE335: iOS Application Development</li>
            <li>CSE310: Data Structures and Algorithms</li>
            <li>CSE259: Logic in Computer Science</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
