// import React from 'react';
import portfolio from '../assets/t.JPG';
// import project from '../assets/projects.png'

// const FILE = window.location.hostname === "localhost" 
// ? "/arashidov.pdf"  // Local development
// : "https://arashidov.vercel.app/ARashidov.pdf"; // Production
const  About = () => {

  // const downloadFile = (url) => {
  // const fileName = url.split('/').pop()
  // const aTag = document.createElement('a')
  // aTag.href = url
  // aTag.setAttribute('download', fileName)
  // document.body.appendChild(aTag)
  // aTag.click();
  // aTag.remove()
  // }

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
            className=' md:w-[550px] lg:w-[600px] rounded-md md:mx-auto lg:mx-0 hidden
             md:flex justify-center items-center  h-[350px] '
            src={require('../assets/projects.png')}
            alt=''
          />
        </div>
        
        <div className='w-[85%] md:w-[550px]  lg:w-[600px]  md:mx-0 mx-auto'>
        <div className='text-justify my-2 text-[18px] md:leading-8'>
         I am a passionate Full Stack Web Developer with a strong focus on backend development and over three years of professional experience building web applications. I have worked on a wide range of projects across both frontend and backend, with a primary emphasis on designing and developing robust server-side architectures and APIs.

As a backend-focused engineer, I specialize in building scalable, secure, and high-performance systems. I am highly proficient in JavaScript and experienced in working with modern backend technologies, creating efficient APIs, handling authentication and authorization, and managing databases with a strong focus on data integrity and system reliability.

Currently, I work primarily as a Full Stack Engineer, focusing on backend development for scalable and interactive web applications across several startups. I collaborate closely with frontend, product, and design teams to deliver efficient, maintainable, and high-quality solutions.</div>
             {/* <button
             onClick={() => downloadFile(FILE)}
              className='bg-accent md:text-[30px] text-[25px] cursor-pointer w-full p-3 my-4 text-center text-[#fff] rounded-lg'>
        Get Resume
        </button> */}
        </div>
        
      </div>
     </div>
    </div>
  );
};

export default About;
