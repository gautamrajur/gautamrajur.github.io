
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="max-w-6xl mx-auto stagger-animation">
        <h1 className="hero-text opacity-0 animate-stagger-fade-in mb-6">
          <span className="block mb-2">Design.</span>
          <span className="block mb-2">Develop.</span>
          <span className="block">Deliver.</span>
        </h1>
        <p className="description-text mx-auto opacity-0 animate-stagger-fade-in mb-8">
          Crafting exceptional digital experiences with attention to detail and a passion for perfection.
        </p>
        <div className="opacity-0 animate-stagger-fade-in">
          <Button 
            className="rounded-full px-8 py-6 bg-apple-blue hover:bg-blue-500 text-white transition-colors"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce w-10 h-10 flex items-center justify-center rounded-full border border-apple-gray"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
