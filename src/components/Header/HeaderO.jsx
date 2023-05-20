import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <div>
        <div className='inner-rectangle-8'>
            <div class="marquee">
                <ul class="marquee__content ">
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                </ul>
                <ul class="marquee__content">
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
                    <li>&nbsp;My Portfolio&nbsp;</li>
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