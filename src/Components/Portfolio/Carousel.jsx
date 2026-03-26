import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";
import Pramodya_Mobile from '../../Assets/Pramodya_Mobile.webp'
import Amre from '../../assets/Amre.webp'
import Cargo_Ton from '../../assets/Cargo_Ton.webp'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "Pramodya Mobile E commerce website",
      description: "Pramodya Mobile is your trusted online store for quality mobile accessories at affordable prices. From cases and chargers to headphones and gadgets, we deliver everything you need to upgrade your mobile experience.",
      tags: ["WooCommerce", "Elementor", "RankMath", "WP Fastest Cache", "WP Fastest Cache", "Wordfence Security", "UpdraftPlus", "WPForms Lite"],
      image: Pramodya_Mobile,
    },
    {
      title: "Lightswind Design System",
      description:
        "Lightswind UI\nA complete, scalable design system with 150+ components for building modern, fast, and accessible UIs using Tailwind CSS and React.",
      tags: ["Design System", "Tailwind", "React", "UI Kit"],
      image: Amre ,
    },
    {
      title: "Collection",
      description: "by Framer Motion, ideal adxduct interfaces.",
      tags: ["Interactive"],
      image: Cargo_Ton,
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <motion.div
          className="carousel-slide"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-card card-web"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-image-wrapper">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
                <div className="card-tags">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

<button className="carousel-prev" onClick={prevSlide}>
  <ArrowBackIos />
</button>
<button className="carousel-next" onClick={nextSlide}>
  <ArrowForwardIos />
</button>

      <div className="carousel-dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
