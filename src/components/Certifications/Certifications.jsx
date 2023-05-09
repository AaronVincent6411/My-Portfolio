import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certifications.css';
import Header from '../Header/HeaderCER';
import Navbar from '../Navbar/Navbar';
import { TiTick } from 'react-icons/ti';

import { BiCertification } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const images = [
    // image size 780x600
    'https://live.staticflickr.com/65535/52912305718_7e68e6e2d0_c.jpg',

    'https://live.staticflickr.com/65535/52894368797_8f7d06d2cf_c.jpg',

    'https://live.staticflickr.com/65535/52911848196_e1948fc11d_c.jpg',

    'https://live.staticflickr.com/65535/53070178278_14de0a6371_c.jpg',

    'https://live.staticflickr.com/65535/53269528873_f5df66eb9d_c.jpg'
  ];

  const texts = [
    'Data Science',
    'Intro to AI and ML',
    'Intro to Machine Learning',
    'Learn AI Challenge',
    'Android with Compose'
  ];

  const organizations = [
    'NPTEL',
    'Deep Learning AI',
    'Kaggle',
    'Microsoft',
    'TechLabs'
  ];

  const issuedDates = [
    'April 2023',
    'February 2023',
    'January 2023',
    'August 2023',
    'September 2023'
  ];

  const links = [
    'https://www.linkedin.com/posts/aaronvincent6411_i-am-happy-to-share-and-add-one-more-success-activity-7049428385764175872-dkJm?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFi0Zbp7ZRcmqJqZjfzu0eg%3D%3D',

    'https://coursera.org/share/38de94db185062b9357c7a001f13d4aa',

    'https://www.linkedin.com/posts/aaronvincent6411_ive-completed-the-intro-to-machine-learning-activity-7022571918893457408-U2x2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFi0Zbp7ZRcmqJqZjfzu0eg%3D%3D',

    'https://www.linkedin.com/posts/aaronvincent6411_microsoft-learn-ai-skills-challenge-activity-7088497234358530048-t2mE?utm_source=share&utm_medium=member_desktop',

    'https://live.staticflickr.com/65535/53269528873_f5df66eb9d_c.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt={texts[i]} />
        </a>
      );
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
  };

  const myStyle = {
    background: 'linear-gradient(to right, #632636, #392A48)',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={myStyle}>
      <div className="container">
        <div className="rectangle">
          <Navbar />
          <Header />
          <div className="cer-heading">Certifications</div>
          <div className="cer-back-button">
            <Link to='/competencies'> 
              <button>back</button>
            </Link>
          </div>
          <div className="certificate-rectangle-1">
            <div className="certificate-h3">Issued organization</div>
            <div className="certificate-t1">{organizations[currentSlide]}</div>
          </div>
          <div className="certificate-rectangle-2">
            <div className="certificate-h3">Issued on</div>
            <div className="certificate-t1">{issuedDates[currentSlide]}</div>
          </div>
          <div className='certificate-rectangle-3'>
          <div className="certificate-h3">Verify</div>
          <a
            href={links[currentSlide]}
            target="_blank"
            rel="noopener noreferrer"
          >
                <TiTick className="validate-icon" />
                <BiCertification className="validate-outer-icon" />
          </a>
          </div>
          <div className='cert-rectangle-main'></div>
          <div className="cert-rectangle">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={texts[index]} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
