import React from 'react';

// import about img
import Image from '../assets/img/about.png';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-x-24 gap-y-6'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='section-title mb-3'>Jane Doe</h2>
              <p className='mb-4 italic'>Frontend Web Developer</p>
              <hr className='mb-8' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi quas molestias quibusdam obcaecati ab exercitationem
                maxime alias debitis sunt sit. Iste quidem natus aspernatur in.
              </p>
            </div>
            <button className='btn btn-md bg-secondary hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
