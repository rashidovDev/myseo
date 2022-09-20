import React from 'react';
import portfolio from '../assets/img/portfolio1.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto align-center'>
        <div className='flex flex-col xl:flex-row gap-24 items-center'>
          <img
            className='object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl h-[500px]'
            src={portfolio}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block italic'>
                Anvar Rashidov
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 p-8 text-justify'>
                Hi, My name is Anvar and I'm a frontend developer.
                Currently I'm student at Tashkent University of information technoligies but this year I'll graduate
                from university.Actually I've been improving my coding
                skills more than 1 year and I know several knowledge well
                when it comes to this.Now I chiefly focus on creating some
                projects and that's why I want to work in IT companies. <br />
                <br />
                Generally speaking,I created some projects
                in period of studying with my coursemates different
                environment of IT. Hovewer, I was impressed by WEB
                Applicatons therefore I was crazy this area.Today
                I have several WEB projects and you can see them
                on the below.Actually I desire to attend real
                projects and work as a team.
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
