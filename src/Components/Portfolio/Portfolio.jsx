import React, { useState } from 'react'
import './Portfolio.css'
import Hasitha from '../../assets/Hasitha_1.webp'
import Hashan from '../../assets/Hashan_1.webp'
import Kasun from '../../assets/Kasun_1.webp'
import Massa from '../../assets/Massa.webp'
import Manulak from '../../assets/Manulak.webp'
import Thawana from '../../assets/Thawana.webp'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'


const Portfolio = () => {

  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>

      <div className="type-folio">

        <div className="foliorow">
          <h3>Web Folio</h3>
         <Carousel/>
        </div>

        <div className="foliorow">
          <h3>Flyer Folio</h3>
          <div className="folio">
            <div className="card">
              <img src={Hasitha} alt=''/>
            </div>
            <div className="card">
              <img src={Hashan} alt=''/>
            </div>
            <div className="card">
              <img src={Kasun} alt=''/>
            </div>
          </div>
          <div className="see_more"><Link to="/flayer-folio">See More &rarr;</Link></div>
        </div>

        <div className="foliorow">
          <h3>Logo Folio</h3>
          <div className="folio">
            <div className="card">
              <img src={Massa} alt=''/>
            </div>
            <div className="card">
              <img src={Manulak} alt=''/>
            </div>
            <div className="card">
              <img src={Thawana} alt=''/>
            </div>
          </div>
          <div className="see_more"><Link to="/logo-folio">See More &rarr;</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
