import React, {useRef, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import homeImg from '../../assets/homeImg.png';
import Typed from 'typed.js';

const Home = () => {

  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["Hi, I am Aaron P Laju"],
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

  return (
    <section
      className="flex items-center text-2xl text-white bg-[#222429] w-[90vw] h-[90vh] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[40px]"
    > 
    <Header />
    <Navbar />
    <div className='text-3xl font-semibold relative -top-[36%] left-20'>Overview</div>
    <img src={homeImg} className='relative h-100 w-80 -top-[3.6%] -left-20 transform -scale-x-100 '></img>
    <div className='bg-black relative w-[66rem] h-60 -top-32 -left-10 rounded-[40px]'>
      <div className='ml-10 mt-10'>
        <div className='font-normal text-4xl' ref={el1}></div>
        <div className='ml-10 mt-6'>
          <div className='text-xl mt-2' ref={el2}></div>
          <div className='text-xl mt-2' ref={el3}></div>
          <div className='text-xl mt-2' ref={el4}></div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;
