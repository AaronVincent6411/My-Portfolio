import './Overview.css';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


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
            <li><a href="#"><div className="image">
              <img src='/src/assets/Projects-icon.png'/>&nbsp; &nbsp;Projects
              </div></a></li>
            <li><a href="#"><FaClock />&nbsp; &nbsp; Timeline</a></li>
            <li><a href="#"><AiOutlineMail/>&nbsp; &nbsp;  Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='heading'>Website is currently under maintenance</div>
        <div className='inner-rectangle-2'>
        </div>
      </div>
    </div>
  )
}

export default Overview