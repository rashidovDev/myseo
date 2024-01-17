import React from 'react';
import Slider from "react-slick";

const Projects = ({item}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className='my-10 pb-10 md:pb-0 border-b-2 border-slate-600 relative
    md:flex md:justify-between '>
      <div className='md:w-[48%] w-full'>
        
      <div className='md:mb-[40px] mb-[40px]'>
          <h2 className='font-bold text-[36px] text-accent'>{item.name}</h2> 
      </div>

        <div className='md:mb-[40px] mb-[20px]'>
          <h2 className='font-bold text-[22px]'>Technologies</h2>
          <div className='my-2'>
            <p className='text-[18px]'>{item.technology}</p>
          </div>
        </div>

        <div className='md:mb-[40px] mb-[20px]'>
          <h2 className='font-bold text-[22px]'>Description</h2>
          <div className='my-2'>
            <p className='text-[18px] md:leading-7 text-justify'>
              {item.description}
            </p>
          </div>
        </div>

       
      </div>
      <div className='md:w-[50%] md:h-[500px]'>
      <Slider arrows={false} {...settings}>
      {
          item.images.map((item, idx) => {
            return (
              <a  href='https://tezkor24.vercel.app'>
          
              <img className=' rounded-md' src={item.image} />
              </a>
            )
        })    
      }
      </Slider>
      <div className='md:flex items-center justify-start mt-10 md:absolute bottom-0'>
        <div className='md:mb-[40px] mb-[20px] md:mr-5'>
          <h2 className='font-bold text-[22px] '>Project URL</h2>
          <div className='my-2'>
            <a href={item.projectURL}
            className='text-[16px] text-[blue] cursor-pointer'>{item.projectURL}</a>
          </div>
        </div>
        <div className='md:mb-[40px] md:ml-5'>
          <h2 className='font-bold text-[22px]'>Github Link</h2>
          <div className='my-2'>
            <a href={item.projectURL}
             className='text-[16px] text-[blue] cursor-pointer'>{item.githubURL}</a>
          </div>
        </div>
       </div>

      </div>
    </div>
  );
};

export default Projects;
