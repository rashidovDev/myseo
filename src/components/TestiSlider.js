import React, { useState, useEffect } from 'react';
// testimonials data
import { testimonials } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

// import framer motion
import { motion } from 'framer-motion';

const TestiSlider = ({ isAnimating }) => {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate={isAnimating ? 'visible' : ''}
                className='flex flex-col lg:flex-row gap-12 lg:gap-32'
              >
                <motion.div
                  variants={itemVariants}
                  className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                >
                  <img className='rounded-2xl' src={authorImg} alt='' />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className='flex flex-col max-w-3xl'
                >
                  <h5 className='font-body text-2xl mb-8 italic font-normal'>
                    {authorText}
                  </h5>
                  <div>
                    <p className='text-lg text-accent'>{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
