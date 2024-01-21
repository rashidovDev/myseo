import React, { useEffect, useState } from 'react';

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='w-[80%] mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <h1 className='text-3xl bold logo'>A<span style={{color:"#AC6B34"}}>rashidov</span></h1>
        </a>
        {/* nav */}
        <div className='hidden md:flex'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
