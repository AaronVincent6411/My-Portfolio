import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {


return(
  <div className="inner-rectangle">
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome}/>&nbsp; &nbsp; Overview
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle}/>&nbsp; &nbsp; About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <div className="image">
              <img src='/src/assets/Projects-icon.png'/>&nbsp; &nbsp;Projects
            </div>
          </Link>
        </li>
        <li>
          <Link to="/timeline"><FaClock />&nbsp; &nbsp; Timeline</Link>
        </li>
        <li>
          <Link to="/contact"><AiOutlineMail/>&nbsp; &nbsp;  Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
 );
}

export default Navbar