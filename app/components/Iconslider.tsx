import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Iconslider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: 'linear',
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: 'linear',
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: 'linear',
            arrows: false,
          },
        },
      ],
    };
    const icons = [
      {
        name: 'React',
        icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      },

      {
        name: 'Tailwind',
        icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
      },
      {
        name: 'Node',
        icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      },
      {
        name: 'Mongo',
        icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      },

      {
        name: 'python',
        icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      },
      {
        name: 'Django',
        icon: 'https://cdn.worldvectorlogo.com/logos/django.svg',
      },
      {
        name: 'SQL',
        icon: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
      },
      {
        name: 'fastapi',
        icon: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
      },
    ];

    return (
      <div className="lg:px-36 dark:bg-[#161616] bg-white py-12 ">
        <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center justify-center mb-16">
          TECNOLOGIAS
        </h1>
        <Slider {...settings}>
          {icons.map((icon) => (
            <div className="py-12 " key={icon.name}>
              <img
                src={icon.icon}
                alt={icon.name}
                className="w-20 h-20 hover:scale-150 transform transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
