import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderC";
import './Contact.css'
import ContactForm from "../../components/Form/Form";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import {SiLinktree} from "react-icons/si";

function Contact() {
    const myStyle = {
        background: 'linear-gradient(to right, #632636, #392A48)',
        height: '100vh',
        width: '100vw'
      };

    return(
        <div style={myStyle}>
            <div className="container">
                <div className="rectangle">
                   <Navbar/>
                   <Header/>
                   <div className='heading'>Contact</div>
                   <div className="contact-rectangle-1">
                    <img src="src/assets/contact-me.jpg"/>
                   </div>
                   <div className="contact-rectangle">
                    <h3>Connect me</h3>
                    <ContactForm/>
                   </div>
                   <div className="contact-rectangle-2">
                   <nav>
                    <ul>
                        <li>
                        <Link to="https://github.com/aaronvincent6411" style={{ fontSize: "60px" }} target="_blank">
                            <AiFillGithub/>
                        </Link>
                        </li>
                       <li>
                        <Link  to="https://www.linkedin.com/in/aaronvincent6411/" style={{ fontSize: "60px" }} target="_blank">
                            <AiFillLinkedin/>
                        </Link>
                        </li>
                        <li>
                        <Link  to="https://www.instagram.com/aaronvincent6411/" style={{ fontSize: "60px" }} target="_blank">
                            <AiFillInstagram/>
                        </Link>
                        </li>
                        <li>
                        <Link  to="https://linktr.ee/aaronvincent11" style={{ fontSize: "60px" }} target="_blank">
                            <SiLinktree/>
                        </Link>
                        </li>
                    </ul>
                   </nav>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Contact