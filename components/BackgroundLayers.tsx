import React, { useState, useEffect } from 'react';

const BackgroundLayers: React.FC = () => {
  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow Images (Business/Cityscape - Grayscale ready)
  const slides = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Layer 1: Watermark Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 grayscale mix-blend-multiply dark:mix-blend-overlay ${
            index === currentSlide ? 'opacity-[0.03] dark:opacity-[0.05]' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
           {/* Drift animation applied to the wrapper inside to avoid layout shift */}
           <div className="absolute inset-0 animate-drift bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
      ))}

      {/* Layer 2: Linear Grid (Graph Paper effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

      {/* Layer 3: Precision Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>

      {/* Layer 4: Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Layer 5: Vignette for focus - Light mode needs white vignette */}
      <div className="absolute inset-0 bg-radial-vignette-light dark:bg-radial-vignette"></div>
    </div>
  );
};

export default BackgroundLayers;