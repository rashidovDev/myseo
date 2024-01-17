import React from 'react';
// import components
import Projects from './Projects';
import { projectsData } from '../data';

const Portfolio = () => {
  return (
    <section id='projects' className=' bg-primary md:py-8 py-5'>
      <div className='w-[80%] mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className=' font-bold mb-[30px]
          md:text-[40px] text-[30px]'>
            Projects
          </h2>
        </div>
        {
        projectsData.map((item, idx) => {
          return(
            <Projects key={idx} item={item}/>
          )
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;





    
