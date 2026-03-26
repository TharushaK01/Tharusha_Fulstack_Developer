import React, { useRef, useState, useEffect } from "react";
import "./Experience.css";

const TimelineItem = ({
  title,
  subtitle,
  date,
  details,
  skills,
  isCollapsed,
  onToggle,
}) => {
  const titleRef = useRef(null);
  const [collapsedHeight, setCollapsedHeight] = useState("auto");

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.offsetHeight;
      const subtitleHeight = subtitle ? 20 : 0;
      const padding = 20 * 2;
      setCollapsedHeight(titleHeight + subtitleHeight + padding);
    }
  }, [subtitle]);

  return (
    <div
      className={`timeline-item ${isCollapsed ? "collapsed" : "expanded"}`}
      style={{ height: isCollapsed ? collapsedHeight : "auto" }}
    >
      <div className="header">
        <div className="title-section">
          <div className="title" ref={titleRef}>
            {title}
          </div>
          {subtitle && <div className="subtitle">{subtitle}</div>}
        </div>

        <div className="right-section">
          <span className="date">{date}</span>
          <span
            className={`toggle-btn ${isCollapsed ? "" : "open"}`}
            onClick={onToggle}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color"
            >
              <polyline
                points={isCollapsed ? "5 15 12 8 19 15" : "5 8 12 15 19 8"}
                style={{
                  fill: "none",
                  stroke: "rgb(44, 169, 188)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Details & Skills: show only if expanded */}
      {!isCollapsed && (
        <>
          <div className="details">
            {details.map((detail, index) => (
              <div key={index}>&bull; {detail}</div>
            ))}
          </div>

          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
