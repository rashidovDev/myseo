import React, { useState, useEffect } from 'react';

// import portfolio data
import { projectsData } from '../data';
// import portfolio navigation data
import { projectsNav } from '../data';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);

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

  const handleClick = (e) => {
    setItem({ name: e.target.textContent.toLowerCase() });
  };

  return (
    <div>
      {/* projects nav */}
      <nav className='mb-16 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center'>
          {projectsNav.map((item, idx) => {
            return (
              <li
                onClick={(e) => handleClick(e)}
                className={`cursor-pointer capitalize text-primary font-medium m-4`}
                key={idx}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <div className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
        {projects.map((item, idx) => {
          return (
            <div key={idx} className='flex flex-col'>
              <img className='mb-8' src={item.image} alt='' />
              <p className='capitalize text-sm font-semibold text-primary mb-3'>
                {item.category}
              </p>
              <h3 className='text-2xl font-semibold capitalize mb-3'>
                {item.name}
              </h3>
              <p className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
                obcaecati ipsam.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
