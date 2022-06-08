import React from 'react';

// import social data
import { social } from '../data';


const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <h1 className='text-4xl text-red-600 tracking-wide'> <span className='text-orange-600'>A</span>love<span className='text-orange-300'>D</span></h1>
          </div>
          <p className='text-paragraph opacity-80 text-[15px] text-2xl'>
            &copy;2022 Anvar Rashidov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
