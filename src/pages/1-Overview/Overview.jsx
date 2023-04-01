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
        </div>
        <div className='inner-rectangle-5'>
        </div>
        <div className='inner-rectangle-6'>
        <div className='text-6'>
            Completed Projects&nbsp; &nbsp;&nbsp; &nbsp;2
          </div>
        </div>
        <div className='inner-rectangle-7'>
          <div className='text-7'>
            Current Projects&nbsp; &nbsp;&nbsp; &nbsp;4
          </div>
        </div>
        <div className='inner-rectangle-8'>
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