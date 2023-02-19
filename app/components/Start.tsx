'use client';
import Hero from '@/app/components/hero';
import Navbar from '@/app/components/Navbar';
import Iconslider from '@/app/components/Iconslider';
import AccordionP from '@/app/components/AccordionP';
import Services from './Services';

const buttons = ['Home', 'About', 'Contact'];

const Start: React.FC = () => {
  return (
    <div className="w-screensds h-screen bg-white dark:bg-[#0F0F0F] dark:text-white ">
      <Navbar buttons={buttons} />
      <Hero />
      <Iconslider />
      <AccordionP />
      <Services />
    </div>
  );
};

export default Start;
