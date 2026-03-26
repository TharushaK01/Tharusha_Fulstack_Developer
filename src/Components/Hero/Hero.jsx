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
          <div className="hero-connect">Connect With Me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;