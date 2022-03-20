import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-4'>
      {social.map((item, index) => {
        return (
          <li className='flex w-6 h-6 justify-center items-center' key={index}>
            <a className='text-primary text-xl' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
