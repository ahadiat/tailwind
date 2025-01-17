import React, {useEffect} from 'react';
import Slider from "react-slick";
import "aos/dist/aos.css";
import AOS from 'aos'; // Ensure AOS is imported

const ImageList = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1497620081/photo/different-multicolored-sweet-donuts-donuts-with-icing-and-sprinkles-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=wk2mI_M7LtplR2t4Y-lVJANzUNK4iQk4bBY0yctoG58=",
    title: "Pembelian Online yang Mudah & Cepat! ",
    description: "Pesan dengan mudah melalui GrabFood atau bayar tunai semasa penghantaran – pantas, mudah, dan selesa!",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    title: "Nikmati Diskaun Eksklusif Terkini!",
    description: "Jangan ketinggalan! Ketahui info produk terkini dan nikmati diskaun hebat hanya dengan beberapa klik!",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1471844577/photo/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=AQf89aZeq5GYS7owfkbQSasswh1_AnrQdPsXsqcmgVs=",
    title: "Dari Permulaan Kecil ke Langkah Besar",
    description: "Temui bagaimana visi dan dedikasi kami mengangkat Aqemny, meraih kepercayaan anda hari ini.",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1320254982/photo/rempeyek-kacang-or-peyek-kacang-is-one-of-type-traditional-snack-from-java-indonesia-rempeyek.jpg?s=612x612&w=0&k=20&c=tpug9KTtoNFnLgwiTm43Y6cdZXvg-918HlefhRU-5rg=",
    title: "Apa Kata Pelanggan Setia Kami?",
    description: "Baca kisah nyata dari pelanggan kami yang gembira – suara anda, keutamaan kami! 🌟",
  },
];

const Hero = () => {


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
   

  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    AOS.refresh(); // Refresh AOS animations on initial load
  }, []); // Run effect only once on mount

  const handleOrderClick = (id) => {
    console.log(`Order button clicked for item with ID: ${id}`);
    // Here you can implement your logic for handling orders (e.g., opening a modal)
  };

  return (
    <div className="relative overflow-hidden w-screen h-screen m-0 flex justify-center items-center duration-200">
      {/* hero section */}
      <div className="w-screen h-screen relative">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="relative">
              {/* text content section */}
              <div className="bg-black text-white rounded-2xl mx-4 kl:mx-40 bg-opacity-45 w-[300px] md:w-[350px] lg:w-[500px] flex flex-col justify-center mt-40 lg:mt-52 gap-4 pt-10 px-2 text-left text-wrap z-10 absolute">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-xl md:text-3xl lg:text-5xl font-medium"
                >
                  {data.title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm lg:text-base font-light text-white"
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
                    onClick={() => handleOrderClick(data.id)} // Call handleOrderClick with current ID
                    className="bg-gradient-to-r bg-orange-700 hover:scale-125 border-2 duration-200 text-white py-1 px-2 w-28 mx-4 rounded-full"
                  >
                    <h2>Order Now</h2>
                  </button>
                </div>
              </div>
              {/* image section */}
              <div>
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
