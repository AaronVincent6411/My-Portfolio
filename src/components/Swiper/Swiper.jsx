import React from 'react';
import './Swiper.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { AiFillGithub } from 'react-icons/ai';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slider() {
  const slides = [
    {
      id: 1,
      title: 'Supermarket',
      description: 'This is a project done by me and my friend Sooraj when we were studying in class 12.With the help of this project written in C++ language we can write and read products available in the supermarket and also enter customer product details and return the cost and total amount of products of the respective customer',
      github: '',
      image: 'https://live.staticflickr.com/65535/52803441182_8671655a7c_n.jpg'
    },
    {
      id: 2,
      title: 'Vaccination',
      description: 'This is a project done by me and my team members Anju, Ashik and Edwin in S2 BTech. With the help of this project written in C language we can write and read, also find details of who have taken and not taken vaccine from a file containing data.',
      github: 'https://github.com/AaronVincent6411/Vaccination',
      image: 'https://live.staticflickr.com/65535/52803441217_fc2312dc93_n.jpg'
    },
    {
      id: 3,
      title: 'SmartC',
      description: 'This is a project done by me and my team      TETRABEK when we participated in a hackathon conducted by Idealabs. This project is written in HTML,CSS and Python language. It is an LMS Software implemented with Automated Attendance Collector which makes it different from other current softwares.',
      github: 'https://github.com/AaronVincent6411/SmartC',
      image: 'https://live.staticflickr.com/65535/52803441232_08f497d7ac_n.jpg'
    },
    {
      id: 4,
      title: 'Litter Detection System',
      description: 'This is a project done by me and my team ArtexBytes when we participated in a .hack() hackathon conducted by MACE, Kothamangalam. This project is written in Python language. It detects litter and informs authorities',
      github: 'https://github.com/AaronVincent6411/Litter-Detection',
      image: 'https://live.staticflickr.com/65535/52803998791_e40cbe0d7e_n.jpg'
    },
    {
      id: 5,
      title: 'OpenAI Image Generation',
      description: 'This is a project done by me to enhance skill in react and also to try OpenAI API. Here we have generated an image using OpenAI API',
      github: 'https://github.com/AaronVincent6411/Chatgpt-Clone-Reactjs',
      image: 'https://live.staticflickr.com/65535/52804252684_7a66a68368_n.jpg'
    },
    {
      id: 6,
      title: 'Snake Game',
      description: 'This is a project done by me to boost my Python programming skills and also to understand a basic idea on how to use Pygame',
      github: 'https://github.com/AaronVincent6411/Snake-Game',
      image: 'https://live.staticflickr.com/65535/52804252699_fbb104941e_n.jpg'
    },
    {
      id: 7,
      title: 'My Portfolio',
      description: 'This is a portfolio website developed by me. It is built using react and vite frameworks',
      github: 'https://github.com/AaronVincent6411/My-Portfolio',
      image: 'https://live.staticflickr.com/65535/52804399300_2027b069d2_n.jpg'
    },
    {
      id: 8,
      title: 'Water Leakage Resolver',
      description: 'This is a project done by me and my team members Benchacko, Jonathan and Sreyas as a part of GDSC Solution Challenge and WOW hackathon.',
      github: 'https://github.com/AaronVincent6411/Water-Leakage-Resolver',
      image: 'https://live.staticflickr.com/65535/52808053524_e56f62d278_k.jpg'
    },
    {
      id: 9,
      title: 'ChatGPT Clone',
      description: 'This project is done as a part of enhancing react.js skill using OpenAI API',
      github: 'https://github.com/AaronVincent6411/Chatgpt-Clone-Reactjs',
      image: 'https://live.staticflickr.com/65535/52808053524_e56f62d278_k.jpg'
    },
    {
      id: 10,
      title: 'My Flutter App',
      description: 'This project is done as part of enhancing dart and flutter skill',
      github: 'https://github.com/AaronVincent6411/First-Flutter-App',
      image: 'https://live.staticflickr.com/65535/52808053524_e56f62d278_k.jpg'
    },
    {
      id: 11,
      title: 'Kathakali Mudra Recognition',
      description: 'This project is done as team which consists of students Srinidhi, Rahul, Gauri and me. This project is a kathakali mudra detection system.',
      github: 'https://github.com/AaronVincent6411/Project-Kathakali',
      image: 'https://live.staticflickr.com/65535/52808053524_e56f62d278_k.jpg'
    },
  ];

  return (
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="project-card">
              <img src={slide.image} alt={slide.title} className="project-img" />
              <div className='line-2'></div>
              <h3 className="project-title">{slide.title}</h3>
              <p className="project-description">{slide.description}</p>
              <a href={slide.github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='github-icon' />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Slider;
