import React from 'react';
import { Check, Clock, Gift, ArrowRight, Zap, Sparkles, Star } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';

// Extended type interface to handle optional original_price
interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  original_price?: string;
  price_label: string;
  highlights?: string[];
  features: string[];
  cta: string;
  popular: boolean;
}

const PricingSection: React.FC = () => {
  const handlePlanClick = (planName: string) => {
    const message = `Hello, I want to discuss/buy the '${planName}' plan shown on your website pricing section.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleOfferClick = () => {
      const message = `Hello, I want to discuss '${TEXT.pricing.offer.title}' (Custom Solution).`;
      window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  }

  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-6 animate-pulse">
            <Clock size={14} /> Limited Time Offer
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {TEXT.pricing.headline}
          </h2>

          <div className="max-w-4xl mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
             <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
               {TEXT.pricing.subheadline}
             </p>
          </div>
        </div>

        {/* --- NEW DESIGN: PRICING CARDS (Cyber Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          {TEXT.pricing.plans.map((plan: PricingPlan, idx) => {
            const isAutomation = plan.name.includes("বিজনেস সেটআপ") || plan.name.includes("অটোমেশন");
            const isPopular = plan.popular || isAutomation;

            return (
              <div 
                key={idx} 
                className={`relative group flex flex-col h-full rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  isPopular 
                    ? 'bg-slate-900 border-2 border-purple-500 shadow-xl dark:shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4 z-10' 
                    : 'bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg dark:hover:bg-slate-900/80'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                   <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-shine"></div>
                )}
                
                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                   
                   {/* Header */}
                   <div className="mb-6">
                      {isPopular && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
                           <Star size={10} fill="currentColor" /> Recommended
                        </div>
                      )}
                      <h3 className={`text-xl font-bold mb-3 leading-tight ${isPopular ? 'text-white' : 'text-slate-900 dark:text-slate-200'}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs leading-relaxed font-mono min-h-[40px] ${isPopular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        {plan.tagline}
                      </p>
                   </div>

                   {/* Pricing Block */}
                   <div className={`mb-8 p-4 rounded-xl text-center border ${isPopular ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 dark:bg-slate-950/50 border-slate-100 dark:border-slate-800'}`}>
                       {plan.original_price && (
                         <div className="text-xs text-slate-500 line-through mb-1">{plan.original_price}</div>
                       )}
                       <div className={`text-2xl font-black ${isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' : 'text-slate-900 dark:text-white'}`}>
                         {plan.price}
                       </div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                         {plan.price_label}
                       </div>
                   </div>

                   {/* Features (Scrollable if needed, but designed to fit) */}
                   <div className="flex-grow mb-8">
                      <ul className="space-y-3">
                          {plan.features.slice(0, 6).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                              <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${isPopular ? 'bg-purple-500' : 'bg-slate-400 dark:bg-slate-600'}`}></div>
                              <span className={`text-sm transition-colors ${isPopular ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                                 {feature}
                              </span>
                          </li>
                          ))}
                      </ul>
                   </div>

                   {/* CTA */}
                   <div className="mt-auto">
                      <Button 
                        variant={isPopular ? 'primary' : 'outline'}
                        className={`w-full justify-center py-4 rounded-xl text-sm font-bold ${
                           isPopular 
                             ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-none shadow-lg shadow-purple-500/20' 
                             : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white dark:hover:text-black dark:hover:border-white'
                        }`}
                        onClick={() => handlePlanClick(plan.name)}
                      >
                        {plan.cta} <ArrowRight size={16} className="ml-2" />
                      </Button>
                   </div>
                </div>

                {/* Decorative Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20 transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution (Wide Card) */}
        <div className="mt-12 bg-gradient-to-r from-indigo-900 to-slate-900 border border-slate-800 rounded-2xl p-1 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <div className="relative bg-slate-900 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                 <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                   <Sparkles className="text-yellow-400" /> {TEXT.pricing.offer.title}
                 </h3>
                 <p className="text-slate-400 max-w-xl">{TEXT.pricing.offer.details}</p>
              </div>
              <Button 
                variant="white" 
                className="whitespace-nowrap px-8 py-4 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                onClick={handleOfferClick}
              >
                {TEXT.pricing.offer.cta}
              </Button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;