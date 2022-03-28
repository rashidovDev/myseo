import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  });
  return (
    <header
      className={`${
        active ? 'bg-white shadow-md h-[90px]' : 'h-20'
      }  fixed left-0 w-full transition-all duration-200 z-10`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
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
