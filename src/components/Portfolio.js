import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className='section min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <div className='badge badge-primary'>Portfolio</div>
          <h2 className='section-title'>My latest work</h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
