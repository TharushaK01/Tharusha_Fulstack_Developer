import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import "./Experience.css";

const Experience = () => {
  const [items] = useState([
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
    {
      title: "Computer Science Degree",
      subtitle: "Sabaragamuwa University of Sri Lanka",
      date: "2020–2025",
      details: [
        "Bachelor of Science (Hons)",
        "Graduated with great honor, earning a 3.2 GPA.",
        "Focus in Full-Stack Development",
      ],
      skills: ["React.JS", "Angular", "Node.Js", "Spring Boot", "Java", "Python", "C++" ],
    },
  ]);

  const [collapsedStates, setCollapsedStates] = useState(
    Array(items.length).fill(true) // Start collapsed
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