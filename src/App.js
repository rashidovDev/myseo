import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='bg-white max-w-[1600px] mx-auto relative'>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
