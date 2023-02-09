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

  const isMobile = window.innerWidth < 500;

  return (
    <div style={myStyle}>
      <div className="projects-container">
        <div className="projects-rectangle">
          <Navbar />
          <Header />
          <div className="projects-heading">Projects</div>
          <div className="slider-rectangle">
            <Slider/>
          </div>
          <div className='projects-rectangle-1'>
            {isMobile ? (
              <div className='projects-text-1'>
              Completed Projects
              <div className='projects-text-1-input'> 5 </div>
            </div>
          ) : (
            <div className='projects-text-1'>
            Completed Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
          </div>
          )}
        </div>
        <div className='projects-rectangle-2'>
        {isMobile ? (
              <div className='projects-text-2'>
              Currently Working
              <div className='projects-text-2-input'> 7 </div>
            </div>
          ) : (
          <div className='projects-text-2'>
            Currently Working&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7
          </div>
          )}
        </div>
        <div className='projects-rectangle-3'>
        {isMobile ? (
              <div className='projects-text-3'>
              Total Projects
              <div className='projects-text-3-input'> 12 </div>
            </div>
          ) : (
          <div className='projects-text-3'>
            Total Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12
          </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
