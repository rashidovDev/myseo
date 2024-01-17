import React from 'react';
import Slider from "react-slick";

// import skill data
import { skills } from '../data';

const Skills = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <section className='bg-tertiary py-5 '>
       <h1 className='text-center text-[30px] md:text-[40px] md:mb-5 mt-3 font-bold'>Skills</h1>
       <div className='w-[80%] mx-auto md:my-4 my-4'>
           <Slider arrows={false} {...settings}>
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center my-1'
                key={index}>
                <img className='lg:h-20 object-cover ' src={skill.image} alt='' />
              </div>
            );
          })}
           </Slider>
       </div>
    </section>
  );
};

export default Skills;
