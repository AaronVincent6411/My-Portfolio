import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderP";
import "./Projects.css";
import Slider from "../../components/Swiper/Swiper";

function Projects() {
  const myStyle = {
    background: "linear-gradient(to right, #632636, #392A48)",
    height: "100vh",
    width: "100vw",
  };
  
  const sliderStyle = {
    marginLeft: "55%",
  }

  return (
    <div style={myStyle}>
      <div className="container">
        <div className="rectangle">
          <Navbar />
          <Header />
          <div className="heading">Projects</div>
          <div className="slider-rectangle">
            <Slider/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
