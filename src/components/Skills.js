import React, { useState, useEffect } from 'react';

// import skill data
import { skills } from '../data';

// import react motion
import { motion } from 'framer-motion';

// import react observer
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  });
  return (
    <section ref={ref} className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isAnimating ? 'visible' : ''}
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <motion.div
                variants={itemVariants}
                className='flex items-center justify-center '
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
