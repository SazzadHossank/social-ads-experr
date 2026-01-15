import React from 'react';
import { BarChart3, Layers, Cpu, TrendingUp, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TEXT } from '../constants';

const iconMap: { [key: string]: React.ElementType } = {
  BarChart3,
  Layers,
  Cpu,
  TrendingUp,
  Headphones,
  ShieldCheck
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200 dark:border-indigo-500/30">
             <CheckCircle2 size={14} /> Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {TEXT.why_choose_us.headline}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {TEXT.why_choose_us.subheadline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEXT.why_choose_us.items.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={idx} className="group bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                   {/* Icon Box */}
                   <div className="w-14 h-14 bg-indigo-50 dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100 dark:border-slate-800">
                      {Icon && <Icon size={28} strokeWidth={1.5} />}
                   </div>

                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                   </h3>
                   
                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                   </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Badge/Trust Indicator */}
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-slate-500 dark:text-slate-400 text-sm font-medium bg-white dark:bg-slate-900/50 py-3 px-6 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> 500+ Projects Completed</span>
                <span className="hidden sm:inline w-px h-4 bg-slate-300 dark:bg-slate-700"></span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> 98% Client Satisfaction</span>
                <span className="hidden sm:inline w-px h-4 bg-slate-300 dark:bg-slate-700"></span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-indigo-500 rounded-full"></span> 24/7 Priority Support</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;