'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

//the props of the page will be the buttons of the page

type Buttons = string[];

const Navbar: React.FC<{ buttons: Buttons }> = ({ buttons }) => {
  const [open, setOpen] = useState(false);
  const [darkSide, setDarkSide] = useState(false);

  const toggleDarkMode = () => {
    setDarkSide(!darkSide);
  };

  useEffect(() => {
    if (darkSide) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkSide]);

  return (
    <nav
      className={`w-full  fixed flex lg:flex-row flex-col items-center shadow-lg h-auto  justify-center bg-white dark:bg-[#0F0F0F] dark:text-white z-10  opacity-[0.95]`}
    >
      <div className="flex items-center flex-shrink-0  mr-6 h-20 pl-6">
        <a className="font-semibold text-4xl tracking-tight " href="">
          Nodev
        </a>
        <div className="pl-36 block lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-900 dark:hover:text-white dark:hover:border-white"
          >
            <svg
              className="fill-current h-6 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-end justify-end lg:hidden ">
          <DarkModeSwitch
            style={{ marginLeft: '2rem' }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </div>

      <div
        className={`${
          open ? '' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto `}
      >
        <div className=" lg:p-0 lg:pt-1 lg- p-8 lg:flex w-full lg:flex-row  lg:justify-end  ">
          {buttons.map((button) => (
            <a
              key={button}
              href={`#${button}`}
              className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl px-10"
              onClick={() => setOpen(false)}
            >
              {button}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:flex items-center justify-center hidden ">
        <DarkModeSwitch
          style={{ marginRight: '1rem' }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </nav>
  );
};

export default Navbar;

export type { Buttons };
