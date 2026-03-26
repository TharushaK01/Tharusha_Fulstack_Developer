import React from "react";
import { Link } from "react-router-dom";
import "./FlayerFolio.css";
import sandikala from "../../../assets/sandikala-dadu.webp";
import grade from "../../../assets/2026-grade-6-2.webp";
import CDsuthrya from "../../../assets/CD-suthrya7.webp";
import online from "../../../assets/online-paper-class11.webp";
import hasithasir from "../../../assets/hasithasir.webp";
import ekstath from "../../../assets/Eksath-post3.webp";
import rapid from "../../../assets/Rapid-Revision3.webp";
import Hashan_1 from "../../../assets/Hashan_1.webp";
import Tharkabasha from "../../../assets/Tharkabasha-seminar.webp";
import Logic from "../../../assets/Logic-dilshan-sir-hand-bill-rathnapura.webp";
import ekhandbil from "../../../assets/Eksath-hand-bill.webp";
import nadun from "../../../assets/nadudnsir.webp";
import book1 from "../../../assets/book1.webp";
import book2 from "../../../assets/book2.webp";
import book3 from "../../../assets/book3.webp";

const projects = [
  {
    img: sandikala,
  },
  {
    img: grade,
  },
  {
    img: CDsuthrya,
  },
  {
    img: online,
  },
  {
    img: hasithasir,
  },
  {
    img: ekstath,
  },
  {
    img: rapid,
  },
  {
    img: Hashan_1,
  },
  {
    img: Tharkabasha,
  },
];

const wordpressProjects = [
  {
    img: Logic,
  },
  {
    img: ekhandbil,
  },
  {
    img: nadun,
  },
];

const WebflowProjects = [
  {
    img: book1,
  },
  {
    img: book2,
  },
  {
    img: book3,
  },
];

const FlayerFolio = () => {
  return (
    <div className="flayerdesigns">
      <div className="flayer-header">
        <h1>Flyer Designs</h1>
        <ul className="flyer-list">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>CoralDraw</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>CapCut</li>
          <li>Davinci Resolve</li>
          <li>Audacity</li>
        </ul>
      </div>

      <div className="FlyerFolio">
        <h2>Sociala Media Flyerfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {projects.map((project, index) => (
                <div className="box hover-zoom" key={index}>
                  <img src={project.img} alt={`book-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="see_more"><Link to="https://www.facebook.com/TKAProducts"  target="_blank" >See More &rarr;</Link></div>

        <h2>Handbillfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {wordpressProjects.map((project, index) => (
                <div className="box hover-zoom" key={index}>
                  <img src={project.img} alt={`book-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
<div className="see_more"><Link to="https://www.facebook.com/TKAProducts"  target="_blank" >See More &rarr;</Link></div>

        <h2>Book Coverfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              {WebflowProjects.map((project, index) => (
                <div className="box hover-zoom" key={index}>
                  <img src={project.img} alt={`book-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
<div className="see_more"><Link to="https://www.facebook.com/TKAProducts"  target="_blank" >See More &rarr;</Link></div>

      </div>
    </div>
  );
};

export default FlayerFolio;
