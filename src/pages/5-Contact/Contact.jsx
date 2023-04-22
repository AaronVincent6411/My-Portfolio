import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/HeaderC";
import './Contact.css'
import ContactForm from "../../components/Form/Form";

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
                   <div className="contact-rectangle">
                    <h3>Connect me</h3>
                    <ContactForm/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Contact