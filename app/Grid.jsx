import React from "react";
import Education from "./cards/Education";
import Number from "./cards/Number";
import GPACard from "./cards/GPACard";
import InternCard from "./cards/InternCard";
import FECard from "./cards/FECard";
import Typography from "./cards/Typography";
import SushiScroll from "./cards/SushiScroll";
import GitHubCard from "./cards/GithubCard";
import OSNCard from "./cards/OSNCard";
import GifCard from "./cards/GifCard";
import BlogsCard from "./cards/BlogsCard";
import TACard from "./cards/TACard";

const Grid = () => {
  return (
    <div className="flex flex-col gap-4 pt-20 ml-4">
      <div className="flex flex-wrap gap-4 justify-center items-start">
        <div className="flex flex-col gap-4">
          <Education />
          <Number />
        </div>
        <div className="flex flex-col gap-4">
          <GPACard />
          <InternCard />
        </div>
        <FECard />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-4">
          <Typography />
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4">
              <SushiScroll />
              <GitHubCard />
            </div>
            <OSNCard />
          </div>
        </div>
        <GifCard />
      </div>

      <div className="flex flex-wrap gap-4">
        <BlogsCard />
        <TACard />
      </div>
    </div>
  );
};

export default Grid;
