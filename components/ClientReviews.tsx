import React from 'react';
import { TEXT } from '../constants';
import { MessageSquareQuote, Star } from 'lucide-react';

interface ClientReviewsProps {
  headline?: string;
  subheadline?: string;
}

const ClientReviews: React.FC<ClientReviewsProps> = ({ headline, subheadline }) => {
  const images = TEXT.client_reviews.items;
  
  // Use props if provided, otherwise fallback to constants (Home page default)
  const displayHeadline = headline || TEXT.client_reviews.headline;
  const displaySubheadline = subheadline || TEXT.client_reviews.subheadline;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-emerald-900/30 text-green-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-green-200 dark:border-emerald-500/30 shadow-sm animate-pulse">
             <MessageSquareQuote size={14} className="fill-current" />
             Client Feedback
          </div>

          {/* Highlighted Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 drop-shadow-sm">
              {displayHeadline}
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
             <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
               {displaySubheadline}
             </p>
             <div className="flex justify-center gap-1 mt-4 text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
             </div>
          </div>
        </div>

      </div>

      {/* Marquee Scrolling Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8">
         
         {/* Gradient Masks for smooth fade effect on edges */}
         <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>

         {/* ROW 1: Right to Left (Standard) */}
         <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center">
            <div className="flex gap-6 px-3">
               {images.map((img, idx) => (
                  <div 
                    key={`cr1-${idx}`} 
                    className="w-[300px] h-[120px] md:w-[755px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 cursor-pointer relative group"
                  >
                     <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt={`Client Review ${idx + 1}`} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
               ))}
            </div>
            {/* Duplicate for Loop */}
            <div className="flex gap-6 px-3">
               {images.map((img, idx) => (
                  <div 
                    key={`cr1-dup-${idx}`} 
                    className="w-[300px] h-[120px] md:w-[755px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 cursor-pointer relative group"
                  >
                     <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt={`Client Review ${idx + 1}`} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* ROW 2: Left to Right (Reverse) */}
         <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] items-center">
            <div className="flex gap-6 px-3">
               {images.map((img, idx) => (
                  <div 
                    key={`cr2-${idx}`} 
                    className="w-[300px] h-[120px] md:w-[755px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 cursor-pointer relative group"
                  >
                     <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt={`Client Review ${idx + 1}`} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
               ))}
            </div>
            {/* Duplicate for Loop */}
            <div className="flex gap-6 px-3">
               {images.map((img, idx) => (
                  <div 
                    key={`cr2-dup-${idx}`} 
                    className="w-[300px] h-[120px] md:w-[755px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 cursor-pointer relative group"
                  >
                     <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none"></div>
                     <img 
                        src={img} 
                        alt={`Client Review ${idx + 1}`} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
               ))}
            </div>
         </div>

      </div>

    </section>
  );
};

export default ClientReviews;