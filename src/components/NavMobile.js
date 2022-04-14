import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
import { navigation } from '../data';

// import components
import Socials from './Socials';

// import framer
import { motion } from 'framer-motion';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 180,
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
  };

  return (
    <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0 -z-10'
      ></motion.div>

      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
          <XIcon className='w-8 h-8' />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <a href='#'>{item.name}</a>
            </li>
          );
        })}
        <Socials />
      </ul>
    </nav>
  );
};

export default NavMobile;
