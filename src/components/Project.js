import React from 'react';

import { motion } from 'framer-motion';

const Project = ({ item, index }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      key={index}
      className='flex flex-col'
    >
      <div className='relative flex mb-8'>
        <div className='absolute top-0 w-full h-full'></div>
        <img src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </motion.div>
  );
};

export default Project;
