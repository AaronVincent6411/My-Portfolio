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
          strings: ["I am Aaron P Laju, Final-year Computer Science (AI) student at Adi Shankara Institute Of Engineering and Technology, Kalady. Currently serving as the Community Lead of IEDC ASIET. I bring expertise as a former Technical Lead at Hackclub and Technical Co-Lead at Computer Society of India in my college. Proficient in React and Python. I specialize in Machine Learning. My portfolio includes impactful projects in ML and Web Development, demonstrating my versatility. I also engage in poster designing, showcasing my creative skills alongside my technical expertise. I actively participate in code debugging and competitive coding competitions which will help sharpen my problem-solving skills."],
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
            <div className="abt-container">
                <div className="abt-rectangle">
                   <Navbar/>
                   <div className='heading'>About</div>
                   <Header/>
                   <a href={ resume } download>
                    <div className='abt-img-rectangle'>
                        <img src={profile}/>
                    </div>
                   </a>
                   <div className="myself-rectangle">
                    <div className="h3-myself" ref={myself}></div>
                   </div>
                   <div className="age-rectangle">
                    <div className="age-h3">
                        Age
                    </div>
                    <div className="age-t1">
                        21
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