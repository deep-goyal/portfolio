import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/githubcard.css";

const GitHubCard = () => {
  return (
    <div className="githubCard">
      <div className="logoContainer">
        <FontAwesomeIcon icon={faGithub} size="5x" />
      </div>
    </div>
  );
};

export default GitHubCard;
