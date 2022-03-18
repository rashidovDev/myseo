import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman.png';

const Hero = () => {
  return (
    <section className='lg:h-[720px] flex items-center bg-none lg:bg-hero lg:bg-cover lg:bg-center lg:bg-no-repeat py-24 lg:py-0'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-primary text-md font-medium mb-[22px]'>
              Hey, I'm Jane! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[72px] font-medium md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className='btn btn-md bg-secondary hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
