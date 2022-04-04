import React from 'react';

// import framer motion
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

const Project = ({ item, index }) => {
  return (
    <motion.div
      layout
      variants={itemVariants}
      key={index}
      className='flex flex-col'
    >
      <div className='relative flex mb-8'>
        <div className='absolute top-0 w-full h-full'></div>
        <img src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </motion.div>
  );
};

export default Project;
