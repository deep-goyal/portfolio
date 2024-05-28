import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Aboutme = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col justify-left items-center p-20 bg-black text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-7xl mb-20 flex items-center justify-left">
        About Me <FiArrowDownRight />
      </h2>
      <p className="mb-4 text-2xl">
        I’m Deep Goyal, a computer science enthusiast with a strong background
        in web development and UI/UX. I build stuff for the web. In my free
        time, I like to assist classes at my university.
      </p>
      <p className="text-2xl">
        My goal is to leverage my skills to build impactful, real-world
        applications that make a difference.
      </p>
    </section>
  );
};

export default Aboutme;
