import React, { useState, useEffect } from 'react';
import { X, ExternalLink, TrendingUp } from 'lucide-react';
import Button from './Button';

const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open popup after 35 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  const handleClaimReport = () => {
    window.open('https://new.socialadsexpert.com/#/f/xkrt5icb4', '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform transition-all scale-100">
        
        {/* Close Button */}
        <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors z-20"
        >
            <X size={18} />
        </button>

        {/* Decorative Top Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>

        <div className="p-6 text-center relative">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            {/* Headline - Updated: Smaller Size */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3 leading-snug">
                🔥 কেন কিছু ই-কমার্স মাসে <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">কোটি টাকা সেল করে?</span>
            </h2>

            {/* Secret Box */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 py-1.5 px-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20 mb-5 inline-block shadow-sm transform -rotate-1">
                <p className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400">
                    "৫টি সিক্রেট যা ৯৫% ব্যবসায়ী জানে না!"
                </p>
            </div>

            {/* Proof Section */}
            <div className="mb-5 text-left bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-green-500 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                    <TrendingUp size={40} />
                </div>
                <p className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-xs">
                    📊 প্রুফ (বাস্তব প্রমাণ):
                </p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-green-500"></span> ১,২০০+ ব্যবসায়ী ব্যবহার করছে
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-green-500"></span> এভারেজে ৩৫ লাখ+ টাকা সেল
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-green-500"></span> প্রথম মাসেই ৩৫০%+ বৃদ্ধি
                    </li>
                </ul>
            </div>

            {/* Warning */}
            <p className="text-red-500 text-[10px] font-black mb-4 animate-pulse flex items-center justify-center gap-1.5 uppercase tracking-wide bg-red-50 dark:bg-red-900/10 py-1 rounded-lg">
                ⚠️ সতর্কতা: শুধু সিরিয়াস ব্যবসায়ীদের জন্য!
            </p>

            {/* CTA Button */}
            <Button 
                onClick={handleClaimReport}
                variant="primary" 
                size="sm" 
                className="w-full text-sm py-2.5 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform"
            >
                🎁 ফ্রি রিপোর্ট পান—এখনই! <ExternalLink size={16} className="ml-2" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;