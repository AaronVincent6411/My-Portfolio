import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {

    return(
        <div>
        <div className='inner-rectangle-8'>
            <div className="marquee">
                <ul className="marquee__content ">
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                </ul>
                <ul className="marquee__content">
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                    <li>&nbsp;Contact Me&nbsp;</li>
                </ul>
                </div>
            </div>
            <Link to='/'>
                <img src="https://live.staticflickr.com/65535/52783270220_87fdc16456_b.jpg" className='lionex-png'/>
            </Link>
            <div className='line'>
            </div>
        </div>
    );
}

export default Header