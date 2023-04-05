import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderP";

function Projects() {
    const myStyle = {
        background: 'linear-gradient(to right, #632636, #392A48)',
        height: '100vh',
        width: '100vw'
      };

    return(
        <div style={myStyle}>
            <div className="container">
                <div className="rectangle">
                   <Navbar/>
                   <Header/>
                   <div className='heading'>Projects</div>
                </div>
            </div>
        </div>
    );
}

export default Projects