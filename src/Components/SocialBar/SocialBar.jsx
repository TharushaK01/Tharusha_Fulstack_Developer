import React from "react";
import "./SocialBar.css";
import git from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import medium from "../../assets/medium.svg";
import x from "../../assets/x.svg";
import facebook from "../../assets/facebook.svg";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <ul>
        <li><a href="https://github.com/TharushaK01" target="_blank"><img src={git} alt="GitHub" /></a></li>
        <li><a href="https://linkedin.com/in/tharusha-fullstackdeveloper" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></li>
        <li><a href="https://web.facebook.com/tharusha.kavinda.3/" target="_blank"><img src={facebook} alt="X" /></a></li>
        <li><a href="https://medium.com/@tharushakavinda01" target="_blank"><img src={medium} alt="Medium" /></a></li>
        <li><a href="https://x.com/KavindaTharusha" target="_blank"><img src={x} alt="X" /></a></li>
      </ul>
    </div>
  );
};

export default SocialBar;
