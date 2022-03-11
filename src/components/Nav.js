import React from 'react';

// import navigation data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8'>
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <a href='#'>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
