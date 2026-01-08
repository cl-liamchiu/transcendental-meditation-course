import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CourseStructure from './components/CourseStructure';
import Teacher from './components/Teacher';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyMobileFooter from './components/StickyMobileFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-stone-50/50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CourseStructure />
        <Teacher />
        <Testimonials />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileFooter />
    </div>
  );
};

export default App;