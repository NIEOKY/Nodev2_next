import { useState } from 'react';
import '../resources/images/PaginaWeb.png';

import { Asap_Condensed } from '@next/font/google';
const image1 = '../resources/images/PaginaWeb.png';
const spaceData = [
  {
    name: 'Pagina web',
    image: 'paginaweb.png',
    content:
      'Crea una presencia en línea para tu negocio con una página web moderna y profesional.',
  },
  {
    name: 'Comercio electronico',
    image: 'comercio.png',
    content:
      'Vende tus productos en línea con una tienda en línea atractiva y fácil de usar que aumentará tus ventas.',
  },
  {
    name: 'Aplicaciones moviles',
    image: 'https://source.unsplash.com/random/600x400',
    content:
      'Haz crecer tu negocio y llega a más clientes con una aplicación móvil que les permita acceder a tus productos y servicios desde cualquier lugar.',
  },
  {
    name: 'Punto de ventas',
    image: 'https://source.unsplash.com/random/600x400',
    content:
      'Gestiona y administra tu negocio de manera más eficiente con un sistema de punto de venta que te ayudará a aumentar tus ventas y a simplificar tus operaciones diarias.',
  },
];

const Services = () => {
  const [activeSpace, setActiveSpace] = useState(spaceData[0].name);

  const handleSpaceClick = (space: string) => {
    setActiveSpace(space);
  };

  const activeSpaceData = spaceData.find((space) => space.name === activeSpace);

  return (
    <div
      className="dark:bg-[#161616] bg-white p-4 flex flex-col items-center "
      id="services"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center justify-center mb-16 text-center">
        NUESTROS SERVICIOS
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/4 lg:px-2 mb-8 lg:mb-0">
          <ul className="space-y-6">
            {spaceData.map((space) => (
              <li
                key={space.name}
                className={`cursor-pointer py-4 px-6 rounded-lg ${
                  activeSpace === space.name
                    ? 'dark:bg-[rgba(44,44,44)] bg-[rgba(230,230,230)] text-black dark:text-white'
                    : 'bg-white dark:bg-[rgba(22,22,22)] text-black dark:text-white'
                } hover:bg-[rgba(240,240,240)] dark:hover:text-white transition-colors duration-300 dark:hover:bg-[#1e1e1e]`}
                onClick={() => handleSpaceClick(space.name)}
              >
                <h2 className="font-bold text-2xl mb-2">{space.name}</h2>
                <p className="text-base">{space.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[60%] lg:px-12 flex justify-center items-center rounded-xl">
          <div className="aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 rounded-xl flex justify-center items-center max-w-[800px]">
            <div className="min-w-[300px] min-h-[225px] lg:min-w-[800px] lg:min-h-[450px]">
              <img
                src={activeSpaceData?.image}
                alt=""
                className="object-cover w-full h-full rounded-xl shadow-2xl transform lg:hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
