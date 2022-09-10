import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='imag' width={250} height={300} />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <a href={item.href} className='text-2xl text-slate-50 font-semibold capitalize mb-3'>{item.name}</a>
      <p className='text-base max-w-md'>
       {item.title}
      </p>
    </div>
  );
};

export default Project;
