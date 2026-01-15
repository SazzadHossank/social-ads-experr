import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, TrendingUp, Megaphone, PieChart, CheckSquare, 
  TrendingDown, Play, ShieldCheck, FileText, Smile, Layers, ChevronRight, 
  Puzzle, Target, Percent, MessageSquare, Ban, Briefcase, Crown, CheckCircle, 
  Rocket, HeartHandshake, Lightbulb, Bell, Wallet, Calculator, BarChart3, 
  Star, Activity, ChevronLeft, Siren, Hand, OctagonAlert, X, Gift, DollarSign, 
  FileSearch, Lock, Handshake, BrainCircuit, Zap, Search, Layout,
  ShoppingBag, Store, GraduationCap, Building2, MousePointerClick, UserPlus,
  PenTool, Repeat, Code, Settings, Maximize, Plus, Minus, HelpCircle, Headphones
} from 'lucide-react';
import Button from './Button';
import ClientReviews from './ClientReviews';
import ResultsSlider from './ResultsSlider';
import { useAdmin } from '../contexts/AdminContext';

const MetaAdsLayout: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { videoUrls } = useAdmin();

  // Portfolio Images for Marquee
  const portfolioImages = [
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233055.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233132.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233205.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233220.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233551.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233603.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233825.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-13%20233842.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014014.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014032.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014046.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014140.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014202.png",
    "https://new.socialadsexpert.com/image/Screenshot%202026-01-14%20014218.png"
  ];

  // Specific FAQ for Meta Ads
  const metaAdsFaqs = [
    {
      q: "মিনিমাম বাজেট কত?",
      a: "আমরা সাধারণত নতুন ক্যাম্পেইনের জন্য দৈনিক অন্তত $১০-$২০ ডলার বাজেটের পরামর্শ দিই। তবে আপনার ব্যবসার ধরণ ও লক্ষ্যের ওপর ভিত্তি করে এটি কম-বেশি হতে পারে। সঠিক বাজেটিং দ্রুত রেজাল্ট আনতে সাহায্য করে।"
    },
    {
      q: "রেজাল্ট কত দিনে আসে?",
      a: "ফেসবুক অ্যাডের লার্নিং ফেজ এবং অপ্টিমাইজেশনের জন্য সাধারণত ৩-৭ দিন সময় লাগে। তবে প্রথম ৩ দিনের মধ্যেই আমরা বুঝতে পারি ক্যাম্পেইন কোন দিকে যাচ্ছে এবং সেই অনুযায়ী ব্যবস্থা নিই।"
    },
    {
      q: "ক্রিয়েটিভ কে বানাবে?",
      a: "আমরা আপনাকে ক্রিয়েটিভ গাইডলাইন, স্ক্রিপ্ট এবং হুক লাইন তৈরি করে দিব। বেসিক ইমেজ/ভিডিও এডিটিং আমরা করে দিই। তবে হাই-কোয়ালিটি ভিডিও শ্যুট বা র-ফুটেজ আপনাকে প্রোভাইড করতে হবে।"
    },
    {
      q: "পেজ/বিজনেস ম্যানেজার অ্যাক্সেস কীভাবে দেব?",
      a: "আপনার ফেসবুক বা অ্যাড অ্যাকাউন্টের পাসওয়ার্ড আমাদের লাগবে না। আমরা পার্টনার রিকোয়েস্টের মাধ্যমে অথবা জুম মিটিংয়ে স্ক্রিন শেয়ার করে নিরাপদভাবে অ্যাক্সেস সেটআপ করে নিব।"
    },
    {
      q: "পেমেন্ট/চুক্তি কীভাবে?",
      a: "কাজ শুরুর আগে ৫০% পেমেন্ট অগ্রিম করতে হয় এবং বাকি ৫০% কাজ শেষে বা মাস শেষে। আমরা সাধারণত মাসিক রিটেইনার মডেলে কাজ করি, তবে লং-টার্ম চুক্তিতে বিশেষ ডিসকাউন্ট সুবিধা রয়েছে।"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOrderClick = (planName: string) => {
    const message = `Hello, I want to select the '${planName}' plan for Facebook Marketing.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-indigo-500/30">
         
         {/* Global Background Elements */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Back Navigation */}
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 md:mb-10 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-sm">
                   <ArrowLeft size={14} />
                </div>
                <span className="font-medium text-sm">Back to Home</span>
            </Link>

            {/* 1. HERO SECTION */}
            <div className="text-center max-w-5xl mx-auto mb-16 border-b border-slate-200 dark:border-slate-800/50 pb-12 relative">
               
               {/* 2D FLOATING MARKETING ELEMENTS (ANIMATED) */}
               <div className="hidden md:block absolute top-10 left-0 animate-float" style={{ animationDuration: '6s' }}>
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center transform -rotate-12">
                     <Megaphone className="text-red-500 w-8 h-8" />
                  </div>
               </div>
               <div className="hidden md:block absolute top-20 right-10 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                  <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center transform rotate-12">
                     <PieChart className="text-indigo-500 w-7 h-7" />
                  </div>
               </div>

               {/* Alert Pill */}
               <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 animate-fade-in-up">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" />
                  বাংলাদেশের ৯০% উদ্যোক্তার একই সমস্যা
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight tracking-tight">
                  ফেসবুক আপডেটের পর সেলস ডাউন? <br className="hidden md:block"/>
                  ডলার খরচ করছেন কিন্তু <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 relative whitespace-nowrap">
                     অর্ডার পাচ্ছেন না?
                     <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                     </svg>
                  </span>
               </h1>
               
               <p className="text-base md:text-lg lg:text-xl font-medium text-slate-700 dark:text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                  বর্তমানে শুধু ভালো প্রোডাক্ট থাকলেই সেল হবে না। রেজাল্ট আনতে হলে দরকার ফেসবুকের নতুন আপডেট ফর্মুলা অনুযায়ী <span className="text-indigo-600 dark:text-indigo-400 font-bold decoration-wavy underline decoration-indigo-500/30">‘ফুল প্রফেশনাল বিজনেস সেটআপ’</span>।
               </p>

               {/* Problem & Solution Grid (Hook) */}
               <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-5 md:p-8 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto mb-10 text-left shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-bl-full"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                     <div className="flex gap-4 items-start">
                        <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-2.5 md:p-3 rounded-xl h-fit text-red-600 dark:text-red-400 shrink-0">
                           <TrendingDown size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1.5">কেন লস হচ্ছে?</h4>
                           <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              লাস্ট ফেসবুক আপডেটের পর ট্র্যাকিং, ক্যাম্পেইন স্ট্রাকচার এবং অপ্টিমাইজেশন ঠিক না থাকায় বাজেট বার্ন হচ্ছে কিন্তু সেলস আসছে না।
                           </p>
                        </div>
                     </div>
                     
                     <div className="flex gap-4 items-start">
                        <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2.5 md:p-3 rounded-xl h-fit text-green-600 dark:text-green-400 shrink-0">
                           <CheckSquare size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1.5">আমরা কী করব?</h4>
                           <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              কনটেন্ট আইডিয়া, ক্রিয়েটিভ প্রোডাকশন থেকে ক্যাম্পেইন এক্সিকিউশন—সব দায়িত্ব আমাদের। আপনি শুধু অর্ডার কনফার্ম করে ডেলিভারি করবেন।
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* HERO ACTION AREA */}
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
                  {/* Scroll to Strategy */}
                  <Button variant="primary" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg rounded-full" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                     প্যাকেজ দেখুন <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
               </div>
            </div>

            {/* NEW SECTION: VIDEO EXPLANATION */}
            <div className="mb-24 relative z-20 -mt-8">
               <div className="max-w-4xl mx-auto px-4">
                  <div 
                     className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 cursor-pointer aspect-video transform hover:-translate-y-2 transition-all duration-300"
                     onClick={() => setIsVideoOpen(true)}
                  >
                     {/* Glow Effect Behind */}
                     <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl -z-10"></div>
                     
                     {/* Thumbnail Image */}
                     <img 
                        src="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                     />
                     
                     {/* Overlay & Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                        <div className="relative">
                           <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                           <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Play size={32} className="ml-1 text-white fill-white" />
                           </div>
                        </div>
                     </div>

                     {/* Badges */}
                     <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-pulse">
                        LIVE CASE STUDY
                     </div>
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                        <h3 className="text-white font-bold text-lg md:text-xl">দেখুন কিভাবে আমরা ফেসবুক অ্যাড থেকে সেলস জেনারেট করি</h3>
                        <p className="text-slate-300 text-sm mt-1">স্ট্র্যাটেজি, ফানেল এবং রেজাল্ট ব্রেকডাউন</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. STRATEGY SECTION (Moved UP for Authority) */}
            <div id="strategy" className="mb-24 relative">
               <div className="absolute top-20 left-10 animate-float hidden md:block" style={{ animationDuration: '6s' }}>
                  <div className="bg-purple-500/20 p-3 rounded-full text-purple-500">
                     <Puzzle size={32} />
                  </div>
               </div>
               
               <div className="text-center mb-12 md:mb-16">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-500/20">
                     <Layers size={14} />
                     Strategic Business Solutions
                   </div>
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                     আপনার ব্যবসার প্রফিট মার্জিন বাড়াতে <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                        আমাদের ৪-পিলারের বিশেষ স্ট্র্যাটেজি
                     </span>
                   </h2>
               </div>

               {/* UNIFIED MASTER STRATEGY BOARD */}
               <div className="bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
                    
                    {/* Left Column: Core Benefits */}
                    <div className="space-y-8">
                        <div>
                           <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                              <Target className="text-red-500" />
                              প্র্যাকটিক্যাল সল্যুশন
                           </h3>
                           <p className="text-slate-600 dark:text-slate-400">
                              আপনার ব্যবসার মূল সমস্যাগুলো যেভাবে সমাধান করছি:
                           </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "CPA কমানো",
                                    desc: "অপ্রয়োজনীয় খরচ কেটে দিয়ে প্রতি অর্ডারে প্রফিট বাড়াচ্ছি",
                                    icon: Percent,
                                    color: "text-blue-500",
                                    bg: "bg-blue-50 dark:bg-blue-900/20"
                                },
                                {
                                    title: "Sales কনভার্শন",
                                    desc: "সঠিক চ্যাট স্ক্রিপ্ট দিয়ে কনফার্ম অর্ডারে কনভার্ট করানোর প্রসেস",
                                    icon: MessageSquare,
                                    color: "text-green-500",
                                    bg: "bg-green-50 dark:bg-green-900/20"
                                },
                                {
                                    title: "Fake অর্ডার ফিল্টার",
                                    desc: "রিটার্ন কমিয়ে আপনার কুরিয়ার চার্জের লস বন্ধ করছি",
                                    icon: Ban,
                                    color: "text-red-500",
                                    bg: "bg-red-50 dark:bg-red-900/20"
                                },
                                {
                                    title: "Business Solution",
                                    desc: "মার্কেটিং থেকে টেকনিক্যাল—সব সমস্যার প্র্যাকটিক্যাল সমাধান",
                                    icon: Briefcase,
                                    color: "text-purple-500",
                                    bg: "bg-purple-50 dark:bg-purple-900/20"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/30 transition-colors h-full flex sm:block items-center gap-4">
                                    <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-lg flex items-center justify-center sm:mb-3 shrink-0`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                       <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 leading-tight">{item.title}</h4>
                                       <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Features List */}
                    <div className="bg-indigo-50 dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-indigo-100 dark:border-slate-700 relative flex flex-col justify-between">
                        <div className="relative z-10">
                           <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                              <Crown className="text-amber-500" size={24} fill="currentColor" />
                              All-in-One প্যাকেজে যা থাকছে:
                           </h3>
                           
                           <div className="space-y-3">
                              {[
                                 "Advanced Campaign Setup",
                                 "Creative & Copy Guideline",
                                 "Profit Maximization Strategy",
                                 "Retargeting Funnel Setup",
                                 "Budget Blueprint তৈরি",
                                 "Scaling Support (24/7)"
                              ].map((feature, idx) => (
                                 <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-transform hover:translate-x-1">
                                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
                                       <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{feature}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="relative z-10 mt-8 pt-6 border-t border-indigo-200 dark:border-slate-700">
                           <Button variant="primary" className="w-full justify-center" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                              প্যাকেজটি নিতে চাই <ArrowRight className="ml-2 w-4 h-4" />
                           </Button>
                        </div>
                    </div>

                  </div>
               </div>
            </div>

            {/* 3. PROOF (Results Slider) - Moved up before Pricing */}
            <ResultsSlider 
               headline={
                 <span>
                   আমাদের ফেসবুক অ্যাডের রেজাল্ট দেখলে <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">আপনি নিজেই চমকে যাবেন!</span>
                 </span>
               }
               subheadline="আমরা ফুল গাইডলাইন এবং অ্যাডভান্সড স্ট্র্যাটেজি দিয়ে ক্লায়েন্টদের জন্য সেল জেনারেট করি। আপনার বাজেট এবং বিজনেস করার সঠিক মানসিকতা থাকলে—আপনার জন্যও এমন রেজাল্ট আনা সম্ভব।"
            />

            {/* 4. BUDGET OPTIONS SECTION (Pricing) */}
            <div id="pricing" className="mb-24 relative z-10">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                      আপনার সুবিধা অনুযায়ী সার্ভিস মডেল বেছে নিন
                   </h2>
                   <p className="text-lg text-slate-600 dark:text-slate-400">
                      আমরা ফ্লেক্সিবল। আপনি যেভাবে কাজ করতে স্বাচ্ছন্দ্যবোধ করেন, সেভাবেই আমরা সাপোর্ট দেব।
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                   {/* Plan A: Priority Execution */}
                   <div className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-blue-500/30 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                         <ShieldCheck size={150} />
                      </div>
                      <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-8 relative z-10">
                         <div className="flex justify-between items-start">
                            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
                               SAFE START
                             </div>
                         </div>
                         <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Priority Execution Plan</h3>
                         <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">নতুনদের জন্য সেরা। রিস্ক একদম নেই।</p>
                      </div>
                      
                      <div className="mb-6 relative z-10">
                         <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                            ১৪৫ টাকা <span className="text-lg font-medium text-slate-500">/ ডলার</span>
                         </div>
                         <div className="inline-flex items-center gap-2 text-sm font-bold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                            <CheckCircle size={14} /> ফিক্সড রেট — এক্সট্রা চার্জ নেই
                         </div>
                      </div>
                      
                      <div className="mb-6 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 relative z-10">
                         <p className="text-slate-800 dark:text-slate-200 text-sm font-bold text-center mb-2">
                            "বাজেট কম? সমস্যা নেই। ছোট বাজেটে টেস্ট করে উইনিং প্রোডাক্ট খুঁজে বের করার জন্য এই প্ল্যানটি সেরা।"
                         </p>
                      </div>
                      
                      <ul className="space-y-4 mb-8 flex-grow relative z-10">
                         {[
                            "ফ্ল্যাক্সিবল বাজেট (Start with $10)",
                            "লস হওয়ার আগেই ক্যাম্পেইন স্টপ সুবিধা",
                            "আপনার পছন্দের কনটেন্ট ও অফার স্ট্র্যাটেজি",
                            "সম্পূর্ণ ট্রান্সপারেন্সি (অ্যাড অ্যাকাউন্ট অ্যাক্সেস)",
                            "প্রয়োজন অনুযায়ী কুইক কারেকশন",
                            "৩ দিন পরপর পারফরম্যান্স রিপোর্ট"
                         ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                               <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                               </div>
                               <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                            </li>
                         ))}
                      </ul>
                      <Button variant="outline" className="w-full justify-center border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 relative z-10" onClick={() => handleOrderClick("Priority Execution Plan")}>সিলেক্ট করুন (Safe Start)</Button>
                   </div>

                   {/* Plan B: Premium Growth Plan */}
                   <div className="relative group bg-slate-900 dark:bg-black rounded-3xl p-8 border-2 border-indigo-600 shadow-2xl shadow-indigo-500/20 flex flex-col h-full transform md:-translate-y-4 overflow-hidden">
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none"></div>
                      <div className="relative z-10 mb-8 border-b border-white/10 pb-8">
                         <div className="flex justify-between items-center mb-4">
                            <div className="inline-block px-3 py-1 bg-indigo-600 rounded-md text-xs font-bold text-white uppercase tracking-wider">FULL MANAGEMENT</div>
                            <span className="text-indigo-400 text-xs font-bold flex items-center gap-1"><Star size={12} fill="currentColor"/> RECOMMENDED</span>
                         </div>
                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Premium Growth Plan <span className="text-base font-normal text-indigo-300 block">(Market-Based)</span></h3>
                         <p className="text-slate-300 font-medium mt-2">এই প্যাকেজটা তাদের জন্য, যারা সত্যি সত্যি গ্রোথ চায়।</p>
                      </div>
                      
                      <div className="relative z-10 mb-6">
                         <div className="flex items-baseline gap-2 mb-2">
                             <span className="text-3xl md:text-4xl font-bold text-white">৫,০০০ টাকা</span>
                             <span className="text-slate-400 font-medium">/ মাস</span>
                         </div>
                         <div className="text-sm text-indigo-300 mb-4">+ ১৪৫ টাকা / ডলার রেট</div>
                         
                         <div className="bg-gradient-to-r from-red-600 to-pink-600 p-3 rounded-xl text-white shadow-lg animate-pulse-slow">
                            <p className="text-sm font-bold flex items-center gap-2 justify-center">
                               <Gift size={16} fill="currentColor" />
                               স্পেশাল অফার: ১ম মাস সার্ভিস চার্জ ফ্রি!
                            </p>
                         </div>
                      </div>
                      
                      <div className="text-slate-300 mb-6 relative z-10 leading-relaxed text-sm space-y-4">
                         <p>
                            মার্কেট অনুযায়ী আমরা আপনাকে আইডিয়া দেব, আর একই সাথে মার্কেট ট্রেন্ড ও ডেটা দেখে পুরো প্ল্যান আমরা নিজেরাই তৈরি করব—কোন অফার, কোন কনটেন্ট, কোন ক্যাম্পেইন স্ট্রাকচার, কোথায় বাজেট বাড়ানো হবে—সবকিছু আমাদের টিম হ্যান্ডেল করবে।
                         </p>
                         <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-500/30">
                            <span className="block text-indigo-300 font-bold mb-1">আপনার দায়িত্ব শুধু এটুকু:</span>
                            <span className="text-white">আপনি শুধু অর্ডার কনফার্ম করবেন এবং ডেলিভারি করবেন। বাকি সব দায়িত্ব আমাদের।</span>
                         </div>
                      </div>
                      
                      <ul className="space-y-3 mb-8 flex-grow relative z-10">
                         {[
                            "কনটেন্ট প্ল্যানিং + আইডিয়া (মার্কেট অনুযায়ী)",
                            "অফার স্ট্রাকচার + গ্রোথ ক্যাম্পেইন প্ল্যান",
                            "Audience Research + Retargeting Setup",
                            "Budget Scaling (প্রফিটেবল ক্যাম্পেইনে)",
                            "A/B Testing (ক্রিয়েটিভ/কপি/অডিয়েন্স)",
                            "Facebook/Meta Ads সম্পূর্ণ ম্যানেজমেন্ট",
                            "Website/Landing Page Audit & Tracking Check",
                            "ফুল সাপোর্ট + নিয়মিত অপ্টিমাইজেশন"
                         ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                               <CheckCircle size={16} className="text-indigo-400 mt-1 shrink-0" />
                               <span className="text-white font-medium text-sm">{item}</span>
                            </li>
                         ))}
                      </ul>

                      <Button variant="white" className="w-full justify-center relative z-10 font-bold" onClick={() => handleOrderClick("Premium Growth Plan")}>সিলেক্ট করুন</Button>
                   </div>
                </div>
            </div>

            {/* 5. PROCESS STEPS */}
            <div className="mb-24 relative z-10">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Process (How we work)</h2>
                  <p className="text-slate-600 dark:text-slate-400">ধাপে ধাপে যেভাবে আমরা আপনার কাজ সম্পন্ন করি</p>
               </div>

               <div className="relative">
                  {/* Connector Line (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent -translate-y-1/2 z-0"></div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
                     {[
                        { step: "Audit", icon: Search, desc: "Analyze Status" },
                        { step: "Strategy", icon: BrainCircuit, desc: "Growth Plan" },
                        { step: "Setup", icon: Settings, desc: "Pixel & Tech" },
                        { step: "Launch", icon: Rocket, desc: "Campaign Live" },
                        { step: "Optimize", icon: TrendingUp, desc: "Better ROI" },
                        { step: "Scale", icon: Maximize, desc: "High Volume" },
                        { step: "Report", icon: FileText, desc: "Transparency" }
                     ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                           <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 shadow-lg group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 relative">
                              <item.icon size={28} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-900">
                                 {idx + 1}
                              </div>
                           </div>
                           <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.step}</h3>
                           <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* 6. WHO THIS IS FOR */}
            <div className="mb-24 relative z-10">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">এই সার্ভিসটি যাদের জন্য</h2>
                  <p className="text-slate-600 dark:text-slate-400">আপনার ব্যবসার ধরণ যদি নিচে মিলে যায়</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                     { title: "E-commerce", subtitle: "অনলাইন শপ ও ব্র্যান্ড", icon: ShoppingBag, color: "text-pink-500" },
                     { title: "Local Business", subtitle: "ক্লিনিক, সেলুন, জিম, রেস্টুরেন্ট", icon: Store, color: "text-blue-500" },
                     { title: "Trainers/Coaches", subtitle: "মেন্টর, ট্রেইনার ও কনসালট্যান্ট", icon: GraduationCap, color: "text-green-500" },
                     { title: "Real Estate", subtitle: "প্রপার্টি ও ডেভেলপার কোম্পানি", icon: Building2, color: "text-orange-500" }
                  ].map((item, idx) => (
                     <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                        <div className={`w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 ${item.color}`}>
                           <item.icon size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* 7. PORTFOLIO (Visual Proof) */}
            <div className="mb-24 relative z-10 overflow-hidden">
                  <div className="text-center mb-12">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200 dark:border-blue-500/30">
                        <Layers size={14} /> Recent Work
                     </div>
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        সাম্প্রতিক কাজের হাইলাইটস
                     </h2>
                     <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        আমাদের ক্লায়েন্টদের জন্য তৈরি করা কিছু হাই-কনভার্টিং ল্যান্ডিং পেজ এবং ওয়েবসাইটের ঝলক।
                     </p>
                  </div>

                  {/* Marquee Logic */}
                  <div className="flex flex-col gap-6 md:gap-12 relative w-full overflow-hidden">
                     {/* Gradient Masks */}
                     <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>
                     <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none"></div>

                     {/* Row 1: Right to Left */}
                     <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
                        {/* First Set */}
                        <div className="flex gap-4 md:gap-6 px-3">
                           {portfolioImages.map((img, idx) => (
                              <div key={`p1-${idx}`} className="relative group w-[200px] md:w-[350px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                                 <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                 <img 
                                    src={img} 
                                    alt="Portfolio Item" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                    <p className="text-white font-bold text-sm md:text-lg">High Performance</p>
                                    <p className="text-indigo-300 text-[10px] md:text-xs uppercase tracking-wide">Proven Result</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                        {/* Duplicate Set for Loop */}
                        <div className="flex gap-4 md:gap-6 px-3">
                           {portfolioImages.map((img, idx) => (
                              <div key={`p2-${idx}`} className="relative group w-[200px] md:w-[350px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                                 <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                 <img 
                                    src={img} 
                                    alt="Portfolio Item" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                    <p className="text-white font-bold text-sm md:text-lg">High Performance</p>
                                    <p className="text-indigo-300 text-[10px] md:text-xs uppercase tracking-wide">Proven Result</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Row 2: Left to Right (Reverse) */}
                     <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
                        {/* First Set */}
                        <div className="flex gap-4 md:gap-6 px-3">
                           {portfolioImages.map((img, idx) => (
                              <div key={`p3-${idx}`} className="relative group w-[200px] md:w-[350px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                                 <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                 <img 
                                    src={img} 
                                    alt="Portfolio Item" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                    <p className="text-white font-bold text-sm md:text-lg">High Converting Design</p>
                                    <p className="text-indigo-300 text-[10px] md:text-xs uppercase tracking-wide">Live Project</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                        {/* Duplicate Set for Loop */}
                        <div className="flex gap-4 md:gap-6 px-3">
                           {portfolioImages.map((img, idx) => (
                              <div key={`p4-${idx}`} className="relative group w-[200px] md:w-[350px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
                                 <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                 <img 
                                    src={img} 
                                    alt="Portfolio Item" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                    <p className="text-white font-bold text-sm md:text-lg">High Converting Design</p>
                                    <p className="text-indigo-300 text-[10px] md:text-xs uppercase tracking-wide">Live Project</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

            {/* 8. CLIENT REVIEWS */}
            <ClientReviews 
               headline="আমরা কি সত্যিই ভালো কাজ করি? 🤔"
               subheadline="আমাদের কথায় বিশ্বাস না হলে, শুনুন তাদের মুখ থেকে যারা ইতিমধ্যে তাদের ব্যবসা ৫-১০ গুণ বাড়িয়ে ফেলেছেন!"
            />

            {/* 9. FAQ Section */}
            <div className="mt-24 mb-24 max-w-3xl mx-auto">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">সচরাচর জিজ্ঞাসা (FAQ)</h2>
                   <p className="text-slate-600 dark:text-slate-400">আপনার মনে জাগা কিছু সাধারণ প্রশ্নের উত্তর</p>
                </div>
                <div className="space-y-4">
                   {metaAdsFaqs.map((item, idx) => (
                      <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
                         <button className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" onClick={() => toggleFaq(idx)}>
                            <span className="flex items-center gap-3">
                               <HelpCircle size={18} className="text-indigo-500 shrink-0" />
                               {item.q}
                            </span>
                            {openFaqIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                         </button>
                         {openFaqIndex === idx && (
                            <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2">
                               <div className="pt-2">{item.a}</div>
                            </div>
                         )}
                      </div>
                   ))}
                </div>
            </div>

            {/* VIDEO MODAL */}
            {isVideoOpen && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/95 backdrop-blur-xl animate-fade-in">
                  <button 
                     onClick={() => setIsVideoOpen(false)}
                     className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors z-50 border border-slate-700"
                  >
                     <X size={24} />
                  </button>
                  
                  <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-800 bg-black relative">
                     <video 
                        src={videoUrls.metaAds} 
                        className="w-full h-full object-contain"
                        controls 
                        autoPlay
                     />
                  </div>
               </div>
            )}

         </div>
    </div>
  );
};

export default MetaAdsLayout;