import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SocialBar from "./SocialBar/SocialBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SocialBar />
    </>
  );
};

export default Layout;
