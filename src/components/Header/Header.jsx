import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='bg-black rounded-[40px] h-8 w-[90%] left-10 top-6 fixed  text-base'>
          <div className="flex overflow-hidden w-full" style={{ '--gap': '0rem', display: 'flex', overflow: 'hidden', userSelect: 'none', gap: 'var(--gap)' }}>
              <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '4px', opacity: '40%', listStyleType: 'none', color: 'white' }}>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
              </div>
              <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '4px', opacity: '40%', listStyleType: 'none', color: 'white' }}>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
                  <p>Home</p>
              </div>
          </div>
          <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(calc(-100% - var(--gap)));
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
        <div className='fixed flex top-5 right-12'>
            <Link to="/">
                <img src="https://live.staticflickr.com/65535/52783270220_87fdc16456_b.jpg" alt="Logo" className='rounded-full h-10 w-10' />
            </Link>
        </div>
        <div className='bg-white h-[2px] w-full fixed top-20 opacity-20'></div>
    </>
  )
}

export default Header