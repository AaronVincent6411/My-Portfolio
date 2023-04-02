import './Overview.css';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Marquee = ({ text }) => {
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition < -textWidth) {
          return containerWidth;
        }
        return prevPosition - 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [containerWidth, textWidth]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleContainerResize = (e) => {
    setContainerWidth(e.target.offsetWidth);
  };

  const handleTextResize = (e) => {
    setTextWidth(e.target.offsetWidth);
  };

  return (
    <div
      className="marquee-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onResize={handleContainerResize}
    >
      <div
        className="marquee-text"
        style={{ transform: `translateX(${position}px)` }}
        onResize={handleTextResize}
      >
        {text}
      </div>
    </div>
  );
};

function Overview () {
//   useEffect(() => {
//     const typed = new Typed(el.current, {
//         strings: ["Website is currently under maintenance"], 
//         startDelay: 200,
//         typeSpeed: 100,
//         backSpeed: 100,
//         backDelay: 100,
//         loop: false,
//     });
//     return () => {
//         typed.destroy();
//     };
// }, []);
// const el = useRef(null);

return(
    <div className="container">
      <div className="rectangle">
        <div className='inner-rectangle'>
          <nav>
            <ul>
            <li><a href="#"><FontAwesomeIcon icon={faHome}/>&nbsp; &nbsp; Overview</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInfoCircle}/>&nbsp; &nbsp; About</a></li>
            <li>
              <a href="#">
                <div className="image">
                  <img src='/src/assets/Projects-icon.png'/>&nbsp; &nbsp;Projects
                </div>
              </a>
            </li>
            <li><a href="#"><FaClock />&nbsp; &nbsp; Timeline</a></li>
            <li><a href="#"><AiOutlineMail/>&nbsp; &nbsp;  Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='heading'>Website is currently under maintenance</div>
        <div className='inner-rectangle-2'>
        </div>
        <div className='inner-rectangle-3'>
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
          {/* <div class="marquee-container-1">
            <div class="marquee">
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
            </div>
          </div>
          <div class="marquee-container-2">
            <div class="marquee">
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
              <span>My portfolio</span>
            </div>
          </div> */}
          {/* <div className="App">
            <Marquee text="My Portfolio" />
            <Marquee text="My Portfolio" />
          </div> */}
        </div>
        <div className='img-rectangle'>
        </div>
        <a href='#'>
          <img src="https://live.staticflickr.com/65535/52783270220_87fdc16456_b.jpg" className='lionex-png'/>
        </a>
        <a href="#">
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