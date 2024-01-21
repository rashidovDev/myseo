import React from 'react';
import portfolio from '../assets/img/me.jpg';
import project from '../assets/projects.png'

const FILE = 'https://arashidov.vercel.app/ARashidov.pdf'
const About = () => {

  const downloadFile = (url) => {
  const fileName = url.split('/').pop()
  const aTag = document.createElement('a')
  aTag.href = url
  aTag.setAttribute('download', fileName)
  document.body.appendChild(aTag)
  aTag.click();
  aTag.remove()
  }

  return (
    <div className=' py-10 bg-secondary' id='about'>
     <div>
      <h1 className='md:text-[50px] text-[35px] text-center font-bold'>About me</h1>
      <div className='md:flex md:w-[80%] md:justify-between md:mx-auto items-center md:my-10'>
        <div className='my-10 flex justify-between'>
        <img
            className='object-cover w-[300px] mx-auto lg:mx-0 rounded-2xl md:hidden flex justify-center items-center  h-[300px] '
            src={portfolio}
            alt=''
          />
          <img
            className=' w-[650px] rounded-md md:mx-auto lg:mx-0 hidden
             md:flex justify-center items-center  h-[400px] '
            src={require('../assets/projects.png')}
            alt=''
          />
        </div>
        
        <div className='w-[85%] md:w-[650px] md:mx-0 mx-auto'>
        <div className='text-justify my-2 text-[18px] md:leading-8'>I'm a passionate Full Stack Web Developer with a deep love for JavaScript.
        About 2 years as a Web developer I worked on several projects both Backend and Frontend. As a Frontend engineer
         I am really good at developing interactive and responsive user interfaces.My proficiency in React library allows me to 
         to create seamless, modular, and visually stunning web applications. These days I am primarily working as a Frontend engineer in order to build 
         interactive web applications in several startups. 
        </div>
             <button
             onClick={() => downloadFile(FILE)}
              className='bg-accent md:text-[30px] text-[25px] 
              cursor-pointer w-full p-3 my-4 text-center text-[#fff] rounded-lg'>
        Get Resume
        </button>
        </div>
        
      </div>
     </div>
    </div>
  );
};

export default About;
