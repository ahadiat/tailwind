import React from 'react';
import Hero from './Hero/Hero1/Hero.jsx'
import Projects from "./Hero/Part2/Projects.jsx";

import Ourfod from './Hero/Ourfod.jsx';
import Delivery from './Hero/Delivery.jsx';
import ContactUs from './components/ContactUs.jsx';
import Connect from './Hero/Connect.jsx'
import styled from "styled-components";
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

 
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

          <Hero  />
          <LightColor>
        <Projects />
      </LightColor>
      <Ourfod />
      <Delivery />
      <Connect />
      <ContactUs />
    
        
    </div>
  
  

  );
}

export default Home;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;