import React, { useState, useEffect } from 'react';
import { 
  Megaphone, ShoppingCart, LayoutTemplate, ShieldCheck, Briefcase, 
  ArrowRight, CheckCircle2, BarChart3, Globe, Zap, MousePointerClick,
  Play, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEXT } from '../constants';
import { useAdmin } from '../contexts/AdminContext';

const iconMap: { [key: string]: React.ElementType } = {
  Megaphone,
  ShoppingCart,
  LayoutTemplate,
  ShieldCheck,
  Briefcase
};

// Animation elements for the right side stage
const floatingIcons = [
  { icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-100', top: '10%', left: '10%', delay: '0s' },
  { icon: Globe, color: 'text-green-500', bg: 'bg-green-100', top: '20%', right: '15%', delay: '2s' },
  { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-100', bottom: '15%', left: '15%', delay: '1s' },
  { icon: MousePointerClick, color: 'text-purple-500', bg: 'bg-purple-100', bottom: '25%', right: '10%', delay: '3s' },
];

const SolutionSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { videoUrls } = useAdmin();

  // Auto-rotate services on desktop if not interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % TEXT.solution.items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeItem = TEXT.solution.items[activeService];
  const ActiveIcon = iconMap[activeItem.icon];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s'}}></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-500/30">
             <Briefcase size={14} /> Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Grow Your Sales with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
               Our Marketing Services
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
             {TEXT.solution.formula}
          </p>
        </div>

        {/* 2. Interactive Split Layout (Desktop & Tablet) */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[600px]">
           
           {/* LEFT SIDE: Service List (Menu) */}
           <div className="col-span-5 flex flex-col justify-center space-y-3" 
                onMouseEnter={() => setIsAutoPlaying(false)} 
                onMouseLeave={() => setIsAutoPlaying(true)}>
              {TEXT.solution.items.map((item, idx) => {
                 const Icon = iconMap[item.icon];
                 const isActive = activeService === idx;
                 
                 return (
                    <div 
                       key={idx}
                       onClick={() => setActiveService(idx)}
                       className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                          isActive 
                          ? 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-600 dark:border-indigo-500 shadow-lg scale-[1.02]' 
                          : 'bg-white dark:bg-slate-900 border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                       }`}
                    >
                       <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600'}`}>
                             <Icon size={24} />
                          </div>
                          <div>
                             <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-700 dark:text-slate-300'}`}>
                                {item.title}
                             </h3>
                             {isActive && (
                                <p className="text-sm text-slate-600 dark:text-slate-400 animate-fade-in line-clamp-2">
                                   {item.desc}
                                </p>
                             )}
                          </div>
                          {isActive && (
                             <div className="absolute right-6 top-1/2 -translate-y-1/2 text-indigo-600 dark:text-indigo-400 animate-pulse">
                                <ArrowRight size={20} />
                             </div>
                          )}
                       </div>
                    </div>
                 );
              })}
           </div>

           {/* RIGHT SIDE: Dynamic 2D Animation Stage */}
           <div className="col-span-7 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl transition-all duration-500">
                 
                 {/* Decorative Grid inside stage */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                 {/* Central Animated Content */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-10 transition-all duration-500 key={activeService}"> {/* Key forces re-render for animation */}
                    
                    {/* Floating Central Icon */}
                    <div className="relative mb-8 animate-float">
                       <div className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex items-center justify-center relative z-20 border-4 border-indigo-50 dark:border-slate-700">
                          <ActiveIcon size={48} className="text-indigo-600 dark:text-indigo-400" />
                       </div>
                       
                       {/* Background Pulse Rings */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full animate-ping opacity-75 z-10"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-500/5 rounded-full animate-pulse z-0"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 animate-fade-in-up">
                       {activeItem.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                       {activeItem.desc}
                    </p>

                    <Link to={`/service/${activeItem.slug}`}>
                       <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                          বিস্তারিত দেখুন <ArrowRight size={18} />
                       </button>
                    </Link>
                 </div>

                 {/* Floating Orbiting Elements (2D Animation) */}
                 {floatingIcons.map((fItem, idx) => {
                    const FIcon = fItem.icon;
                    return (
                       <div 
                          key={idx}
                          className={`absolute p-3 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm animate-float ${fItem.bg}`}
                          style={{ 
                             top: fItem.top, 
                             left: fItem.left, 
                             right: fItem.right, 
                             bottom: fItem.bottom,
                             animationDelay: fItem.delay 
                          }}
                       >
                          <FIcon size={20} className={fItem.color} />
                       </div>
                    );
                 })}

              </div>
           </div>
        </div>

        {/* 3. Mobile View (Card Stack - Optimized for Touch) */}
        <div className="md:hidden flex flex-col gap-6">
           {TEXT.solution.items.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                 <Link to={`/service/${item.slug}`} key={idx} className="block group">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm active:scale-95 transition-transform duration-200 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full -mr-4 -mt-4"></div>
                       
                       <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400">
                             <Icon size={24} />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                {item.title}
                                <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                             </h3>
                             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                             </p>
                          </div>
                       </div>
                    </div>
                 </Link>
              );
           })}
        </div>

        {/* 4. Bottom Video Action */}
        <div className="mt-20 flex justify-center">
           <button 
              onClick={() => setIsVideoOpen(true)}
              className="group relative inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
           >
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                 <Play size={16} className="ml-1 text-slate-900 dark:text-white fill-current" />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Watch Intro</span>
                 <span className="text-sm font-bold">{TEXT.solution.video_cta}</span>
              </div>
              <div className="absolute -inset-2 bg-indigo-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
           </button>
        </div>

      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/95 backdrop-blur-xl animate-fade-in">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors z-50 border border-slate-700"
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black relative">
             <video 
               src={videoUrls.solution} 
               className="w-full h-full object-contain"
               controls 
               autoPlay
             />
          </div>
        </div>
      )}

    </section>
  );
};

export default SolutionSection;