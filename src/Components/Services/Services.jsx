import React from "react";
import "./Service.css";
import TargetCursor from "./TargetCursor";
import {
  GlowingCards,
  GlowingCard,
} from "../../Components/lightswind/glowing-cards";
import { Zap, Sparkles, Crown, Code, Palette, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";
import { CountUp } from "../../Components/lightswind/count-up";

const Services = () => {
  return (
    <div className="services">
      <h2>My Services</h2>

      <div className="services-row">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <GlowingCards>
          <GlowingCard glowColor="#000cff">
            <Code className="w-6 h-6 text-amber-500" />
            <h3>Web Development</h3>

            <p>
              Building responsive and dynamic websites using modern
              technologies..
            </p>
            <Link to="/web-folio" style={{ textDecoration: "none" }}>
              <div className="readmore" style={{ color: "#fff" }}>
                Read More &rarr;
              </div>
            </Link>
          </GlowingCard>
        </GlowingCards>

        <GlowingCards>
          <GlowingCard glowColor="#000cff">
            <Palette className="w-6 h-6 text-amber-500" />
            <h3>Flyer & Banner Design </h3>

            <p>
              Design professional flyers & banner tailored to your brand and
              audience...
            </p>
            <Link to="/flayer-folio" style={{ textDecoration: "none" }}>
              <div className="readmore" style={{ color: "#fff" }}>
                Read More &rarr;
              </div>
            </Link>
          </GlowingCard>
        </GlowingCards>

        <GlowingCards
          enableGlow={true}
          glowRadius={30}
          glowOpacity={0.8}
          animationDuration={500}
          gap="3rem"
          responsive={true}
        >
          <GlowingCard glowColor="#000cff" className="space-y-4">
            <div className="flex items-center space-x-2">
              <Paintbrush className="w-6 h-6 text-amber-500" />

              <h3>Logo Design</h3>
            </div>

            <p>
              Designing modern and memorable logos that define your brand
              identity...
            </p>
            <Link to="/logo-folio" style={{ textDecoration: "none" }}>
              <div className="readmore" style={{ color: "#fff" }}>
                Read More &rarr;
              </div>
            </Link>
          </GlowingCard>
        </GlowingCards>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <CountUp value={2} suffix="+"className="count-up"/>
          <p className="stat-text">Years of Experience</p>
        </div>
        <hr className="stat-divider" />
        <div className="stat-item">
          <CountUp value={40} suffix="+" className="count-up"/>
          <p className="stat-text">Projects Completed</p> 
        </div>
          <hr className="stat-divider" />
        <div className="stat-item">
           <CountUp value={30} suffix="+" className="count-up"/>
          <p className="stat-text">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
