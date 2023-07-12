import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMail, AiFillProject } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css'
import projectIcon from '../../assets/Projects-icon.png'

// import { IconName } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiAchievement, GiSkills } from "react-icons/gi"

function Navbar() {

  const Mobile = window.innerWidth < 426;

return(
  <div className="inner-rectangle">
    {Mobile ? (
      // Mobile View
        <div className="menu-toogle">
        <nav>
          <ul>
          <button>
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
            </button>
          </ul>
        </nav>
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