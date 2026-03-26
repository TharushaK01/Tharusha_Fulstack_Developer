import React from 'react';
import './OrbitingSkills.css';
import Angular from '../../assets/skills/angular-svgrepo-com.svg';
import Reactjs from '../../assets/skills/react-svgrepo-com.svg';
import Node from '../../assets/skills/nodejs-icon-svgrepo-com.svg';
import Spring from '../../assets/skills/spring-icon-svgrepo-com.svg';
import Laravel from '../../assets/skills/laravel-svgrepo-com.svg';
import Wordpress from '../../assets/skills/wordpress-color-svgrepo-com.svg';
import Webflow from '../../assets/skills/webflow-svgrepo-com.svg';
import Figma from '../../assets/skills/figma-svgrepo-com.svg';

const skills = [
  { name: 'React', icon: Reactjs },
  { name: 'Angular', icon: Angular },
  { name: 'Node.js', icon: Node },
  { name: 'Spring Boot', icon: Spring },
  { name: 'Laravel', icon: Laravel },
  { name: 'WordPress', icon: Wordpress },
  { name: 'Webflow', icon: Webflow },
  { name: 'Figma', icon: Figma },
];

const SkillsCircle = () => {
  return (
    <div className="skills-container">
      {/* <div className="center-icon">
        <span className="code-icon">{'< >'}</span>
      </div> */}
      <div className="skills-wheel">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radius = window.innerWidth <= 600 ? 90 : 120;
          const top = `calc(50% - ${radius}px * ${Math.sin((angle * Math.PI) / 180)})`;
          const left = `calc(50% + ${radius}px * ${Math.cos((angle * Math.PI) / 180)})`;
          return (
            <div
              key={skill.name}
              className="skill-item"
              style={{ top, left }}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <div className="skill-name">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCircle;