"use client";

import React, { useState } from "react";
import { cn } from "../lib/utils";
import "./glowing-cards.css"; // 👈 import CSS file


export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // fallback if no rainbow
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "#3b82f6",
}) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // spotlight position (0–100%)
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });

    // parallax tilt
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const rotateX = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 }); // reset tilt
  };

  return (
    <div
      className={cn("glowing-card", className)}
      style={
        {
          "--glow-color": glowColor,
          "--mouse-x": `${pos.x}%`,
          "--mouse-y": `${pos.y}%`,
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span className="glow-overlay" />
    </div>
  );
};

export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  className,
}) => {
  return <div className={cn("glowing-cards", className)}>{children}</div>;
};
