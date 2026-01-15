import React, { useState, useEffect } from 'react';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { TEXT } from '../constants';

interface ResultsSliderProps {
  headline: React.ReactNode;
  subheadline: React.ReactNode;
  badgeText?: string;
}

const ResultsSlider: React.FC<ResultsSliderProps> = ({ headline, subheadline, badgeText = "Proven Results" }) => {
  const images = TEXT.result_slider_images;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="mb-24 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-10 px-4">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-4 border border-green-200 dark:border-green-500/30 animate-pulse">
            <TrendingUp size={14} /> {badgeText}
         </div>
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {headline}
         </h2>
         <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {subheadline}
         </p>
      </div>

      <div className="relative max-w-[900px] h-[300px] md:h-[450px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group mx-4 md:mx-auto">
         {/* Slider Track */}
         <div 
           className="flex h-full transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
           {images.map((img, index) => (
             <img 
                key={index}
                src={img} 
                alt={`Result ${index + 1}`} 
                className="w-full h-full object-contain bg-black/5 dark:bg-black/20 object-center min-w-full"
             />
           ))}
         </div>
         
         {/* Navigation Buttons */}
         <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-20">
            <ChevronLeft size={24} />
         </button>
         <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors z-20">
            <ChevronRight size={24} />
         </button>

         {/* Dots */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {images.map((_, idx) => (
               <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-400/50 hover:bg-slate-400'}`}
               />
            ))}
         </div>
      </div>
    </div>
  );
};

export default ResultsSlider;