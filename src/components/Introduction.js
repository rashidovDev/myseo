import React from 'react';
// import woman image
import portfolio from '../assets/img/portfolio2.jpg';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex justify-center items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full '>
        <div className='flex items-center h-full align-center  pt-8'>
          <div className='flex-1 flex-col items-center lg:items-start '>
            <Fade left>
            <p className='text-5xl text-center text-accent text-md mb-[22px]'>
              Hi there, I am Anvar
            </p>
           
            <h1 className='text-4xl leading-[44px] md:text-center md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-7 text-center'>
              I am Frontend <br />Developer 
            </h1>
            </Fade>
            <div className='flex justify-center'>
            <a href='http://t.me/anvar_rashidov' className='btn btn-md w-[200px]  bg-accent hover:bg-secondary-hover  md:btn-lg transition-all rounded-[12px] cursor-pointer'>
               Contact Me
            </a>
            </div>
          </div>
          <div className='hidden lg:flex flex-1 items-center h-full'>
            <img src={portfolio} alt="Just me" className='w-80 h-96 rounded-[8px] lg:ml-24' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
