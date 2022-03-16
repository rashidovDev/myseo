import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='section bg-purple-50'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8'>
          {skills.map((skill) => {
            return (
              <div className='flex items-center justify-center'>
                <img src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
