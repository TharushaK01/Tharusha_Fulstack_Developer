import React from "react";
import "./About.css";
import OrbitingSkills from "../../Components/About/OrbitingSkills";
import Experience from "../../Components/About/Experience";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <div className="about-para">
          <p>
            I’m a versatile Full-Stack Developer and Digital Designer passionate
            about building scalable web applications and creative brands. Skilled
            in React, Next.js, Angular, Node.js, Spring Boot, Laravel, WordPress,
            and Webflow. I create responsive, user-focused solutions. With
            experience in UI/UX design, branding, and SEO optimization, I blend
            technical expertise and creativity to deliver impactful digital
            experiences.
          </p>
        </div>
      </div>
      
      <div className="about-container">
        <div className="about-skills">
          <h3>Skills</h3>
          <OrbitingSkills />
        </div>

        <div className="about-work-experiences">
          <h3>Professional Timeline</h3>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;
