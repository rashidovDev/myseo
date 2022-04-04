import React, { useState, useEffect } from 'react';

// import framer motion
import { motion, AnimatePresence } from 'framer-motion';
// import portfolio data
import { projectsData } from '../data';
// import portfolio navigation data
import { projectsNav } from '../data';
// import project
import Project from './Project';
// import react observer
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  });

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

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

  return (
    <div ref={ref}>
      {/* projects nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4 badge`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <motion.section
        layout
        variants={containerVariants}
        initial='hidden'
        animate={isAnimating ? 'visible' : ''}
        className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'
      >
        <AnimatePresence>
          {projects.map((item, index) => {
            return <Project item={item} key={index} />;
          })}
        </AnimatePresence>
      </motion.section>
    </div>
  );
};

export default Projects;
