import './Overview.css';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useEffect, useRef } from "react";
import gif from '/src/assets/ScarceBrownCaimanlizard-size_restricted.gif';

function Overview () {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["Hi, I am Aaron"],
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
      showCursor: false,
      onComplete: () => {
        const typed2 = new Typed(el2.current, {
          strings: ["- Student"],
          startDelay: 400,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          loop: false,
          showCursor: false,
          onComplete: () => {
            const typed2 = new Typed(el3.current, {
              strings: ["- Poster designer"],
              startDelay: 600,
              typeSpeed: 100,
              backSpeed: 100,
              backDelay: 100,
              loop: false,
              showCursor: false,
              onComplete: () => {
                const typed2 = new Typed(el4.current, {
                  strings: ["- Developer"],
                  startDelay: 800,
                  typeSpeed: 100,
                  backSpeed: 100,
                  backDelay: 100,
                  loop: false,
                  showCursor: false,
                });
              },
            });
          },
        });
      },
    });
    return () => {
      typed1.destroy();
    };
  }, []);

  // el.current.style.fontSize = "32px";

return(
    <div className="container">
      <div className="rectangle">
        <div className='inner-rectangle'>
          <nav>
            <ul>
            <li><a href="/"><FontAwesomeIcon icon={faHome}/>&nbsp; &nbsp; Overview</a></li>
            <li>
              <a href="/about">
                <FontAwesomeIcon icon={faInfoCircle}/>&nbsp; &nbsp; About
              </a>
            </li>
            <li>
              <a href="/projects">
                <div className="image">
                  <img src='/src/assets/Projects-icon.png'/>&nbsp; &nbsp;Projects
                </div>
              </a>
            </li>
            <li><a href="/timeline"><FaClock />&nbsp; &nbsp; Timeline</a></li>
            <li><a href="/contact"><AiOutlineMail/>&nbsp; &nbsp;  Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='heading'>Overview</div>
        <div className='inner-rectangle-2'>
          <div className='text-2-1' ref={el1}></div>
          <div className='text-2-2' ref={el2}></div>
          <div className='text-2-3' ref={el3}></div>
          <div className='text-2-4' ref={el4}></div>
          <div className='gif'>
            <img src={gif}/>
          </div>
        </div>
        <div className='inner-rectangle-3'>
          <div className='text-3-1'>
            Known Languages and Frameworks
          </div>
          {/* <div className='red-dot'>
          </div>
          <div className='text-3-2'>
              C++
          </div>
          <div className='blue-dot'>
          </div>
          <div className='text-3-3'>
              Python
          </div>
          <div className='grey-dot'>
          </div>
          <div className='text-3-4'>
              C
          </div>
          <div className='yellow-dot'>
          </div>
          <div className='text-3-5'>
              Java
          </div>
          <div className='darkishblue-dot'>
          </div>
          <div className='text-3-6'>
              React
          </div> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='CPP'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='Python'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className='C'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='React'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='Java'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className='Flutter'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className='Pytorch'/>       
        </div>
        <div className='inner-rectangle-4'>
          <div className='text-4'>
            {/* <button onClick={Chat}>Chat with me</button> */}
            {/* <Chatw /> */}

          </div>
          <div className='text-4-2'>
          </div>
        </div>
        <div className='inner-rectangle-5'>
          <div className='text-5-1'>
            My Workspace
          </div>
          <div className='text-5-2'>
            <p>
              <img src="https://img.shields.io/badge/acer%20Aspire%203-83B81A?style=for-the-badge&logo=acer&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Intel%20Core_i5_8th-0071C5?style=for-the-badge&logo=intel&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Topcoder-29A7DF?style=for-the-badge&logo=Topcoder&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Datacamp-05192D?style=for-the-badge&logo=datacamp&logoColor=65FF8F" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Duolingo-58CC02?style=for-the-badge&logo=Duolingo&logoColor=white" />
		          &nbsp;
              <img src="https://img.shields.io/badge/freecodecamp-27273D?style=for-the-badge&logo=freecodecamp&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Brave-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Quora-%23B92B27.svg?&style=for-the-badge&logo=Quora&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/StackExchange-%23ffffff.svg?&style=for-the-badge&logo=StackExchange&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/replit-667881?style=for-the-badge&logo=replit&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Atom-66595C?style=for-the-badge&logo=Atom&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />
            </p>
          </div>
          <div className='text-5-3'>
            Current Designations
          </div>
          <div className='text-5-4'>
            <p>
              <img src="https://img.shields.io/badge/Technical%20Lead%20Hack%20Club-EC3750?style=for-the-badge&logo=Hack%20Club&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Technical Co Lead Computer Society Of India-EC3750.svg?&style=for-the-badge" />
            </p>
          </div>
        </div>
        <div className='inner-rectangle-6'>
        <div className='text-6'>
            Completed Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
          </div>
        </div>
        <div className='inner-rectangle-7'>
          <div className='text-7'>
            Current Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
          </div>
        </div>
        <div className='inner-rectangle-8'>
          <div class="marquee">
            <ul class="marquee__content ">
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
            </ul>
            <ul class="marquee__content">
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
              <li>&nbsp;My Portfolio&nbsp;</li>
            </ul>
          </div>
        </div>
        <div className='img-rectangle'>
        </div>
        <a href='#'>
          <img src="https://live.staticflickr.com/65535/52783270220_87fdc16456_b.jpg" className='lionex-png'/>
        </a>
        <a href="/about">
          <div className='profile'>
            <img src='/src/assets/Profile.png'/>
          </div>
        </a>
        <div className='line'>
        </div>
      </div>
    </div>
  )
}

export default Overview