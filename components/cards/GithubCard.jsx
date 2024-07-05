import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@/styles/githubcard.css";

const GitHubCard = () => {
  return (
    <div
      className="githubCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <div className="logoContainer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default GitHubCard;
