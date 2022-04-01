import React, { useEffect } from 'react';

// import about img
import Image from '../assets/img/about.webp';

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.3,
          duration: 1,
        },
      });
      animation2.start({
        y: 0,
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 1,
        scale: 0,
      });
      animation2.start({
        y: 20,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <motion.div
          animate={animation}
          className='flex flex-col lg:flex-row lg:items-center gap-x-24 gap-y-6'
        >
          <motion.img
            animate={animation2}
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <motion.div
            animate={animation2}
            className='flex flex-col items-center text-center lg:items-start lg:text-left'
          >
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Jane Doe
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
