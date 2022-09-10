import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Introduction';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

const App = () => {
  return (
    <div className='bg-black relative'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
