import React, { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
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
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true) 
      setTimeout(() => {
         setLoading(false)
      },2400)
  },[])
  
  return (
    <>
    {
      loading ?  
      <div className='w-full h-screen bg-black flex justify-center items-center'>
              <HashLoader className='' color={"#AC6B34"} loading={loading} size={60} />
      </div>
      :
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
    }
    </>
  );
};

export default App;
