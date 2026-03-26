import React from "react";
import { Link } from "react-router-dom";
import "./WebFolio.css";
import Pramodya_Mobile from "../../../assets/Pramodya_Mobile.webp";
import Amre from "../../../assets/Amre.webp";
import Cargo_Ton from "../../../assets/Cargo_Ton.webp";
import Cargo_Ton2 from "../../../assets/Cargo_Ton2.webp";
import Groopy from "../../../assets/groopy.webp";
import Port from "../../../assets/oldprotfoio.webp";
import Frank from "../../../assets/frankchawe.webp";
import AG from "../../../assets/Agproducts.webp";
import HD from "../../../assets/HDCamera.webp";
import Closet from "../../../assets/closetenvee.webp";
import Golden from "../../../assets/goldenlush.webp";
import Employee from "../../../assets/emp_mangmnt.webp";
import Player from "../../../assets/music_player.webp";
import Todo from "../../../assets/todo_list.webp";
import Item from "../../../assets/itm_mngmnt.webp";
import Age from "../../../assets/agecalculator.webp"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    img: Cargo_Ton,
    title: "Cargo Ton Website",
    tech: ["React.js", "Vite", "HTML5", " CSS3", "JavaScript (ES6+)"],
    github: "https://github.com/TharushaK01/CargoTon.git",
    live: "https://tharushak01.github.io/CargoTon/",
  },
  {
    img: Cargo_Ton2,
    title: "Cargo Ton Website",
    tech: ["React.js", "Vite", "HTML5", " CSS3", "JavaScript (ES6+)"],
    github: "https://github.com/TharushaK01/Cargo_Ton",
    live: "https://tharushak01.github.io/Cargo_Ton/",
  },
  {
    img: Groopy,
    title: "A Group Booking Website",
    tech: ["Angular", "Node.js", "Firebase", "TypeScript", "HTML5", "CSS3"],
    github: "https://github.com/TharushaK01/Groopy",
    // live: "#",
  },
  {
    img: Port,
    title: "Portfolio Website",
    tech: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/TharushaK01/TKA_Portfolio",
    // live: "#",
  },
  {
    img: Frank,
    title: "Frank Chawe Website",
    tech: ["HTML5", "JavaScript (ES6+)", "SCSS"],
    github: "https://github.com/TharushaK01/Frank_chawe",
    live: "https://frankchawe.co.tz/",
  },
  {
    img: AG,
    title: "AG Products",
    tech: ["HTML5", "JavaScript (ES6+)", "SCSS"],
    github: "https://github.com/TharushaK01/AGProducts",
    live: "https://agproducts.co.tz/",
  },
];

const wordpressProjects = [
  {
    img: Pramodya_Mobile,
    title: "Pramodya Mobile",
    tech: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL"],
    live: "https://pramodyamobile.xo.je/?i=1",
  },
  {
    img: HD,
    title: "HDCameraUSA",
    tech: ["WordPress", "Divi", "CSS", "JavaScript", "PHP", "MySQL"],
    // github: "#",
    live: "https://www.hdcamera.todayfinancing.com/",
  },
  {
    img: Closet,
    title: "Closet Envee",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript", "PHP", "MySQL"],
    // github: "#",
    live: "https://trainee.todayfinancing.com/closetenvee/",
  },
  {
    img: Golden,
    title: "Closet Envee",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript", "PHP", "MySQL"],
    // github: "#",
    live: "https://goldenlushserum.com/",
  },
];

const WebflowProjects = [
  {
    img: Amre,
    title: "Amre",
    tech: ["Webflow"],
    // github: "#",
    live: "https://amreaestheticswellnes.webflow.io/",
  },
];
const fullstackProjects = [
  {
    img: Employee,
    title: "Employee Management System",
    tech: ["Angular", "Spring Boot ", "MySQL"],
    github: "https://github.com/TharushaK01/Employee_Management_System",
    // live: "#",
  },
  {
    img: Player,
    title: "React Music Player",
    tech: ["React", "CSS3", "JavaScript (ES6+)"],
    github: "https://github.com/TharushaK01/React_Music_Player",
    // live: "#",
  },
  {
    img: Item,
    title: "Item Management System",
    tech: ["Angular", "Spring Boot ", "MySQL"],
    github: "https://github.com/TharushaK01/ItemManagementSystem",
    // live: "#",
  },
  {
    img: Todo,
    title: "Angular ToDo Application",
    tech: ["Angular", "TypeScript", "Firebase"],
    github: "https://github.com/TharushaK01/AngularToDoApp_Firebase",
    // live: "#",
  },
    {
    img: Age,
    title: "Age Calculator React App",
    tech: ["React", "CSS", "JavaScript (ES6+)"],
    github: "https://github.com/TharushaK01/AgeCalculatorReact",
    // live: "#",
  },
];

const WebFolio = () => {
  return (
    <div className="webdeveopments">
      <div className="webdev">
        <h1>Web Development</h1>
        <ul className="webdev-list">
          <li>React</li>
          <li>Angular</li>
          <li>Next.js</li>
          <li>Spring Boot</li>
          <li>Node.js</li>
          <li>Java Script</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>PostgreSQL</li>
          <li>WordPress</li>
          <li>Webflow</li>
          <li>Shopify</li>
          <li>AdobeXD</li>
          <li>Figma</li>
        </ul>
      </div>

      <div className="Dynamic_Webfolio">
        <h2>Dynamic Webfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {projects.map((project, index) => (
                <div className="box" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="icon">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="webdev-icon" />
                        </a>
                      )}
                      {project.live && project.live.trim() !== "" && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <FaExternalLinkAlt className="webdev-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2>WordPress Webfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {wordpressProjects.map((project, index) => (
                <div className="box" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="icon">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="webdev-icon" />
                        </a>
                      )}
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="webdev-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2>Webflow Webfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {WebflowProjects.map((project, index) => (
                <div className="box" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="icon">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="webdev-icon" />
                        </a>
                      )}
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="webdev-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2>Fullstack Webfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {fullstackProjects.map((project, index) => (
                <div className="box" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="icon">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="webdev-icon" />
                        </a>
                      )}
                      {project.live && project.live.trim() !== "" && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <FaExternalLinkAlt className="webdev-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFolio;
