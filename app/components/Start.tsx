'use client';
import Hero from '@/app/components/hero';
import Navbar from '@/app/components/Navbar';
import Iconslider from '@/app/components/Iconslider';
import AccordionP from '@/app/components/AccordionP';

const buttons = ['Home', 'About', 'Contact'];

const Start: React.FC = () => {
  return (
    <div className="w-screensds h-screen bg-white">
      <Navbar buttons={buttons} />
      <Hero />
      <Iconslider />
      <AccordionP />
    </div>
  );
};

export default Start;
