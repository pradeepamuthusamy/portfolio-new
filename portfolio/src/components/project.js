import React from "react";
import "./project.css"; // Import CSS

const projects = [

  {
    id: 2,
    title: "Weather App",
    description: "A React app that fetches real-time weather data from an API.",
    image: "https://i.pinimg.com/736x/03/1f/77/031f77523351dd5159a881ac89195fa4.jpg",
    link: "https://github.com/pradeepamuthusamy/weather",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "An online shopping platform with payment integration.",
    image: "https://i.pinimg.com/736x/4b/97/39/4b9739a1e12603e8df30f082162883d2.jpg",
    link: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
