import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const [bg, setBg] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 180 ? setBg(true) : setBg(false);
    });
  });

  useEffect(() => {
    if (bg) {
      animation.start({
        background: '#131419',
        height: '80px',
        transition: {
          type: 'tween',
          duration: 0.4,
        },
      });
    }
    if (!bg) {
      animation.start({
        background: 'rgba(0, 0, 0, 0)',
        borderBottom: `1px solid transparent`,
        height: '100px',
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      });
    }
  });
  return (
    <motion.header
      animate={animation}
      className='flex items-center fixed top-0 w-full h-20 px-4 text-white z-10'
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
    </motion.header>
  );
};

export default Header;
