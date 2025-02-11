import React from 'react'
import Kilang from '../../assets/Kilang.png'


const aqemnyTimeline = [
    {
      id: 1,
      date: 'Jan 2010', // Year-Month-Day format
      title: 'Aqemny ditubuhkan ',
      description: 'Tuan Ahmad iaitu bapa kepada Ahmad Mustaqim selaku CEO syarikat mendaftar Aqemny sebagai sebuah perniagaan yang sah dan sebuah kilang dibina di Kawasan Perindustrian Sg. Bari.',
gam:[Kilang],
    },
    {
      id: 2,
      date: 'Mei 2012',
      title: 'Pelancaran Produk Pertama ',
      description: 'Aqemny melancarkan produk pertama mereka, sabun basuh "Bersih Kilat", yang mendapat sambutan hangat di pasaran tempatan.',
    },
    {
      id: 3,
      date: 'Feb 2015',
      title: 'Perluasan ke Pasaran Antarabangsa',
      description: 'Syarikat mula mengeksport produk ke negara-negara ASEAN, menandakan langkah pertama dalam pengembangan pasaran antarabangsa.',
      gam: [Kilang],
    },
    {
      id: 4,
      date: 'Des 2018',
      title: 'Anugerah Kecemerlangan Industri',
      description: 'Aqemny menerima anugerah "Syarikat Paling Inovatif" di Majlis Anugerah Industri Kebangsaan, mengiktiraf inovasi dalam produk dan proses pembuatan.',
    },
    {
      id: 5,
      date: 'Okt 2020',
      title: 'Pelancaran Rangkaian Produk Hijau ',
      description: 'Syarikat melancarkan rangkaian produk mesra alam yang diperbuat daripada bahan-bahan semula jadi, selaras dengan komitmen terhadap kelestarian.',
    },
    {
      id: 6,
      date: 'Sep 2023',
      title: 'Pembukaan Cawangan Baharu',
      description: 'Aqemny membuka cawangan baharu di Johor Bahru, memperluas jangkauan pasaran mereka di seluruh Malaysia. ',
    },
  ];
  

  


function Timeline() {
  return (
   
         
     
    
       <div className='pt-7 px-2 xl:px-14 op:px-[200px]'>
       {aqemnyTimeline.map((data) => (
<div key={aqemnyTimeline.id} className="relative flex ">

<div className='pr-2 pt-10'>
            <div className='bg-orange-800 w-5 h-5 rounded-full'></div>
            <div className='bg-orange-800 w-1 h-[250px] rounded-full mx-2 '></div>
       </div>

       <div>
       

        <div className='mt-10 bg-orange-50 xl:max-h-[200px] rounded-3xl xl:grid xl:grid-cols-5'>
        {data.gam && data.gam.map((image, index) => (
                  <img key={index} src={image} alt="Image" className='xl:order-1 xl:col-span-2 object-cover rounded-t-3xl xl:rounded-l-3xl xl:rounded-r-none w-full xl:max-h-[200px]' />
                ))}
                <div className='p-3 xl:order-2 xl:col-span-3'>
                <div className='text-lg font-thin pt-3 text-orange-800'>{data.date}</div>
       <div className='font-semibold text-2xl'>{data.title}</div>
            <div className='font-light pb-10'>{data.description}</div>
                </div>
              
            </div>

            </div>
       </div>

       
     ))}
       </div>

   
   
  )
}

export default Timeline