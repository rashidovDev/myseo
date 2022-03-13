import React from 'react';

// import image
import Image from '../assets/img/about.png';

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <div className='badge'>About</div>
          <h2 className='section-title'>About my journey</h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center gap-x-24 gap-y-6'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <h3 className='text-2xl lg:text-3xl font-semibold mb-4'>
              I build websites
            </h3>
            <p className='text-lg mb-8 max-w-[560px]'>
              Lorem ipsum dolor amet consectetur adipisicing elit. Incidunt enim
              voluptatum eos minus sit cumque accusantium at sint, autem unde
              est!
            </p>
            <button className='btn btn-md bg-secondary hover:bg-secondary-hover transition-all'>
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
