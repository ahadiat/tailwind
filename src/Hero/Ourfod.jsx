import React from 'react'
import say from '../assets/Donuts.png'
import { Fade } from 'react-awesome-reveal';

const Ourfod = () => {
  return (
    <div className='relative overflow-hidden'>
        <div className='kl:w-2/3 w-full  h-[400px] -translate-x-24'>
        <img src={say} alt="" className='h-full w-full object-cover'/>
        </div> 
          <div className='absolute top-0 right-0 h-full kl:w-5/6 w-full bg-gradient-to-l  from-white via-white to-white/0'>
          <Fade direction="left"  duration={1000} >
          <div className='w-auto h-auto mx-7 mt-20 xl:mr-4 xl:ml-[400px] op:ml-[600px] op:mr-[200px]'>
            <h1 className='font-cookie text-orange-800 text-[2rem] ml-2'>Our foods</h1>
            <p className='text-black mt-4 font-light'>As the leading and largest cafe chain, Aqemny is Malaysia’s favourite cake shop and cafe. It has grew rapidly and currently operates more than 440 outlets, across the region, including Malaysia, …</p>
            </div>
            </Fade> 
            </div>
        
    </div>
  
  )
}

export default Ourfod