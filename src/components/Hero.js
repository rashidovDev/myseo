import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman.png';

const Hero = () => {
  return (
    <section className='lg:h-[720px] flex items-center'>
      <div className='w-full flex flex-col md:flex-row h-full py-16 lg:py-0'>
        <div className='flex-1 md:pr-8 md:pl-8 lg:pl-40 flex flex-col items-center justify-center lg:items-start px-4 text-center pt-16'>
          <p className='text-primary text-md font-medium mb-[22px]'>
            Hey, I'm Jane! 👋
          </p>
          <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[72px] font-medium md:tracking-[-2px]'>
            I Build & Design <br /> Web Interfaces.
          </h1>
          <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-center text-lg lg:text-left lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
            dolor elit.
          </p>
          <button className='btn btn-md bg-secondary hover:bg-secondary-hover md:btn-lg transition-all'>
            Work with me
          </button>
        </div>
        <div className='hidden flex-1 bg-hero-pattern bg-no-repeat lg:flex items-end justify-center'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
