import React from "react";
import './Certifications.css'
import Header from "../Header/HeaderCER";
import Navbar from "../Navbar/Navbar";

function Certifications() {
    const myStyle = {
        background: 'linear-gradient(to right, #632636, #392A48)',
        height: '100vh',
        width: '100vw'
      };

    return(
        <div style={myStyle}>
            <div className="container">
                <div className="rectangle">
                    <Header/>
                    <Navbar/>
                    <div className="heading">Certifications</div>
                    <div className="cer-rectangle-2">
                    <p1>1. Python For Data Science from NPTEL</p1>
                    <p1>2. Introduction to Tensorflow from Coursera</p1>
                    <p1>3. Intro to Machine Learning</p1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications