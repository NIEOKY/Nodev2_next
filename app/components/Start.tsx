'use client';
import Hero from '@/app/components/hero';
import Navbar from '@/app/components/Navbar';
import Iconslider from '@/app/components/Iconslider';

import Services from './Services';
import TeamCarousel from './Team';
import Contact from './Contact';

const buttons = ['Home', 'About', 'Contact'];

const Start: React.FC = () => {
  return (
    <div className="w-screensds h-full bg-white dark:bg-[#161616] dark:text-white ">
      <Navbar buttons={buttons} />
      <Hero />
      <Iconslider />
      <Services />
      <TeamCarousel />
      <Contact />
    </div>
  );
};

export default Start;
