import React, { useEffect, useRef, useState } from 'react';

// import components
import Modal from '../components/Modal';

// import framer motion
import { motion } from 'framer-motion';
// import data
import { projectsData } from '../data';

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

const Project = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState([]);

  const closeModal = (bool) => {
    setShowModal(bool);
  };

  const handleClick = (id) => {
    // get item data
    const itemData = projectsData.find((item) => {
      return item.id === id;
    });

    setModal(itemData);
    setShowModal(true);

    return modal
      ? document.querySelector('body').classList.add('overflow-y-hidden')
      : document.querySelector('body').classList.remove('overflow-y-hidden');
  };

  return (
    <motion.div
      layout
      variants={itemVariants}
      key={item.id}
      className='flex flex-col'
      onClick={() => handleClick(item.id)}
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
      {showModal && <Modal closeModal={closeModal} />}
    </motion.div>
  );
};

export default Project;
