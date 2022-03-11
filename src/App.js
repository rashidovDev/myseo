import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className='bg-white max-w-[1440px] mx-auto h-screen overflow-y-visible'>
        <Header />
        <Hero />
        <div className='h-[1500px]'>1</div>
      </div>
    </>
  );
};

export default App;
