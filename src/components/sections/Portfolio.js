import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "../ProjectCard";

export default function Portfolio() {
  return (
    <section className="portfolio-section">

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
