import React from 'react';
import { ArrowRight, Play, Star, Rocket, Target, Zap, ShieldCheck } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import VideoContainer from './VideoContainer';
import { useAdmin } from '../contexts/AdminContext';
import { useTracking } from '../contexts/TrackingContext';

const Hero: React.FC = () => {
  const { selectedHero } = useAdmin();
  const { trackButtonClick } = useTracking();

  const handlePrimaryAction = () => {
    trackButtonClick('Hero_Primary_CTA');
    const message = "Hello, I am interested in the 'Free Business Analysis' offered on your hero section.";
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSecondaryAction = () => {
    trackButtonClick('Hero_Secondary_CTA');
    const element = document.getElementById('testimonials');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- VARIANT 1: ORIGINAL CYBER/DARK ---
  if (selectedHero === 1) {
    return (
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-20">
        <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 border border-indigo-500/20 dark:border-indigo-500/30 backdrop-blur-md mx-auto lg:mx-0 animate-fade-in-up shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
              {TEXT.hero.pill}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight text-slate-900 dark:text-white">
            <span className="block mb-1 text-slate-800 dark:text-slate-100">
              {TEXT.hero.headline_start}
            </span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient-x pb-1 inline-block">
                {TEXT.hero.headline_gradient}
              </span>
              {" "}{TEXT.hero.headline_end}
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {TEXT.hero.subheadline}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 w-full max-w-2xl mx-auto lg:mx-0 border-y border-slate-200 dark:border-white/5 py-6 bg-white/40 dark:bg-slate-900/20 rounded-xl backdrop-blur-sm">
            {TEXT.hero.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start px-4 border-b sm:border-b-0 sm:border-r border-slate-200/50 dark:border-slate-700/50 last:border-0 pb-4 sm:pb-0 last:pb-0">
                <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500"></span>
                  {feature.title}
                </h3>
                <p className="text-slate-800 dark:text-slate-200 font-bold text-base leading-tight">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group" onClick={handlePrimaryAction}>
              {TEXT.hero.cta_primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={handleSecondaryAction}>
               <Play className="w-5 h-5 mr-2 fill-current" />
               {TEXT.hero.cta_secondary}
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg lg:max-w-2xl relative">
           <VideoContainer />
        </div>
      </section>
    );
  }

  // --- VARIANT 2: CLEAN CORPORATE (White/Light) ---
  if (selectedHero === 2) {
    return (
        <section className="relative pt-32 pb-20 px-4 bg-white dark:bg-slate-950">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20"></div>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <div className="mb-6">
                    <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-sm tracking-wide">
                        🚀 #1 Marketing Agency in BD
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight max-w-4xl">
                    {TEXT.hero.headline_start} <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy decoration-blue-300">{TEXT.hero.headline_gradient}</span> {TEXT.hero.headline_end}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
                    {TEXT.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 shadow-xl shadow-blue-500/20" onClick={handlePrimaryAction}>
                        {TEXT.hero.cta_primary}
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-10 border-blue-200 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30" onClick={handleSecondaryAction}>
                        {TEXT.hero.cta_secondary}
                    </Button>
                </div>
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                    <VideoContainer />
                </div>
            </div>
        </section>
    );
  }

  // --- VARIANT 3: URGENCY / SALES FOCUSED (Red/Yellow) ---
  if (selectedHero === 3) {
    return (
        <section className="relative pt-32 pb-24 px-4 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/20 rounded-full blur-[150px]"></div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="flex items-center gap-2 text-yellow-400 font-black uppercase tracking-widest mb-4 animate-pulse">
                        <Zap size={20} fill="currentColor" /> Limited Time Strategy
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                        STOP LOSING <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">MONEY NOW!</span>
                    </h1>
                    <p className="text-slate-300 text-lg mb-8 border-l-4 border-red-500 pl-4">
                        {TEXT.hero.subheadline}
                    </p>
                    <div className="flex flex-col gap-4">
                        <Button variant="primary" size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 border-none text-xl font-black py-6 shadow-[0_0_30px_rgba(220,38,38,0.4)]" onClick={handlePrimaryAction}>
                            GET FREE ANALYSIS NOW
                        </Button>
                        <p className="text-slate-500 text-sm flex items-center gap-2">
                            <ShieldCheck size={14} /> 100% Data Driven & Secure
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 opacity-30 blur-2xl rounded-2xl animate-pulse-slow"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30 bg-black">
                        <VideoContainer />
                    </div>
                </div>
            </div>
        </section>
    );
  }

  // --- VARIANT 4: SPLIT SCREEN MODERN ---
  if (selectedHero === 4) {
      return (
        <section className="pt-24 pb-12 bg-slate-50 dark:bg-slate-900 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                            <VideoContainer />
                        </div>
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                            Scale Your Business with <span className="bg-indigo-600 text-white px-2">Data</span> not Luck.
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            {TEXT.hero.subheadline}
                        </p>
                        <ul className="space-y-3">
                            {TEXT.hero.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600">
                                        <Target size={16} />
                                    </div>
                                    {f.desc}
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" className="w-full mt-4" onClick={handlePrimaryAction}>
                            {TEXT.hero.cta_primary}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      );
  }

  // --- VARIANT 5: TYPOGRAPHY CENTERED ---
  if (selectedHero === 5) {
      return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black"></div>
            <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                    DOMINATE <br/> YOUR MARKET
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light">
                    ফেসবুক অ্যালগরিদম বদলেছে। আপনার মার্কেটিং স্ট্র্যাটেজিও বদলান। আমরা দিচ্ছি কমপ্লিট সল্যুশন।
                </p>
                
                <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                    <VideoContainer />
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="primary" size="lg" className="bg-white text-black hover:bg-slate-200 border-none font-black text-lg px-12 h-16 rounded-full" onClick={handlePrimaryAction}>
                        START NOW
                    </Button>
                </div>
            </div>
        </section>
      );
  }

  // Fallback to Variant 1
  return null; 
};

export default Hero;