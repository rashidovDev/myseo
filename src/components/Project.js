import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <a href={item.href}>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='imag' width={250} height={300} />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <p className='text-2xl text-slate-50 font-semibold capitalize mb-3'>{item.name}</p>
      <p className='text-base max-w-md'>
       {item.title}
      </p>
      </a>
    </div>
  );
};

export default Project;
