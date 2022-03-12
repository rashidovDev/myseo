import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';

const App = () => {
  return (
    <div className='bg-white max-w-[1440px] mx-auto h-screen'>
      <Header />
      <Hero />
      <Brands />
    </div>
  );
};

export default App;
