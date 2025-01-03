import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react"
import '../public/Hero.css'

const Gamba = [
  {
    id: 'sat',
    gam: 'https://media.istockphoto.com/id/1497620081/photo/different-multicolored-sweet-donuts-donuts-with-icing-and-sprinkles-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=wk2mI_M7LtplR2t4Y-lVJANzUNK4iQk4bBY0yctoG58=',
    tajuk: '“Where Tradition Meets Taste”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'dua',
    gam: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    tajuk: '“Tiada lagi di dunia ini”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'tiga',
    gam: 'https://media.istockphoto.com/id/1471844577/photo/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=AQf89aZeq5GYS7owfkbQSasswh1_AnrQdPsXsqcmgVs=',
    tajuk: '“percaya pada mu bagai bulan”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'empat',
    gam: 'https://media.istockphoto.com/id/1320254982/photo/rempeyek-kacang-or-peyek-kacang-is-one-of-type-traditional-snack-from-java-indonesia-rempeyek.jpg?s=612x612&w=0&k=20&c=tpug9KTtoNFnLgwiTm43Y6cdZXvg-918HlefhRU-5rg=',
    tajuk: '“ada teratak dihujung kampung”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
];



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(3000); // Fast speed initially
  const [timeoutId, setTimeoutId] = useState(null); // State for timeout ID
  const [direction, setDirection] = useState('left');

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === Gamba.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Gamba.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  }

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
 /*
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Gamba.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 0) % Gamba.length);
  };

  

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIntervalTime(20000);
    resetSpeed(); // Slow down when manually changing slide
   // Reset speed after manual change
  };

  const resetSpeed = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    const newTimeoutId = setTimeout(() => {
        setIntervalTime(3000); // Reset back to default speed
    }, 3000); // Wait for 5 seconds before resetting speed
    setTimeoutId(newTimeoutId); // Store the new timeout ID
};

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, intervalTime);
    
    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
      clearTimeout(timeoutId); // Cleanup timeout on unmount
    };
  }, [intervalTime]);

  useEffect(() => {
    const handleMouseOver = () => {
        setIntervalTime(20000); // Change interval time on mouse over
    };

    const handleMouseLeave = () => {
      resetSpeed(); // Reset to original interval time on mouse leave
    };

    // Add event listeners
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners on unmount
    return () => {
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []); // Empty array means this runs once when the component mounts
  */
  return (
    <div className="w-full h-screen m-auto relative" id='vary'>
      <div className="relative w-full">
      <AnimatePresence>
        <motion.img src={Gamba[currentIndex].gam}
         alt={Gamba[currentIndex].tajuk}  
         variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
             className="w-full h-screen object-cover " />
        </AnimatePresence>
        <div className="slide_direction hidden lg:block">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
        <div className='relative max-w-[767px] p-4 text-white rounded-lg bg-gray-500 w-[520px] h-[250px] bg-opacity-65 left-1/2 -translate-x-1/2 -top-[580px]'>
          <h2 className="my-2 break-words leading-[50px] text-[44px] text-left font-light">{Gamba[currentIndex].tajuk}</h2>
          <p className="text-sm text-white text-[18px] text-left">{Gamba[currentIndex].para}</p>
          <a href={Gamba[currentIndex].link} className="bg-gradient-to-r from-orange-900 to-orange-600 bottom-4 group absolute h-12 justify-center gap-2 w-52 flex items-center rounded border-2 border-black">
            <div className='hover:text-gray-300 text-white text-center'>Learn More</div>
            <div className='text-lg group-hover:translate-x-1 duration-75 bg-white bg-opacity-30 w-9 rounded-lg px-2 h-auto'>&#8594;</div>
          </a>
        </div>

        <div className='absolute left-1/2 transform -translate-x-1/2 flex space-x-2 bottom-[300px]'>
          {Gamba.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-1 rounded-full focus:outline-none ${currentIndex === index ? 'bg-blue-500 w-5 transform -translate-y-1/2' : 'bg-gray-300'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
