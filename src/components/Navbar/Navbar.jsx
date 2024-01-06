import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCode, faTrophy, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {SiLinktree} from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='bg-[#141419] flex flex-col mt-20 h-[81.7vh] rounded-bl-[40px] w-[16rem]'>
        <div className='relative top-[15%] left-[18%] bottom-3/4 right-3/4 text-xl'>
            <div>
                <Link to="/" smooth>
                    <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home
                </Link>
            </div>
            <div className='mt-10'>
                <Link to="/about" smooth>
                    <FontAwesomeIcon icon={faInfoCircle}/>&nbsp;&nbsp;About
                </Link>
            </div>
            <div className='mt-10'>
                <Link to="/projects" smooth>
                    <FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;Projects
                </Link>
            </div>
            <div className='mt-10'>
                <Link to="/competencies" smooth>
                    <FontAwesomeIcon icon={faTrophy} />&nbsp;&nbsp;Competencies
                </Link>
            </div>
            <div className='mt-10'>
                <Link to="/contact" smooth>
                    <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Contact
                </Link>
            </div>
        </div>
        <div className='relative flex flex-wrap gap-10 top-60 left-10'>
            <Link to="https://github.com/aaronvincent6411" style={{ fontSize: "55px" }} target="_blank">
                <AiFillGithub/>
            </Link>
            <Link  to="https://www.linkedin.com/in/aaronvincent6411/" style={{ fontSize: "55px" }} target="_blank">
                <AiFillLinkedin/>
            </Link>
        </div>
        <div className='relative flex flex-wrap gap-10 top-72 left-10'>
            <Link  to="https://www.instagram.com/aaronvincent6411/" style={{ fontSize: "55px" }} target="_blank">
                <AiFillInstagram/>
            </Link>
            <Link  to="https://linktr.ee/aaronvincent11" style={{ fontSize: "55px" }} target="_blank">
                <SiLinktree/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar