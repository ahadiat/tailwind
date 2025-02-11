import React from 'react'
import Paro from '../../assets/Roti.png'
import Bake from '../../assets/Bake.png'
import Loyang from '../../assets/Loyang.png'
import Timeline from './Timeline'

const Utama = () => {
  return (
    <div className='w-full h-full'>
      <div className='h-[300px] relative bg-cover bg-center'  style={{ backgroundImage: `url(${Paro})` }}>
       
      <div className="absolute inset-0 bg-orange-800 opacity-50"></div> {/* Adjust opacity as needed */}
            <h1 className="relative text-white text-[3rem] font-lily-script text-center pt-[200px]">
                Our Stories
            </h1>
      </div>

      <div className='kl:grid kl:grid-cols-2 pt-7 '>
        <p className=' kl:order-1 pt-20 pb-11 px-7 xl:pl-4 op:pl-[200px] xl:pr-2 op:pr-[50px] text-justify'> ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida metus at augue tincidunt, a consequat est aliquet. Nulla tempor sagittis tortor, nec congue purus convallis nec. Suspendisse convallis erat at nunc laoreet feugiat. Etiam et hendrerit est. Vestibulum sit amet aliquam urna. Donec non velit urna. Nam quis semper arcu, id malesuada est.</p>
        <img src={Bake} alt="bake" className='kl:order-2 kl:rounded-3xl object-cover xl:pl-4 op:pl-[200px]' />
        <p className=' pt-20 pb-11 kl:order-2 px-7 xl:pr-4 op:pr-[200px] xl:pl-2 op:pl-[50px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida metus at augue tincidunt, a consequat est aliquet. Nulla tempor sagittis tortor, nec congue purus convallis nec. Suspendisse convallis erat at nunc laoreet feugiat. Etiam et hendrerit est. Vestibulum sit amet aliquam urna. Donec non velit urna. Nam quis semper arcu, id malesuada est.</p>
        <img src={Loyang} alt="bake" className='kl:order-1 kl:rounded-3xl object-cover xl:pr-4 op:pr-[200px] '/>
      </div>

      <div>
        <h1 className='text-[2rem] pt-14 font-light text-orange-500 text-center'>Perjalanan Kami</h1>
          <Timeline />
      </div>
    </div>
  )
}

export default Utama