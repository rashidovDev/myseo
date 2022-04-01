import React, { useState } from 'react';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import navigation data
import { navigation } from '../data';

// import components
import Socials from './Socials';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed bg-accent top-0 bottom-0 w-full transition-all`}
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
