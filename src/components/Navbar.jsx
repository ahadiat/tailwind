import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { PiTrademarkRegisteredLight } from "react-icons/pi";


const navbarItems = [
  { title: "Home", link: "/home" },
  { title: "About Us", link: "/about" },
  
  {
    title: "Products",
    link: "/products",},



  { title: "Company", link: "/company",
  subItems: [
    { title: "Our Company", link: "/products/burger" },
    { title: "News & Promotions", link: "/products/hotdog" },
    { title: "Associate", link: "/products/hotdog" },
    { title: "Blogs", link: "/products/hotdog" }
  ]
 },
 { title: "Service", link: "/company",
 subItems: [
   { title: "FAQ", link: "/products/burger" },
   { title: "Terms of Use", link: "/products/hotdog" },
   { title: "Contact Us", link: "/products/hotdog" }
  
 ]
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
   <div className='w-full h-screen left-0 z-10 fixed bg-black bg-opacity-35'>
    <div className='w-full h-10 left-0 -top-10 absolute bg-black bg-opacity-35' ></div>
     <div className= {!nav ? 'bg-black absolute lg:hidden left-5 right-5 top-1 transform text-white p-11 rounded shadow-2xl ease-in-out duration-500'  : 'fixed left-[-100%]'}>
          <div className='flex justify-between items-center'>
            <div className='flex'>
            <h1 className='cursor-pointer text-orange-400'>Aqemny</h1>
            <PiTrademarkRegisteredLight className='text-orange-400'/>
            </div>
         
         <IoMdCloseCircle className='text-orange-600 cursor-pointer bg-black rounded-full text-4xl' onClick={hand}/>
          </div>
         
          <ul className="my-10 flex flex-col gap-3">
        {navbarItems.map((item, index) => (
          <li key={index} className="relative gap-6 ">
            <a href={item.link} className=" hover:text-yellow-400 text-orange-300">
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
    
   <div className='lg:bg-gray-800 bg-white h-20 shadow-2xl lg:text-whites top-0 w-full flex rounded-xl'>
   
     <nav className="relative">
       
        <div className='hidden lg:block'>
        <ul className="flex space-x-4 p-4">
        {navbarItems.map((item, index) => (
          <li key={index} className="relative group h-16 w-auto ">
            <a href={item.link} className="px-4 py-2 hover:text-yellow-400 text-white">
              {item.title}
            </a>

            {/* Show sub-items on hover if they exist */}
            {item.subItems && (
              <ul className="hidden hover:block bg-gray-800 mt-2 absolute z-10 text-white rounded shadow-lg group-hover:block">
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
        </div>
     
      
    </nav>
    <div className='relative grid text-orange-800 bg-white items-center grid-cols-2 px-16  w-full lg:hidden'>
    <MdMenu id='logo'  className={`text-4xl hidden cursor-pointer ${isBlue ? 'animate-rotate-slow' : ''}`} // Tailwind classes for colors
                onClick={handleLogoClick} />

<h1 className='cursor-pointer font-light justify-self-start'>Aqemny</h1>
<div onClick={handleClick} >
    { !showMini ? <MdMenu id='logo'  className={`text-4xl  justify-self-end  cursor-pointer ${isBlue ? 'animate-rotate-slow' : ''}`} // Tailwind classes for colors     
    /> : <Mini /> }       
                           </div>        
                
    </div> 
  
  

   </div>
   
   
  
   
  );};

  


export default Navbar;
