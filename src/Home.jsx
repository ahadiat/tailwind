import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Projects from "./components/Part2/Projects";
import Navbar from './components/Navbar.jsx';

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Navbar />
          <Hero  />
          <LightColor>
        <Projects />
      </LightColor>
        
    </div>
  
  

  );
}

export default Home;
