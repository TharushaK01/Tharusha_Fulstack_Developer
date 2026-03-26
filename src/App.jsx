import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import SocialBar from './Components/SocialBar/SocialBar'
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider'
import WebFolio from './Components/Page/WebFolio/WebFolio';
import FlayerFolio from './Components/Page/FlayerFolio/FlayerFolio';
import LogoFolio from './Components/Page/LogoFolio/LogoFolio';
import Layout from './Components/Layout';


const App = () => {
  return (
  <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <TestimonialSlider />
              <Contact />
          
            </Layout>
          }
        />

        {/* Other routes use same Layout */}
        <Route
          path="/web-folio"
          element={
            <Layout>
              <WebFolio />
            </Layout>
          }
        />

        <Route
          path="/flayer-folio"
          element={
            <Layout>
              <FlayerFolio />
            </Layout>
          }
        />

        <Route
          path="/logo-folio"
          element={
            <Layout>
              <LogoFolio />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
export default App