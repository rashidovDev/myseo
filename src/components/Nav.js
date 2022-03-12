import React from 'react';

// import navigation data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='font-medium hover:text-secondary transition-all'
              key={idx}
            >
              <a href='#'>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
