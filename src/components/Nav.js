import React from 'react';

// import navigation data
import { navigation } from '../data';

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='font-medium text-white hover:text-accent transition-all cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
