import React from 'react';
import { TEXT } from '../constants';
import { Layers, Activity, Layout } from 'lucide-react';

interface ResultsSectionProps {
  headline?: string;
  subheadline?: string;
  badgeText?: string;
  images?: string[];
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ 
  headline, 
  subheadline, 
  badgeText, 
  images 
}) => {
  // Use props if provided, otherwise fallback to TEXT constants (Default for Home/MetaAds)
  const displayImages = images || TEXT.results_portfolio.items;
  const displayHeadline = headline || TEXT.results_portfolio.headline;
  const displaySubheadline = subheadline || TEXT.results_portfolio.subheadline;
  const displayBadge = badgeText || "Ad Creatives Gallery";

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
             <Layers size={14} /> {displayBadge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {displayHeadline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {displaySubheadline}
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8">
         {/* Gradient Masks for smooth fade */}
         <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>

         {/* Row 1: Right to Left */}
         <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-6 px-3">
               {displayImages.map((img, idx) => (
                  <div key={`r1-s1-${idx}`} className="relative group w-[300px] md:w-[370px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                     <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt="Portfolio Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <p className="text-white font-bold text-lg">High Performance</p>
                        <p className="text-indigo-300 text-xs uppercase tracking-wide">Proven Result</p>
                     </div>
                  </div>
               ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex gap-6 px-3">
               {displayImages.map((img, idx) => (
                  <div key={`r1-s2-${idx}`} className="relative group w-[300px] md:w-[370px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                     <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt="Portfolio Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <p className="text-white font-bold text-lg">High Performance</p>
                        <p className="text-indigo-300 text-xs uppercase tracking-wide">Proven Result</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Row 2: Left to Right */}
         <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-6 px-3">
               {displayImages.map((img, idx) => (
                  <div key={`r2-s1-${idx}`} className="relative group w-[300px] md:w-[370px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                     <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt="Portfolio Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <p className="text-white font-bold text-lg">High Performance</p>
                        <p className="text-indigo-300 text-xs uppercase tracking-wide">Proven Result</p>
                     </div>
                  </div>
               ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex gap-6 px-3">
               {displayImages.map((img, idx) => (
                  <div key={`r2-s2-${idx}`} className="relative group w-[300px] md:w-[370px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                     <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt="Portfolio Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                        <p className="text-white font-bold text-lg">High Performance</p>
                        <p className="text-indigo-300 text-xs uppercase tracking-wide">Proven Result</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </section>
  );
};

export default ResultsSection;