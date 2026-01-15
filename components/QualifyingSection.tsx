import React from 'react';
import { Check, X, ShieldAlert, Lock, ArrowRight, Ban, AlertTriangle, Crown, Star, Play, Diamond, UserX, UserCheck } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import { useAdmin } from '../contexts/AdminContext';

const QualifyingSection: React.FC = () => {
  const { videoUrls } = useAdmin();
  
  // Hardcoded negative traits
  const negativeTraits = [
    "যাদের ব্যবসায় কোনো মার্কেটিং বাজেট নেই",
    "যারা ১ সপ্তাহেই জাদুর মতো রেজাল্ট চান",
    "যাদের ব্যবসায় ধৈর্যের অভাব",
    "যারা এক্সপার্ট গাইডলাইন মানতে নারাজ",
    "যারা ব্যবসাকে জুয়া মনে করেন"
  ];

  const handleQualifiedClick = () => {
    const message = "Hello, I have read the qualification criteria and I am serious about my business growth. I want to apply as an Elite Partner.";
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* =========================================================
          SECTION 1: THE WARNING & PHILOSOPHY (Dark Premium Theme)
         ========================================================= */}
      <section className="py-20 md:py-28 bg-slate-900 dark:bg-black relative overflow-hidden border-t border-slate-800">
         
         {/* Background Effects */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* Left Content */}
               <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-black uppercase tracking-widest animate-pulse">
                        <Crown size={14} className="fill-current" /> Exclusive Service
                     </div>
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-black uppercase tracking-widest">
                        <AlertTriangle size={14} /> Warning
                     </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                     আমরা সবার সাথে <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 decoration-red-500 underline decoration-wavy decoration-2 underline-offset-8">
                        কাজ করি না!
                     </span>
                  </h2>

                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8 border-l-4 border-indigo-600 pl-6">
                     আমাদের সার্ভিস কোনো "কুইক স্কিম" নয়। এটি একটি প্রিমিয়াম পার্টনারশিপ। আমরা কোয়ান্টিটিতে নয়, কোয়ালিটিতে বিশ্বাসী। আমাদের সার্ভিস শুধুমাত্র তাদের জন্য যারা ব্যবসার ব্যাপারে ১০০% সিরিয়াস।
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                     <div className="flex items-center gap-3 text-slate-300 font-bold">
                        <div className="p-2 bg-indigo-600 rounded-lg">
                           <Diamond size={20} className="text-white fill-white/20" />
                        </div>
                        High Ticket Service
                     </div>
                     <div className="flex items-center gap-3 text-slate-300 font-bold">
                        <div className="p-2 bg-red-600 rounded-lg">
                           <Lock size={20} className="text-white" />
                        </div>
                        Serious Inquiries Only
                     </div>
                  </div>
               </div>

               {/* Right Video */}
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                     <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded shadow-lg flex items-center gap-2">
                        <Play size={10} fill="currentColor" /> Must Watch
                     </div>
                     <video 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        src={videoUrls.qualifying}
                        controls
                        poster="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png"
                        playsInline
                     />
                  </div>
                  <p className="text-center text-slate-500 text-xs font-mono mt-3 uppercase tracking-widest">
                     Message from Founder
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* =========================================================
          SECTION 2: THE CRITERIA (Selection Process)
         ========================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  আপনি কি আমাদের <span className="text-indigo-600 dark:text-indigo-400">Elite Partner</span> হওয়ার যোগ্য?
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg">
                  নিচের দুটি বক্স দেখুন এবং নিজেই সিদ্ধান্ত নিন আপনি কোন দলে পড়ছেন
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
               
               {/* Card 1: Disqualified (Red) */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border-2 border-red-100 dark:border-red-900/30 hover:border-red-500/50 transition-colors shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <UserX size={150} className="text-red-500" />
                  </div>
                  
                  <div className="relative z-10">
                     <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-8 text-red-600 dark:text-red-500">
                        <Ban size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        আপনার আবেদন <span className="text-red-600 dark:text-red-500">বাতিল</span> হবে যদি...
                     </h3>
                     <ul className="space-y-4">
                        {negativeTraits.map((item, idx) => (
                           <li key={idx} className="flex items-start gap-4">
                              <X className="text-red-500 mt-1 shrink-0" size={18} />
                              <span className="text-slate-600 dark:text-slate-300 font-medium">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Card 2: Qualified (Green/Gold) */}
               <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 md:p-12 border-2 border-amber-500 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                  <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">
                     Top 5% Clients
                  </div>
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <UserCheck size={150} className="text-amber-500" />
                  </div>

                  <div className="relative z-10">
                     <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-8 text-amber-500">
                        <Star size={32} fill="currentColor" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-6">
                        আমরা যাদের খুঁজি <span className="text-amber-500">(Elite Partner)</span>
                     </h3>
                     <ul className="space-y-4 mb-10">
                        {TEXT.qualifying.we_work_with.map((item, idx) => (
                           <li key={idx} className="flex items-start gap-4">
                              <Check className="text-amber-500 mt-1 shrink-0" size={18} strokeWidth={3} />
                              <span className="text-slate-300 font-medium">{item}</span>
                           </li>
                        ))}
                     </ul>

                     <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 border-none text-white font-black hover:scale-105 shadow-amber-500/20"
                        onClick={handleQualifiedClick}
                     >
                        আমি যোগ্য ও সিরিয়াস <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                  </div>
               </div>

            </div>

         </div>
      </section>
    </>
  );
};

export default QualifyingSection;