import React from 'react';
import { Lock, ArrowRight, ShieldAlert, Eye, AlertTriangle, FileWarning, Fingerprint } from 'lucide-react';
import Button from './Button';

const SecretStrategiesCTA: React.FC = () => {
  const handleStrategyClick = () => {
    window.open('https://new.socialadsexpert.com/#/f/xkrt5icb4', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden border-y-4 border-red-600/20">
      
      {/* Background Ambience (Danger/Warning Vibe) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
         
         {/* The Card Container */}
         <div 
            className="group relative bg-slate-900/80 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-red-500/60 transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(220,38,38,0.15)] hover:shadow-[0_0_70px_rgba(220,38,38,0.3)]"
            onClick={handleStrategyClick}
         >
            
            {/* Warning Tape Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>

            {/* Top Badge */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-red-600/10 border border-red-500 text-red-500 font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] animate-pulse">
                    <Lock size={14} className="mb-0.5" /> Access Restricted to Serious Owners
                </div>
            </div>

            <div className="text-center relative z-10">
               
               {/* Main Headline */}
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  কেন কিছু ই-কমার্স মাসে <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x drop-shadow-sm">
                     কোটি টাকা সেল করে?
                  </span>
               </h2>

               {/* Description Box */}
               <div className="max-w-2xl mx-auto bg-black/40 border border-red-500/20 rounded-xl p-6 mb-8 relative">
                  <div className="absolute -top-3 -left-3 text-orange-500 rotate-[-12deg]">
                     <FileWarning size={32} />
                  </div>
                  <p className="text-lg text-slate-300 font-medium leading-relaxed">
                     <span className="text-red-400 font-bold">সতর্কতা:</span> এটি কোনো সাধারণ ব্লগ পোস্ট নয়। এটি ৫টি <span className="text-white border-b-2 border-orange-500 border-dashed">গোপন স্ট্র্যাটেজির</span> একটি ইন্টারনাল রিপোর্ট যা ৯৫% ব্যবসায়ী জানে না।
                  </p>
               </div>

               {/* CTA Button Area */}
               <div className="flex flex-col items-center gap-4">
                  <Button 
                     variant="primary" 
                     size="lg" 
                     className="w-full sm:w-auto h-16 px-10 text-xl font-black rounded-full bg-gradient-to-r from-red-600 to-orange-600 border-none shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] hover:scale-105 transition-all duration-300 group-hover:animate-bounce-short"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleStrategyClick();
                     }}
                  >
                     <Eye size={24} className="mr-2" /> সিক্রেট স্ট্র্যাটেজি দেখুন
                  </Button>
                  
                  <div className="flex items-center gap-6 text-xs md:text-sm font-mono text-slate-500 mt-2">
                     <span className="flex items-center gap-1 text-orange-400">
                        <ShieldAlert size={14} /> 100% Free & Private
                     </span>
                     <span className="flex items-center gap-1">
                        <Fingerprint size={14} /> ID: #SEC-8942
                     </span>
                  </div>
               </div>

            </div>

            {/* Background Pattern on Card */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
               <AlertTriangle size={300} className="text-red-500" />
            </div>
         </div>

      </div>
    </section>
  );
};

export default SecretStrategiesCTA;