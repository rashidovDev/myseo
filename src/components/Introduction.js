  import React from 'react';

// import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex justify-center items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full '>
        
        <div className='flex items-center h-full align-center  pt-8'>
          <div className='md:w-1/2 w-full flex-col items-center lg:items-start'>
            <p className='text-5xl text-center text-accent text-md mb-[22px]'>
              Hi, I am Anvar 
            </p> 
            <h1 className='text-4xl leading-[44px] md:text-center md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] mb-7 text-center'>
              I am WEB <br />Developer 
            </h1>
            <div className='flex justify-center'>
            <a href='https://www.linkedin.com/in/anvarrashidov/'
             className='btn btn-md w-[180px]  text-[22px]  bg-accent hover:bg-secondary-hover
               md:btn-lg transition-all rounded-[12px] cursor-pointer'>
               Contact Me
            </a>
            </div>
          
          </div>

          <div className='object-cover hidden md:flex'>
            <img src={require('../assets/img/me.jpg')} alt="Just me" className='w-[350px] h-96 object-cover rounded-[8px] lg:ml-24' />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
