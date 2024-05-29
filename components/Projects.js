import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center p-20 bg-black text-white dark:bg-white dark:text-black"
    >
      <h2 className="text-7xl mb-20 flex items-center justify-center">
        <div className="flex">
          Current Projects{" "}
          <FiArrowDownRight className="text-white dark:text-black" />
        </div>
      </h2>

      <div className="w-full max-w-5xl space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-gray-200">
          <div className="flex">
            <h3 className="text-3xl text-white dark:text-black">Codesphere</h3>
            <FiArrowUpRight className="text-3xl text-white dark:text-black" />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="ExpressJS"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt="SaSS"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
              alt="SocketIO"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
              alt="Axios"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
              height={40}
              width={40}
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-gray-200">
          <div className="flex">
            <h3 className="text-3xl text-white dark:text-black">
              Sushi Scroll
            </h3>
            <FiArrowUpRight className="text-3xl text-white dark:text-black" />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              height={40}
              width={40}
            />
            <img
              src="https://cdn.simpleicons.org/chakraui/319795"
              alt="Chakra UI"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
              alt="Axios"
              height={40}
              width={40}
            />

            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TypeScript"
              height={40}
              width={40}
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-gray-200">
          <div className="flex">
            <h3 className="text-3xl text-white dark:text-black">
              Open Spot Notifier
            </h3>
            <FiArrowUpRight className="text-3xl text-white dark:text-black" />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              alt="Selenium"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              height={40}
              width={40}
            />
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-gray-200">
          <div className="flex">
            <h3 className="text-3xl text-white dark:text-black">Portfolio</h3>
            <FiArrowUpRight className="text-3xl text-white dark:text-black" />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              height={40}
              width={40}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
