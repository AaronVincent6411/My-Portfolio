import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderCO";
import './Competencies.css'
import Skills from '../../components/Skills/Skills';
import Achievements from "../../components/Achievements/Achievements";
import { Link } from "react-router-dom";

function Competencies() {
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
                   <div className='heading'>Competencies</div>
                   <div className="skills">
                    <Skills/>
                   </div>
                   <div className="acv-rectangle-1">
                    <h3>Achievements</h3>
                    <p1>1. Secured 3rd Prize in Malarvadi Competition in Sub-District Level </p1>
                    <p1>2. Secured 1st Prize in School level DCL Quiz Competition</p1>
                    <p1>3. Secured 1st Prize in Best Out of Waste at school level</p1>
                    <p1>4. Me, Anju and Ashwin Pradeep won 1st in Eloquor Cluster 3 conducted by IEEE</p1>
                    <p1>5. Me and my friend Anju got 3rd Prize in Debate competition conducted by NSS NITC</p1>
                    <div className="view-more">
                        <Link to="/achievements">
                            <button>View More</button>
                        </Link>
                    </div>
                  </div>
                  <div className="cer-rectangle-1">
                    <h3>Certifications</h3>
                    <p1>1. Python For Data Science from NPTEL</p1>
                    <p1>2. Introduction to Tensorflow from Coursera</p1>
                    <p1>3. Intro to Machine Learning</p1>
                    <div className="view-more">
                        <Link to="/certifications">
                            <button>View More</button>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Competencies