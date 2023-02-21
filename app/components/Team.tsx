import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const team = [
  {
    name: 'Orlando López ',
    role: 'Full Stack Developer',
    image: 'orlando.jfif',
  },
  {
    name: 'Tomas Ramírez',
    role: 'Backend Developer',
    image: 'tomy.jpeg',
  },
  {
    name: 'Jesus Gomez ',
    role: 'Especialista en Artificial Intelligence',
    image: 'jesus.jfif',
  },
  {
    name: 'Antonio Muñoz',
    role: 'Especialista en Data analytics',
    image: 'anto.jpg',
  },
  {
    name: 'Alan Montes',
    role: 'Especialista en Redes',
    image: 'alan.jpg',
  },
];

import { MouseEventHandler, HTMLAttributes } from 'react';

const SlickArrowLeft = ({ onClick }: { onClick: MouseEventHandler }) => (
  <div
    className="absolute top-1/2 left-0 -translate-y-1/2 z-10 "
    onClick={onClick}
  >
    <FiChevronLeft className="text-4xl text-black dark:text-white cursor-pointer" />
  </div>
);

const SlickArrowRight = ({ onClick }: { onClick: MouseEventHandler }) => (
  <div
    className="absolute top-1/2 right-0 -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <FiChevronRight className="text-4xl text-black dark:text-white cursor-pointer" />
  </div>
);

const TeamCarousel = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <SlickArrowLeft onClick={() => {}} />,
    nextArrow: <SlickArrowRight onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      className="md:m-24 m-12 bg-white dark:bg-[#161616] dark:text-white"
      id="team"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center justify-center mb-16 text-center">
        NUESTRO EQUIPO
      </h1>
      <div className="">
        <Slider {...settings}>
          {team.map((person) => (
            <div
              key={person.name}
              className=" transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 my-20"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-center">{person.name}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-center">
                {person.role}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
