import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.webp';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          <span>I'm Tharusha Kavinda</span> | Full Stack Developer • Digital Designer • Brand Creator
        </h1>
        <p>Full stack developer and digital designer, building scalable web apps and creative brands.</p>
        <div className="hero-action">
          <div><a href='#contact' className="hero-connect">Connect With Me</a></div>
          <div><a href='https://drive.google.com/file/d/1PZyBTnf2kK-Ev4z21XjkMwkB9Qg5tSQj/view?usp=sharing' className="hero-resume" target='blank'>My Resume</a></div>
        </div>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;