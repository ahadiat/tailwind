import React from 'react'
import say from '../assets/Delivery.png'
import { Fade } from 'react-awesome-reveal';
const Delivery = () => {


  
  return (

    <div className='relative overflow-hidden'>
    <div className=' w-full  h-[400px] ' data-aos="fade-up-right">
    <img src={say} alt="" className='h-full w-full object-cover'/>
    </div> 
    
    <div className='absolute top-0 left-0 h-full kl:w-5/6 w-full bg-gradient-to-r  from-white via-white to-white/0'>
    <Fade direction="right"  duration={1000} >
      <div className='w-auto h-auto mx-7 mt-20 xl:ml-4 xl:mr-[400px] op:mr-[600px] op:ml-[200px]'>
        <h1 className='font-cookie text-orange-800 text-[2rem] ml-2'>Our Stories</h1>
        <p className='text-black mt-4 font-light'>As the leading and largest cafe chain, Aqemny is Malaysia’s favourite cake shop and cafe. It has grew rapidly and currently operates more than 440 outlets, across the region, including Malaysia, …</p>
        </div>
      </Fade>
         </div>
   
    
</div>

   
  )
}

export default Delivery