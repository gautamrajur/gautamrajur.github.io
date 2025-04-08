import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100); // Responsive number of particles
    const connectionDistance = 150;
    const mouseRadius = 120;

    // Colors
    const particleColor = 'rgba(59, 130, 246, 0.5)'; // Blue with opacity (matches apple-blue)
    const lineColor = 'rgba(59, 130, 246, 0.2)'; // Lighter blue for connections

    // Mouse position tracking
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
    };

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    // Handle mouse leaving
    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5; // Slow speed for gentle movement
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      
      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Check if mouse is nearby and create repulsion effect
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            const angle = Math.atan2(dy, dx);
            const repulsionForce = (mouseRadius - distance) / mouseRadius;
            this.x -= Math.cos(angle) * repulsionForce * 2;
            this.y -= Math.sin(angle) * repulsionForce * 2;
          }
        }
        
        // Edge detection with bounce
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }
    
    // Create particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Connect particles with lines if they're close enough
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            if (!ctx) return;
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      
      <div className="max-w-6xl mx-auto stagger-animation z-10">
        <h1 className="hero-text opacity-0 animate-stagger-fade-in mb-6">
          <span className="block mb-2">Gautam Raju</span>
          <span className="block mb-2 text-3xl md:text-4xl text-apple-blue">Software Development Engineer</span>
          <span className="block text-xl md:text-2xl font-normal text-apple-darkgray">DevSecOps • Full-Stack • Cloud Architecture • Mobile Apps</span>
        </h1>
        <p className="description-text mx-auto opacity-0 animate-stagger-fade-in mb-8">
          Building scalable, high-performance applications with attention to detail and a passion for excellence.
        </p>
        <div className="opacity-0 animate-stagger-fade-in flex flex-wrap gap-4 justify-center">
          <Button 
            className="rounded-full px-8 py-6 bg-apple-blue hover:bg-blue-500 text-white transition-colors"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            className="rounded-full px-8 py-6 bg-white border border-apple-blue text-apple-blue hover:bg-apple-blue/5 transition-colors"
            asChild
            variant="outline"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a 
          href="#about" 
          className="animate-bounce w-10 h-10 flex items-center justify-center rounded-full border border-apple-gray bg-white/80"
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