import React from 'react';
import { TrendingDown, AlertTriangle, Tag, Maximize, ArrowDown, Globe, Timer, MessageCircle, PackageX, Compass, ShieldAlert, Megaphone, Layout, Undo2 } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';

const iconMap: { [key: string]: React.ElementType } = {
  TrendingDown,
  AlertTriangle,
  Tag,
  Maximize,
  Globe,
  Timer,
  MessageCircle,
  PackageX,
  Compass,
  ShieldAlert,
  Megaphone,
  Layout,
  Undo2
};

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 dark:bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {TEXT.problem.headline}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 font-medium">
            প্রতিটি সমস্যার সমাধান আছে। এবং সেটা আপনার হাতের মুঠোয়।
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEXT.problem.cards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <div key={idx} className="group relative bg-slate-50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 text-red-600 dark:text-red-500 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:bg-red-500/10 transition-colors shadow-sm dark:shadow-none">
                  {Icon && <Icon size={28} />}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col items-center animate-bounce opacity-70">
                <span className="text-sm text-slate-500 mb-2">{TEXT.problem.cta}</span>
                <ArrowDown className="text-slate-400" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;