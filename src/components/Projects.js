import React, { useState, useEffect } from 'react';

// import framer motion
import { motion, AnimatePresence } from 'framer-motion';
// import portfolio data
import { projectsData } from '../data';
// import portfolio navigation data
import { projectsNav } from '../data';

import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

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

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
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
        className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'
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
