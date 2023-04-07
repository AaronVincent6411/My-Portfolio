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
          <Link to="/projects"><AiFillProject />&nbsp; &nbsp;Projects</Link>
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