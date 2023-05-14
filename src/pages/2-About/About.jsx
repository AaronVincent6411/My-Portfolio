import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderA";
import './About.css'
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import resume from '../../assets/Resume.pdf'
import profile from '/src/assets/Profile.png';

function About() {

    const myself = useRef(null);

    useEffect(() => {
        const typed1 = new Typed(myself.current, {
          strings: ["I am Aaron P Laju , Third year Computer Science (AI) student from Adi Shankara Institute Of Engineering and Technology, Kalady. I am currently Technical Lead of Hackclub and Technical Co-Lead of Computer Society of India in my college. I am also a part of technical team of GDSC in my college. My basic programming languages are C++ and Python. My interested fields are Machine Learning and Cyber security. I am working on my personal project Litter Detection and team project SmartC(LMS). I have also done many projects at my high school and higher secondary level. I have also participated in different code debugging and competitive coding competitions. My current codechef rating is 1114."],
          startDelay: 200,
          typeSpeed: 20,
          backSpeed: 100,
          backDelay: 100,
          loop: false,
          showCursor: false,
        });
    return () => {
      typed1.destroy();
    };
  }, []);

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
                   <div className='heading'>About</div>
                   <Header/>
                   <div className='img-rectangle'>
                    <a href={ resume } download>
                        <img src={profile}/>
                    </a>
                   </div>
                   <div className="myself-rectangle">
                    <div className="h3-myself" ref={myself}></div>
                   </div>
                   <div className="age-rectangle">
                    <div className="age-h3">
                        Age
                    </div>
                    <div className="age-t1">
                        20
                    </div>
                   </div>
                   <div className="role-rectangle">
                    <div className="role-h3">
                        Role
                    </div>
                    <div className="role-t1">
                        Developer
                    </div>
                   </div>
                   <div className="place-rectangle">
                    <div className="place-h3">
                        Place
                    </div>
                    <div className="place-t1">
                        Kerala
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default About