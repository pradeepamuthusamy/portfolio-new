import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy styles
import "./skills.css";

// Example tech stack data with descriptions
const techStacks = [
  {
    name: "React.js",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-1024.png",
    description: "JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png",
    description: "NoSQL database for scalable applications.",
  },
  {
    name: "Express.js",
    icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    description: "Web application framework for Node.js.",
  },
  {
    name: "HTML5",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/167_Html5_logo_logos-512.png",
    description: "Standard language for creating web pages.",
  },
  {
    name: "CSS3",
    icon: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
    description: "Style sheet language for designing web pages.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn0.iconfinder.com/data/icons/logos-21/40/javascript-512.png",
    description: "The programming language of the web.",
  },
  {
    name: "Java",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    description: "A versatile programming language for backend and desktop apps.",
  },
];

const Skills = () => {
  return (
    <div className="tech-stacks-container">
      <div className="tech-stack-cont">
      <h2 className="tech-stacks-title">TECH STACK</h2>
      
      <div className="tech-stacks-grid">
        {techStacks.map((tech, index) => (
          <Tippy key={index} content={tech.description} placement="bottom">
            <div className="tech-stack-item">
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-stack-icon"
              />
              <span className="tech-stack-name">{tech.name}</span>
            </div>
          </Tippy>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
