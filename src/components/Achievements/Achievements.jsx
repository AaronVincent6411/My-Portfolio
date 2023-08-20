import React from "react";
import './Achievements.css'
import Header from "../Header/HeaderACV";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

function Achievements() {
    const myStyle = {
        background: 'linear-gradient(to right, #632636, #392A48)',
        height: '100vh',
        width: '100vw'
      };

    const desc = [
        {
            id:1,
            description:'1. Secured 3rd Prize in Malarvadi Competition in Sub-District Level '
        },
        {
            id:2,
            description:'2. Secured 1st Prize in School level DCL Quiz Competition'
        },
        {
            id:3,
            description:'3. Secured 1st Prize in Best Out of Waste at school level'
        },
        {
            id:4,
            description:'4. Me, Anju and Ashwin Pradeep won 1st in Eloquor Cluster 3 conducted by IEEE'
        },
        {
            id:5,
            description:'5. Me and my friend Anju got 3rd Prize in Debate competition conducted by NSS NITC'
        },
        {
            id:6,
            description:'6. Secured consolation prize in PPT making competition conducted by NSS ASIET'
        },
        {
            id:7,
            description:'7. Secured 1st Prize in Idea Pitching Competition in associated with Dextra22'
        },
        {
            id:8,
            description:'8. Secured 1st Prize in Poster Designing Competition in associated with Aloha22'
        },

    ];

    return(
        <div style={myStyle}>
            <div className="container">
                <div className="rectangle">
                    <Header/>
                    <Navbar/>
                    <div className="acv-heading">Achievements</div>
                    <div className="acv-back-button">
                        <Link to='/competencies'> 
                            <button>back</button>
                        </Link>
                    </div>
                    <div className="acv-rectangle-2">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1} 
                            navigation
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                {desc.slice(0, 8).map((slide) => (
                                    <p key={slide.id} className="slide-content">
                                        {slide.description}
                                    </p>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                {desc.slice(4,8).map((slide) => (
                                    <p key={slide.id} className="slide-content">
                                        {slide.description}
                                    </p>
                                ))}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;