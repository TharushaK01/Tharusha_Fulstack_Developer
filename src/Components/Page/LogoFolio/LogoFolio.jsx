import React from 'react'
import { Link } from 'react-router-dom';
import './LogoFolio.css';
import Manulak from '../../../assets/Manulak.webp';
import Massa from '../../../assets/Massa.webp';
import Thawana from '../../../assets/Thawana.webp';

const projects = [
  {
    img: Manulak,
  },
   {
    img: Massa,
  },
   {
    img: Thawana,
  },

];


const LogoFolio = () => {
 return (
    <div className="logodesigns">
      <div className="logo-header">
        <h1>Logo Designs</h1>
        <ul className="logo-list">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>CoralDraw</li>
        </ul>
      </div>

      <div className="LogoFolio">
              <h2>Wordmarks Logofolio</h2>
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
    </div>
    </div>
  );
};

export default LogoFolio