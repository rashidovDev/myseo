import React, { useEffect, useState } from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const container = {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  });

  return (
    <section
      ref={ref}
      id='home'
      className='lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <motion.div
          variants={container}
          initial='hidden'
          animate={showAnimation ? 'visible' : ''}
          className='flex items-center h-full pt-8'
        >
          <motion.div
            variants={item}
            className='flex-1 flex flex-col items-center lg:items-start'
          >
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Jane! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </motion.div>
          <motion.div
            variants={item}
            className='hidden lg:flex flex-1 justify-end items-end h-full'
          >
            <img src={WomanImg} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
