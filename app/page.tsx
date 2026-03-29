import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <HowItWorks />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
