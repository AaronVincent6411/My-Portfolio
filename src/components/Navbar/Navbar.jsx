import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMail, AiFillProject } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import { IconName } from "react-icons/md";
import { GiAchievement, GiSkills } from "react-icons/gi"

function Navbar() {

  const Mobileview = window.innerWidth < 500;

  const [isSidepanelOpen, setSidepanelOpen] = useState(false);

  const toggleSidepanel = () => {
    setSidepanelOpen(!isSidepanelOpen);
  };

return(
  <div className="inner-rectangle">
    {Mobileview ? (
      // Mobile View
      <div>
      <button className="openbtn" onClick={toggleSidepanel}>
        &#9776;
      </button>
      <div className={`sidepanel ${isSidepanelOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSidepanel}>
          &times;
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidepanel}>
                <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Overview
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidepanel}>
                <FontAwesomeIcon icon={faInfoCircle} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleSidepanel}>
                <AiFillProject />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Projects
              </Link>
            </li>
            <li>
              <Link to="/competencies" onClick={toggleSidepanel}>
                <GiSkills />
                <GiAchievement />&nbsp;&nbsp;Competencies
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidepanel}>
                <AiOutlineMail />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      ) : (
        // Laptop and Desktop View
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome}/>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Overview
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle}/>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; About
          </Link>
        </li>
        <li>
          <Link to="/projects"><AiFillProject />&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Projects</Link>
        </li>
        <li>
          <Link to="/competencies"><GiSkills/><GiAchievement />&nbsp;&nbsp;Competencies</Link>
        </li>
        <li>
          <Link to="/contact"><AiOutlineMail/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Contact</Link>
        </li>
      </ul>
    </nav>
    )}
  </div>
 );
}

export default Navbar