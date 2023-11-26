"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "Rick & Morty",
    description: "Individual Project, HENRY, 2023. SPA using React, NodeJS, Express and CSS Frameworks.",
    image: "/public/Projects/Rick&Morty.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MVCorreas/Proyecto-Integrador",
    previewUrl: "https://www.youtube.com/watch?v=miwCapuD9f8",
  },
  {
    id: 2,
    title: "Countrypedia",
    description: "Individual Project, HENRY, 2023. SPA using React, NodeJS, Express, SQL and CSS Frameworks.",
    image: "/public/Projects/Countrypedia.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/MVCorreas/ProyectoIntegrador-Countries",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Woofer",
    description: "Group Project, HENRY, 2023. SPA using NextJS, Express, SQL, Bootstrap, among others.",
    image: "/public/Projects/Rick&Morty.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/MVCorreas/Proyecto-Integrador",
    previewUrl: "https://www.youtube.com/watch?v=miwCapuD9f8",
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;