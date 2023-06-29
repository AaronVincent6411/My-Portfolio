import './Overview.css';
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import gif from '/src/assets/ScarceBrownCaimanlizard-size_restricted.gif';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/HeaderO';
import Eyes from '../../components/Eyes/Eyes';
import musicIcon from '../../assets/music-icon.png'

import stopIcon from '../../assets/stop-icon.png'
import song1 from '../../assets/Ava-Famy.mp3'
import song2 from '../../assets/Wavin-Flag.mp3'
import song3 from '../../assets/Thunder.mp3'
import song4 from '../../assets/Sharks.mp3'
import song5 from '../../assets/Believer.mp3'
// import playIcon from '../../assets/play-icon.png'
// import resume from '../../assets/Resume.pdf'
// import resumeIcon from '../../assets/resume-icon.jpg'
import { Link } from 'react-router-dom';
import profile from '/src/assets/Profile.png';

function Overview () {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["Hi, I am Aaron"],
      startDelay: 200,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
      showCursor: false,
      onComplete: () => {
        const typed2 = new Typed(el2.current, {
          strings: ["- Student"],
          startDelay: 400,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          loop: false,
          showCursor: false,
          onComplete: () => {
            const typed2 = new Typed(el3.current, {
              strings: ["- Poster designer"],
              startDelay: 600,
              typeSpeed: 100,
              backSpeed: 100,
              backDelay: 100,
              loop: false,
              showCursor: false,
              onComplete: () => {
                const typed2 = new Typed(el4.current, {
                  strings: ["- Developer"],
                  startDelay: 800,
                  typeSpeed: 100,
                  backSpeed: 100,
                  backDelay: 100,
                  loop: false,
                  showCursor: false,
                });
              },
            });
          },
        });
      },
    });
    return () => {
      typed1.destroy();
    };
  }, []);

  // el.current.style.fontSize = "32px";

  const [isPlaying, setIsPlaying] = useState(false);
  const [songName, setSongName] = useState('None');
  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  function handleMusicClick() {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setSongName('None');
    } else {
      const randomSong = Math.random() < 0.2 ? song1 : Math.random() < 0.3 ? song2 : Math.random() < 0.4 ? song3 : Math.random() < 0.5 ? song4 : song5;
      audioRef.current.src = randomSong;
      audioRef.current.play();
      // const fileName = randomSong.replace(/^.*[\\/]/, '').slice(0, -4);
      setSongName('Playing');
    }
    setIsPlaying(isPlaying);
  }

  // function pauseMusicClick() {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     audioRef.current.currentTime = 0;
  //     setIsPlaying(false);
  //     setCurrentSong(null);
  //   }
  // }

  function handleStopClick() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setSongName('None');
    }
  }
   

  // function handlePlayClick() {
  //   if (!isPlaying) {
  //     audio.play();
  //     setIsPlaying(true);
  //   }
  // }  

  return(
    <div className="container">
      <div className="rectangle">
        <Navbar/>
        <div className='heading'>Overview</div>
        <div className='inner-rectangle-2'>
          <div className='text-2-1' ref={el1}></div>
          <div className='text-2-2' ref={el2}></div>
          <div className='text-2-3' ref={el3}></div>
          <div className='text-2-4' ref={el4}></div>
          <div className='gif'>
            <img src={gif}/>
          </div>
        </div>
        <div className='inner-rectangle-3'>
          <div className='text-3-1'>
            Known Languages and Frameworks
          </div>
          {/* <div className='red-dot'>
          </div>
          <div className='text-3-2'>
              C++
          </div>
          <div className='blue-dot'>
          </div>
          <div className='text-3-3'>
              Python
          </div>
          <div className='grey-dot'>
          </div>
          <div className='text-3-4'>
              C
          </div>
          <div className='yellow-dot'>
          </div>
          <div className='text-3-5'>
              Java
          </div>
          <div className='darkishblue-dot'>
          </div>
          <div className='text-3-6'>
              React
          </div> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='CPP'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='Python'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className='C'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='React'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='Java'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className='Flutter'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className='Pytorch'/>       
        </div>
        <div className='inner-rectangle-4'>
          <Eyes/>
          <div className='music'>
          <img
            src={musicIcon}
            alt="music icon"
            onClick={handleMusicClick}
            style={{ cursor: "pointer" }}
          />
          {isPlaying ? (
           <span onClick={pauseMusicClick}></span>
          ) : (
           <span onClick={handleMusicClick}></span>
          )}
          <audio ref={audioRef} />
          </div>
          <div className='stop'>
            <img src={stopIcon} alt="stop icon" onClick={handleStopClick} style={{ cursor: "pointer" }}/>
          </div>
          <div className='song-name'>
            {songName}
          </div>
          {/* <div className='play'>
            <img src={playIcon} alt="play icon" onClick={handlePlayClick} style={{ cursor: "pointer" }}/>
          </div> */}
          {/* <div className='resume'>
            <a href={ resume } download>
              <img src={ resumeIcon } alt="Resume" />
            </a>
          </div> */}
        </div>
        <div className='inner-rectangle-5'>
          <div className='text-5-1'>
            My Workspace
          </div>
          <div className='text-5-2'>
            <p>
              <img src="https://img.shields.io/badge/asus%20rog-000080.svg?style=for-the-badge&logo=asus&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/amd%20ryzen%207-E2231A?style=for-the-badge&logo=amd&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/acer%20Aspire%203-83B81A?style=for-the-badge&logo=acer&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Intel%20Core_i5_8th-0071C5?style=for-the-badge&logo=intel&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/acer%20Aspire%203-83B81A?style=for-the-badge&logo=acer&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Duolingo-58CC02?style=for-the-badge&logo=Duolingo&logoColor=white" />
		          &nbsp;
              <img src="https://img.shields.io/badge/freecodecamp-27273D?style=for-the-badge&logo=freecodecamp&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Brave-FF1B2D?style=for-the-badge&logo=Brave&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" />
	            &nbsp;
              <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Atom-66595C?style=for-the-badge&logo=Atom&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Mega-%23D90007.svg?style=for-the-badge&logo=Mega&logoColor=white" />
            </p>
          </div>
          <div className='text-5-3'>
            Current Designations
          </div>
          <div className='text-5-4'>
            <p>
              <img src="https://img.shields.io/badge/Technical%20Lead%20Hack%20Club-EC3750?style=for-the-badge&logo=Hack%20Club&logoColor=white" />
              &nbsp;
              <img src="https://img.shields.io/badge/Technical Co Lead Computer Society Of India-EC3750.svg?&style=for-the-badge" />
            </p>
          </div>
        </div>
        <div className='inner-rectangle-6'>
        <div className='text-6'>
            Completed Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
          </div>
        </div>
        <div className='inner-rectangle-7'>
          <div className='text-7'>
            Currently Working&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7
          </div>
        </div>
        <Header/>
        <Link to="/about">
          <div className='img-rectangle'>
              <img src={profile}/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Overview