import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Footer from "./Footer";

const Site = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Site;
