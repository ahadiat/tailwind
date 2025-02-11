import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';



const navbarItems = [
 
  { 
    id: 1,
    title: "Our Story",
    link: "/Utama",
  },
  
  {
    id: 2,
    title: "Products & Foods",
    link: "/products",
  },



  { 
    id: 3,
    title: "News & Promotions",
    link: "/company",
 },

 { 
    id: 4,
    title: "Contact",
    link: "/company",
},

{ 
  id: 5,
  title: "FAQ",
  link: "/company",
}

];

const icons = [
  { id: 1, component: <TiSocialFacebook /> },
  { id: 2, component: <SlSocialInstagram /> },
  { id: 3, component: <TiSocialYoutube /> },
  { id: 4, component: <FaTiktok /> }
];

export const Mini = () => {

  const [nav, setNav] = useState(false)
 
  const hand = () => {
  
      setNav(!nav)
  }
  
  return (
    
    <div className='relative'>
        <div className='w-[800px] lg:w-[980px] h-screen lg:-left-[850px]  -left-[550px] -top-10 absolute bg-black bg-opacity-35' ></div>
   <div className='w-full h-screen left-0 z-10 overflow-scroll fixed '>
  <Fade>
     <div  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"className= {!nav ? 'bg-black rounded-3xl absolute xl:hidden left-5 right-5 top-1 transform text-white p-11 rounded shadow-2xl ease-in-out duration-500'  : 'fixed left-[-100%]'}>
          <div className='flex justify-between items-center'>
            <div className='flex'>
            <Link to="/" className='cursor-pointer'>
                <h1 className='text-2xl text-orange-400'>Aqemny</h1>
            </Link>
            <PiTrademarkRegisteredLight className='text-orange-400'/>
            </div>
         
         <IoMdCloseCircle className='text-orange-600 cursor-pointer bg-black rounded-full text-4xl' onClick={hand}/>
          </div>
         
          <ul className="my-10 flex flex-col gap-3">
        {navbarItems.map((item, index) => (
          <li key={index} className="relative gap-6 ">
            <a href={item.link} className="group hover:text-yellow-400 text-orange-300">
              {item.title}
            </a>

            {/* Show sub-items on hover if they exist */}
            {item.subItems && (
              <ul className=" hover:block  mt-2  text-white">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-yellow-300"
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      

      <div className="flex space-x-4">
            {/* Step 3: Render the icons using map */}
            {icons.map(icon => (
                <div key={icon.id} className="cursor-pointer flex gap-6 text-orange-400 text-3xl ">
                    {icon.component}
                </div>
            ))}
        </div>
     
        </div>
        </Fade>
        
   </div>
   </div>
       
       
      
  
     
    
  )
}


const Navbar = () => {

    const [isBlue, setIsBlue] = useState(false);
    const [showMini, setShowMini] = useState(false);

    const handleLogoClick = () => {
        setIsBlue(true); // Start the animation
        // Reset after animation duration
        setTimeout(() => {
            setIsBlue(false); // Allow re-triggering on next click
        }, 400); // Match this duration with your CSS animation duration. A setTimeout is used to reset isAnimating back to false after 300 milliseconds (the duration of your CSS animation).

    
    };

    

    const handleClick = () => {
      handleLogoClick(); // Call the function
      setShowMini(!showMini); // Toggle visibility of Mini component
     
  };


  return (
    
   <div className=' bg-white whitespace-nowrap h-16   fixed z-30 shadow-2xl lg:text-whites top-0 w-full flex rounded-xl rounded-tr-none rounded-tl-none '>
   
 
             
            

     <nav className="relative hidden mx-7 xl:mx-4 op:mx-[200px] xl:block">
    
        <div className='grid grid-cols-12'>
        <Link to="/" className='text-orange-700 text-4xl pr-8 pl-2 font-cookie col-span-2 justify-self-start py-3'>
                Aqemny
            </Link>
        <ul className="flex col-span-8 ">
        {navbarItems.map((item, index) => (
          <li key={index} className="relative py-5 px-3 hover:scale-125 duration-200 group h-16  w-auto ">
            <a href={item.link} className=" text-orange-700 hover:text-black ">
              {item.title}
            </a>

            {/* Show sub-items on hover if they exist */}
            {item.subItems && (
              <ul className=" bg-white hidden group-hover:block mt-5 absolute z-10 text-orange-700 rounded shadow-lg ">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.link}
                      className="px-4 py-2 hidden group-hover:block rounded-b-lg border-b-orange-500 hover:bg-orange-300 hover:text-black"
                    >
                      {subItem.title}
                    </a>
                   
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        
      </ul>
     
      <div className='col-span-2 justify-self-end py-2'>
      <button className='w-24 h-10 hover:bg-orange-400 hover:text-white  bg-gradient-to-r border-orange-600 border-2 mx-1 text-orange-500 bg-orange-100 rounded'>Sign In</button>
      <button className='w-28 h-12 text-white hover:scale-125 duration-200  bg-gradient-to-r border-2 border-black bg-orange-700 rounded-full mx-2'>Order Now</button>
      </div>
     
     
     
                
           
        </div>
     
      
    </nav>
    <div className='relative  text-orange-700 bg-white items-center px-16 flex justify-between w-full xl:hidden'>
    <MdMenu id='logo'  className={`text-3xl hidden cursor-pointer ${isBlue ? 'animate-rotate-slow' : ''}`} // Tailwind classes for colors
                onClick={handleLogoClick} />
 <Link to="/" className='cursor-pointer'>
                <h1 className='font-cookie text-3xl '>Aqemny</h1>
            </Link>
<div onClick={handleClick} >
    { !showMini ? <MdMenu id='logo'  className={`text-xl font-extrabold   cursor-pointer ${isBlue ? 'animate-rotate-slow' : ''}`} // Tailwind classes for colors     
    /> : <Mini /> }       
                           </div>        
                
    </div> 
  
  

   </div>
   
   
  
   
  );};

  


export default Navbar;
