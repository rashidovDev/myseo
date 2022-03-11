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
    <nav className='bg-yellow-200'>
      <div onClick={() => setIsOpen(true)} className='cursor-pointer'>
        <MenuAlt3Icon className='w-8 h-8' />
      </div>
      <div
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-violet-700 absolute top-0 w-full h-screen transition-all`}
      >
        <ul>
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
        </ul>
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
