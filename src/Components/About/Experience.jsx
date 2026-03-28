import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import "./Experience.css";

const Experience = () => {
  const [items] = useState([
        {
      title: (
        <>
          WordPress & Shopify Specialist
          <br /> (Hybrid)
        </>
      ),
      subtitle: "Torch Labs Software, USA",
      date: "11.2025–Present",
      details: [
        "Developed high-converting WordPress & Shopify solutions using custom PHP, Liquid, and JS to enhance user engagement.",
        "Architected stable server environments with real-time Grafana monitoring and proactive maintenance for maximum uptime.",
        "Optimized Core Web Vitals and SEO through technical performance tuning and schema implementation for global brands.",
        "Managed end-to-end site reliability, including secure hosting, version control, and regular security audits.",
      ],
      skills: ["WordPress", "PHP", "CSS", "JavaScript", "Divi", "Elementor", "SEO", "Shopify", "Liquid", "Grafana", "Server Management"],
    },
    {
      title: (
        <>
          Web Development Intern
          <br /> (Remote)
        </>
      ),
      subtitle: "Web Market Florid, USA",
      date: "01.2025–07.2025",
      details: [
        "Built responsive WordPress sites with custom HTML, CSS, JS, and PHP",
        "Optimized SEO and Core Web Vitals for performance and visibility",
        "Managed plugins, hosting, and version control in Agile workflow",
      ],
      skills: ["WordPress", "PHP", "CSS", "JavaScript", "Divi", "Elementor", "SEO" ],
    },
    {
      title: (
        <>
          Brand Designer & <br /> Social Media Coordinator
        </>
      ),
      subtitle: "TKA Products, Sri Lanka",
      date: "06.2022–Present",
      details: [
        "Delivered cohesive branding across print & digital media",
        "Created motion & video content for social platforms",
        "Executed performance-driven digital ad campaigns & data analysis",
      ],
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects"],
    },
  ]);

  const [collapsedStates, setCollapsedStates] = useState(
    Array(items.length).fill(true) 
  );

  const handleToggle = (index) => {
    const newStates = [...collapsedStates];
    newStates[index] = !newStates[index];
    setCollapsedStates(newStates);
  };

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          details={item.details}
          skills={item.skills}
          isCollapsed={collapsedStates[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Experience;