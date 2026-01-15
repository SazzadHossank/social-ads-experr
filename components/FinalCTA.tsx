import React from 'react';
import { Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';

const FinalCTA: React.FC = () => {
  const handlePrimaryAction = () => {
    const message = "Hello, I want to book a 'Free Consultation' (15 min) as mentioned in the Final CTA section.";
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative py-16 bg-slate-950 border-t border-slate-900 overflow-hidden">
      
      {/* Subtle Background Portal Effect - Toned Down */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
         <div className="w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Animated Badge - Smaller */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-float">
           <Rocket size={14} className="text-indigo-400" />
           Ready to Launch?
        </div>

        {/* Headline - Reduced Size & Weight for Minimalism */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
           {TEXT.final_cta.headline}
        </h2>
        
        {/* Subheadline - Cleaner Typography */}
        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
           {TEXT.final_cta.subheadline}
        </p>

        {/* Action Area - Compact */}
        <div className="flex flex-col items-center">
           <Button 
              variant="primary" 
              size="md" 
              className="px-8 py-3 rounded-full text-base font-bold shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 border-none hover:shadow-indigo-500/30 transition-all"
              onClick={handlePrimaryAction}
           >
              {TEXT.final_cta.primary_cta}
              <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
           
           <p className="mt-4 text-xs text-slate-500">
              No credit card required. Free 15-min strategy call.
           </p>
        </div>

        {/* Benefits Row - Minimalist List */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 md:gap-8">
           {TEXT.final_cta.bonuses.map((bonus, idx) => (
              <div key={idx} className="flex items-center gap-2">
                 <CheckCircle2 className="text-green-500/80 shrink-0" size={16} />
                 <span className="text-slate-400 text-xs md:text-sm font-medium">{bonus}</span>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;