import React from "react";
import projectsData from "@/app/data/projectsData";
import CanvasBackground from "@/app/components/CanvasBackground";
import NavBar from "@/app/components/NavBar";

const ProjectDescription = ({ projectId }) => {
  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white dark:bg-white dark:text-black">
      <CanvasBackground />
      <NavBar />

      <section className="min-h-screen flex flex-col justify-center items-center p-20 bg-black text-white dark:bg-white dark:text-black">
        <h2 className="text-7xl mb-20">{project.name}</h2>
        <div className="w-full max-w-4xl space-y-4">
          <p className="text-2xl">{project.description}</p>
          <div className="flex items-center space-x-4">
            {project.techStack.map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                height={40}
                width={40}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDescription;
