import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Padrom from '/Foodm.png'


const AfroStyles = [
    {
      id: 'mat',
      gam: [Padrom],
      tajuk: '“Where Tradition Meets Taste”.',
      para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
      link: '/'
    },
    {
      id: 'mua',
      gam: {Padrom},
      tajuk: '“Tiada lagi di dunia ini”.',
      para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
      link: '/'
    },
    {
      id: 'miga',
      gam: 'https://media.istockphoto.com/id/1471844577/photo/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=AQf89aZeq5GYS7owfkbQSasswh1_AnrQdPsXsqcmgVs=',
      tajuk: '“percaya pada mu bagai bulan”.',
      para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
      link: '/'
    },
    {
      id: 'mempat',
      gam: 'https://media.istockphoto.com/id/1320254982/photo/rempeyek-kacang-or-peyek-kacang-is-one-of-type-traditional-snack-from-java-indonesia-rempeyek.jpg?s=612x612&w=0&k=20&c=tpug9KTtoNFnLgwiTm43Y6cdZXvg-918HlefhRU-5rg=',
      tajuk: '“ada teratak dihujung kampung”.',
      para: 'Spend & get rewarded with every purchase at SR GO! or Secret Recipe Cake Shop & Cafe',
      link: '/'
    },
  ];

const App = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
  };

  return (
    <div className="w-full h-auto">
  <h1 className="header">Afro Styles Fashion Store</h1>
  <div className="container">
    <Slider {...settings}>
      {AfroStyles.map((item) => (
        <div key={item.id}>
          <div className="">
            <img src={item.gam} alt={item.link} />
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
  );
};

export default App;
  