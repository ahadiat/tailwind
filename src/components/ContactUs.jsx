import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";

const icons1 = [
  { id: 1, component: <TiSocialFacebook /> },
  { id: 2, component: <SlSocialInstagram /> },
  { id: 3, component: <TiSocialYoutube /> },
  { id: 4, component: <FaTiktok /> }
];

const ContactUs = () => {
  return (
    <div className='relative overflow-hidden '>
      <div className='bg-orange-900 text-white op:px-[200px] flex justify-between sm:flex-wrap px-7  pb-10'>
        <div className='w-[600px] '>
        <h1 className='text-orange-300 font-cookie text-[3rem] py-3'>Aqemny</h1>
   <p className='font-light text-[16px] w-auto'>Aqemny promises a value lifestyle proposition of great variety and quality food at affordable prices. The uncompromising quality of food</p>
  <a href="#" className='text-orange-400 font-thin'>Read More</a>
        </div>
     
  <div className='mt-8'>
  <h2 className='pt-2 font-light text-[1.3rem]'>Contact Us</h2>
   <div className='bg-orange-400 h-1 w-8 opacity-30 text-[16px]'></div>
   <div className='flex gap-5 my-2'>
   <p className='font-light text-[16px] '>Email:</p>
   <p className='font-light text-[16px] '>aqemny.web.app</p>
   </div>
 
   <h2 className='pt-2 font-light text-[1.3rem]'>Follow Us</h2>
   <div className='bg-orange-400 h-1 w-8 opacity-30'></div>
   <div className="flex space-x-4 mt-2 pb-5">
            {/* Step 3: Render the icons using map */}
            {icons1.map(icon => (
                <div key={icon.id} className="cursor-pointer flex gap-6 text-orange-400 text-3xl ">
                    {icon.component}
                </div>
            ))}
        </div>
      </div>
     
    
  </div>
  <div className='bg-orange-950 py-2 h-full flex sm:flex-wrap justify-around sm:px-1 w-full text-[14px] px-7 xl:px-4 op:px-[200px]'>
  <div className=' text-white  text-[14px] text-nowrap'>Copyright © 2025 by Aqemny Enterprise. 199801011862 (467990-X) All Rights Reserved.</div>
  <div className='flex justify-self-end  '>
    <h3 className='text-white'>Order Policy</h3>
    <div className='my-1 mx-2 h-[14px] w-[1px] rounded-lg bg-white'></div>
    <h3 className='text-white'>Online Policy</h3>
    <div className='my-1 mx-2 h-[14px] w-[1px] rounded-lg bg-white'></div>
    <h3 className='text-white'>FAQ</h3>
  </div>
  </div>
 
  
    </div> 
    

  
  )
}

export default ContactUs