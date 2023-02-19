import { useState } from 'react';

const spaceData = [
  {
    name: 'Pagina web',
    image: 'https://source.unsplash.com/random/800x600',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Comercio electronico',
    image: 'https://source.unsplash.com/random/800x600',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Aplicaciones moviles',
    image: 'https://source.unsplash.com/random/800x600',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
];

const Services = () => {
  const [activeSpace, setActiveSpace] = useState(spaceData[0].name);

  const handleSpaceClick = (space: string) => {
    setActiveSpace(space);
  };

  const activeSpaceData = spaceData.find((space) => space.name === activeSpace);

  return (
    <div className="dark:bg-[#161616] bg-white p-4 flex flex-col items-center ">
      <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center justify-center mb-16 text-center">
        NUESTROS SERVICIOS
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/4 lg:px-12 mb-12 lg:mb-0">
          <ul className="space-y-12">
            {spaceData.map((space) => (
              <li
                key={space.name}
                className={`cursor-pointer py-12 px-6 rounded-lg ${
                  activeSpace === space.name
                    ? 'dark:bg-[rgba(44,44,44)] bg-blue-700 text-white'
                    : 'bg-white dark:bg-[rgba(22,22,22)] text-gray-700 dark:text-white'
                } hover:bg-blue-700 hover:text-white transition-colors duration-300 dark:hover:bg-[#1e1e1e]`}
                onClick={() => handleSpaceClick(space.name)}
              >
                <h2 className="font-bold text-2xl mb-2">{space.name}</h2>
                <p className="text-xl">{space.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={activeSpaceData?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
