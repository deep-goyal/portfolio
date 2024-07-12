import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-full pt-20 pl-40 pb-20 gap-20 items-start">
      <div className="flex gap-5">
        <p
          className="text-4xl hover:text-gray-500"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
          onClick={() => {
            window.location.href = "mailto:deep.goyal@icloud.com";
          }}
        >
          <MdOutlineMailOutline />
        </p>

        <p
          className="text-4xl hover:text-gray-500"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
        >
          <IoDocumentTextOutline />
        </p>

        <p
          className="text-4xl hover:text-gray-500"
          onMouseEnter={() => document.body.classList.add("no-cursor")}
          onMouseLeave={() => document.body.classList.remove("no-cursor")}
          onClick={() => {
            window.open("https://www.linkedin.com/in/goyal-deep/", "_blank");
          }}
        >
          <FaLinkedin />
        </p>
      </div>

      <p className="goudy text-[10px]">
        © 2024 DEEP GOYAL. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
