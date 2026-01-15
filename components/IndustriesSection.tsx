import React from 'react';
import { TEXT } from '../constants';
import { 
  Smartphone, Shirt, Carrot, Sparkles, Gem, Armchair, Store, 
  Utensils, Activity, ChefHat, UserCircle, Stethoscope, Tv, Gift, Baby, 
  Briefcase 
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Smartphone, Shirt, Carrot, Sparkles, Gem, Armchair, Store,
  Utensils, Activity, ChefHat, UserCircle, Stethoscope, Tv, Gift, Baby,
  Briefcase
};

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Colorful Background Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
             <span className="text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
               {TEXT.industries.headline}
            </span>
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm dark:shadow-none">
             <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
               {TEXT.industries.subheadline}
             </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
           {TEXT.industries.categories.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || Briefcase;
              
              // Dynamic colors for each card
              const colors = [
                 "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10 dark:border-blue-500/30 dark:hover:border-blue-400 dark:hover:shadow-blue-500/20",
                 "border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/10 dark:border-purple-500/30 dark:hover:border-purple-400 dark:hover:shadow-purple-500/20",
                 "border-pink-500/20 hover:border-pink-500/50 hover:shadow-pink-500/10 dark:border-pink-500/30 dark:hover:border-pink-400 dark:hover:shadow-pink-500/20",
                 "border-teal-500/20 hover:border-teal-500/50 hover:shadow-teal-500/10 dark:border-teal-500/30 dark:hover:border-teal-400 dark:hover:shadow-teal-500/20",
                 "border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/10 dark:border-orange-500/30 dark:hover:border-orange-400 dark:hover:shadow-orange-500/20"
              ];
              const colorClass = colors[idx % colors.length];

              return (
                 <div key={idx} className={`bg-white dark:bg-slate-900/60 backdrop-blur-md border ${colorClass} rounded-2xl p-6 text-center group transition-all duration-300 hover:-translate-y-2 cursor-default relative overflow-hidden shadow-sm dark:shadow-none`}>
                    
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-500 dark:text-slate-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-md dark:shadow-lg">
                       <Icon size={28} />
                    </div>
                    <h3 className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                       {cat.name}
                    </h3>
                 </div>
              )
           })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;