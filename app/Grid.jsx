import React, { useEffect, useRef } from "react";
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
import "../styles/grid.css";

const Grid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="row">
        <div className="column">
          <Education />
          <Number />
        </div>
        <div className="column">
          <GPACard />
          <InternCard />
          <GitHubCard />
        </div>
        <div className="column">
          <FECard />
          <BlogsCard />
        </div>
        <div className="column">
          <GifCard />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Typography />
          <SushiScroll />
        </div>
        <div className="column">
          <OSNCard />
        </div>
        <div className="column">
          <TACard />
        </div>
      </div>
    </div>
  );
};

export default Grid;
