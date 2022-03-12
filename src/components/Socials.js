import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-4'>
      {social.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href}>
              <img src={item.icon} alt='' />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
