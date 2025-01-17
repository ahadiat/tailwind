import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Projects from "./components/Part2/Projects";
import Navbar from './components/Navbar.jsx';
import styled from "styled-components";
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;