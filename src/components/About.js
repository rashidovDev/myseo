import React from 'react';
import portfolio from '../assets/img/phot1.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto align-center'>
        <div className='flex flex-col xl:flex-row md:gap-24 gap-2 items-center'>
          <img
            className='object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl md:h-[500px] h-[400px] '
            src={portfolio}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <div className='hidden md:inline'>
              <h2 className='text-3xl lg:text-4xl md:inline font-medium lg:font-extrabold mb-3 before:content-about  
              relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block italic'>
                Anvar Rashidov
              </h2>
              <p className='mb-4 text-accent'>
                Web Developer
              </p>
              </div>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 p-2 text-justify'>
              I'm a passionate Full Stack Developer with a deep love for JavaScript and a strong commitment to crafting elegant and efficient web solutions. I like being on a mission to bridge the gap between front-end and back-end development.With a strong background in JavaScript, I'm adept at creating responsive, user-friendly web applications.
              </p>
            </div>
            <a href='http://t.me/anvar_rashidov' className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all rounded-[12px] cursor-pointer'>
               Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
