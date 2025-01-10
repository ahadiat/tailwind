import React from 'react';
import Slider from "react-slick";


const Gamba = [
  {
    id: 'sat',
    gam: '',
    tajuk: '“Where Tradition Meets Taste”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'dua',
    gam: '',
    tajuk: '“Tiada lagi di dunia ini”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'tiga',
    gam: '',
    tajuk: '“percaya pada mu bagai bulan”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
  {
    id: 'empat',
    gam: '',
    tajuk: '“ada teratak dihujung kampung”.',
    para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
    link: '/'
  },
];



const ImageList = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1497620081/photo/different-multicolored-sweet-donuts-donuts-with-icing-and-sprinkles-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=wk2mI_M7LtplR2t4Y-lVJANzUNK4iQk4bBY0yctoG58=",
    title: "Up to 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1471844577/photo/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=AQf89aZeq5GYS7owfkbQSasswh1_AnrQdPsXsqcmgVs=",
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1320254982/photo/rempeyek-kacang-or-peyek-kacang-is-one-of-type-traditional-snack-from-java-indonesia-rempeyek.jpg?s=612x612&w=0&k=20&c=tpug9KTtoNFnLgwiTm43Y6cdZXvg-918HlefhRU-5rg=",
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    className: "slider variable-width",

  
  };

  return (
    <div className="relative overflow-hidden w-screen  h-screen m-0  flex justify-center items-center  duration-200 ">
   
    {/* hero section */}
    <div className="w-screen h-screen relative">
      <Slider {...settings}>
        {ImageList.map((data) => (
         
            <div className="relative">
            
              {/* text content section */}
              <div className="bg-black text-white rounded-2xl mx-2 bg-opacity-45 w-[300px] sm:w-[200px] flex flex-col justify-center mt-20 gap-4 pt-10 px-2  text-left text-wrap absolute">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-xl font-bold"
                >
                  {data.title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm  text-white"
                >
                  {data.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className='my-3 mr-40'
                >
                  <button
                    onClick={handleOrderPopup}
                    className=" bg-gradient-to-r bg-orange-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>
              {/* image section */}
              
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className=""
                >
                  <img
                    src={data.img}
                    alt=""
                    className="object-cover w-screen h-screen"
                  />
                </div>
              </div>
             

        ))}
      </Slider>
    </div>
  </div>
);
};

export default Hero;