import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li className='flex justify-center items-center' key={index}>
            <a className='text-accent text-lg' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
