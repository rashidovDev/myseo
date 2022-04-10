import React, { useEffect, useState } from 'react';

// import brands data
import { brands } from '../data';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Brands = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  });
  return (
    <section ref={ref} className='min-h-[146px] bg-tertiary flex items-center'>
      <motion.div
        variants={container}
        initial='hidden'
        animate={isAnimating ? 'visible' : ''}
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <div
              variants={container}
              initial='hidden'
              animate={isAnimating ? 'visible' : ''}
              key={idx}
            >
              <motion.img variants={item} src={brand.img} alt='' />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Brands;
