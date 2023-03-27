import './Overview.css';
import Typed from "typed.js";

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
            <li><a href="#">Overview</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='heading'>Website is currently under maintenance</div>
      </div>
    </div>
  )
}

export default Overview