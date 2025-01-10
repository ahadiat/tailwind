import React from 'react'
import Rtl from './slide';



const Lay = () => {

  

  return (
    <div className='w-full h-screen bg-white'>
        <div className='relative font-cookie text-orange-600 text-center px-3 text-[44px] flex flex-col items-center'>
          <div className=''> Your Go To Cake Shop & Cafe in</div>
          <div className='absolute top-10'>Malaysia</div>         
         </div>
         <div className='font-cookie text-gray-400 text-center mt-9 px-3 text-[36px]'>Secret Recipe News & Promotions</div>
        <Rtl />
    </div>
    
  );
}

export default Lay;


