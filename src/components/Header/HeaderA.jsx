import React from "react";
import './Header.css';
import resume from '../../assets/Resume.pdf'

function Header() {

    return(
        <div>
        <div className='inner-rectangle-8'>
            <div class="marquee">
                <ul class="marquee__content ">
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                </ul>
                <ul class="marquee__content">
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                    <li>&nbsp;About&nbsp;</li>
                </ul>
                </div>
            </div>
            <div className='img-rectangle'>
            </div>
            <a href='#'>
                <img src="https://live.staticflickr.com/65535/52783270220_87fdc16456_b.jpg" className='lionex-png'/>
            </a>
            <div className='profile'>
                <a href={ resume } download>
                    <img src='/src/assets/Profile.png'/>
                </a>
            </div>
            <div className='line'>
            </div>
        </div>
    );
}

export default Header