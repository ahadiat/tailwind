import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Lay from './components/Part2/Lay.jsx';
import Navbar from './components/Navbar.jsx';

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Navbar />
          <Hero />
          <Lay />
        
    </div>
  
  

  );
}

export default Home;