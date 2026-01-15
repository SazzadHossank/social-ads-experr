import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, Rocket, MessageCircle, Crown, ArrowRight, 
  ClipboardList, Target, Ban, HeartHandshake, X, Layers, Calculator,
  Truck, Server, Layout, Receipt, ShieldAlert, FileSearch, XCircle, 
  Trophy, Eye, Palette, Database, Wallet, Phone, Settings, ChevronLeft,
  TrendingUp, HelpCircle, Laptop, Shirt, Sparkles, Activity, Utensils, ExternalLink,
  Zap, Star, Gift, ShieldCheck, ZoomIn, ChevronRight, Play
} from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import { useAdmin } from '../contexts/AdminContext';

const LandingPageLayout: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentResultSlide, setCurrentResultSlide] = useState(0);
  const [activeMedia, setActiveMedia] = useState<{type: 'image' | 'video', url: string} | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { videoUrls, landingPageDemoLinks } = useAdmin();

  // Slider Logic Data
  const screenshots = TEXT.testimonials.success_screenshots;
  const totalSlides = screenshots.length;

  const handleDiscussionClick = () => {
    const message = `Hello, I'm interested in Landing Page Design and would like to discuss my budget and business type.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePlanClick = (planName: string) => {
    const message = `Hello, I want to select the '${planName}' plan for Landing Page Design.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto slide for Results
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentResultSlide(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentResultSlide(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentResultSlide(prev => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Safe safe link access
  const getDemoLink = (index: number) => {
      if (landingPageDemoLinks && landingPageDemoLinks[index]) {
          return landingPageDemoLinks[index];
      }
      return '#';
  };

  return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-indigo-500/30">
            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               {/* Back Navigation */}
               <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-sm">
                     <ArrowLeft size={14} />
                  </div>
                  <span className="font-medium text-sm">হোমে ফিরে যান</span>
               </Link>

               {/* 1. HERO SECTION */}
               <div className="text-center max-w-5xl mx-auto mb-20 relative">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-500/20 animate-fade-in-up">
                     <Rocket size={14} className="fill-current animate-pulse" />
                     Sales Booster
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                     মাত্র <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">৬,৫০০ টাকায়</span> পাবেন প্রফেশনাল ল্যান্ডিং পেজ যা আপনার সেল বাড়াবে <span className="underline decoration-wavy decoration-indigo-500/30 text-indigo-500">১০ গুণ!</span>
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                     ঘুমালেও আপনার সেল বন্ধ হবে না। আমাদের ল্যান্ডিং পেজ হবে আপনার ২৪/৭ ডিজিটাল সেলসম্যান!
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        প্যাকেজগুলো দেখুন <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                     <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full" onClick={() => setIsVideoOpen(true)}>
                        <Play size={20} className="mr-2" /> ডেমো ভিডিও দেখুন
                     </Button>
                  </div>
               </div>

               {/* NEW: VIDEO SECTION */}
               <div className="mb-24 relative z-10">
                  <div className="max-w-4xl mx-auto">
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

                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                           <h3 className="text-white font-bold text-lg md:text-xl">দেখুন ল্যান্ডিং পেজ কীভাবে সেলস বাড়ায়</h3>
                           <p className="text-slate-300 text-sm mt-1">লাইভ ডেমো এবং ফিচার ওভারভিউ</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 2. PAIN POINTS (Red Section) */}
               <div className="mb-24 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="text-center mb-10">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 dark:text-red-500 mb-4 flex items-center justify-center gap-3">
                        <HeartHandshake className="text-red-500" />
                        আপনার এই সমস্যাগুলো হচ্ছে না তো?
                     </h2>
                     <div className="w-20 h-1 bg-red-500/30 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                     {[
                        "ফেসবুকে অ্যাড চালাচ্ছেন কিন্তু অর্ডার আসছে না?",
                        "হাজার হাজার টাকা অ্যাডে খরচ হচ্ছে কিন্তু সেল হচ্ছে না?",
                        "কাস্টমাররা দেখছে কিন্তু কিনছে না?",
                        "মেসেঞ্জারে রিপ্লাই দিতে দিতে ক্লান্ত হয়ে যাচ্ছেন?",
                        "রাতে ঘুমানোর পর অর্ডার মিস হয়ে যাচ্ছে?"
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-red-100 dark:border-red-900/20 shadow-sm">
                           <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-full text-red-600 shrink-0">
                              <XCircle size={20} />
                           </div>
                           <span className="font-bold text-slate-700 dark:text-slate-200">{item}</span>
                        </div>
                     ))}
                  </div>
                  
                  <div className="mt-10 text-center">
                     <p className="text-slate-600 dark:text-slate-300 font-bold bg-white dark:bg-slate-900 inline-block px-6 py-2 rounded-full shadow-sm">
                        😰 আপনি একা নন! ৯৫% অনলাইন সেলারের এই সমস্যা হয়।
                     </p>
                  </div>
               </div>

               {/* 3. COMPARISON (Messenger vs Landing Page) */}
               <div className="mb-24">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        কেন ল্যান্ডিং পেজ দরকার?
                     </h2>
                     <p className="text-slate-600 dark:text-slate-400">
                        পার্থক্যটা নিজেই দেখুন এবং সিদ্ধান্ত নিন
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 max-w-5xl mx-auto">
                     {/* Messenger / Old Way */}
                     <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-3xl md:rounded-r-none md:rounded-l-3xl border border-slate-200 dark:border-slate-800 relative">
                        <div className="absolute top-4 left-4 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">OLD WAY</div>
                        <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-2">
                           <MessageCircle size={24} /> ফেসবুক পেজ/মেসেঞ্জার
                        </h3>
                        <ul className="space-y-4">
                           {[
                              "অ্যাড কস্ট বেশি (প্রতি অর্ডারে ২৫০-৫০০ টাকা)",
                              "কাস্টমার মেসেজ করে চলে যায়",
                              "রাতে/ব্যস্ত থাকলে অর্ডার মিস",
                              "কাস্টমারকে ম্যানুয়ালি রিপ্লাই দিতে হয়",
                              "ফেসবুক নিয়ন্ত্রণ করে সবকিছু"
                           ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                 <X className="text-red-500 mt-1 shrink-0" size={18} />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Landing Page / New Way */}
                     <div className="bg-indigo-600 p-8 rounded-3xl md:rounded-l-none md:rounded-r-3xl shadow-2xl relative transform md:scale-105 z-10 flex flex-col justify-center">
                        <div className="absolute top-4 left-4 bg-green-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full">SMART WAY</div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                           <Layout size={24} /> প্রফেশনাল ল্যান্ডিং পেজ
                        </h3>
                        <ul className="space-y-4">
                           {[
                              "অ্যাড কস্ট কম (প্রতি অর্ডারে ৮০-১৫০ টাকা)",
                              "১ ক্লিকে সরাসরি অর্ডার",
                              "২৪ ঘণ্টা অটো অর্ডার আসে (ঘুমের মধ্যেও)",
                              "কোনো রিপ্লাই দিতে হয় না",
                              "সম্পূর্ণ আপনার নিয়ন্ত্রণে"
                           ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-indigo-100">
                                 <CheckCircle className="text-green-400 mt-1 shrink-0" size={18} />
                                 <span className="font-medium">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

               {/* 4. KEY FEATURES (11 Special Features) */}
               <div className="mb-24">
                  <div className="text-center mb-12">
                     <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
                        <Crown size={32} />
                     </div>
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        ১১টি স্পেশাল কী-ফিচার
                     </h2>
                     <p className="text-xl text-indigo-600 dark:text-indigo-400 font-bold">
                        যা আপনার সেল বাড়াবে ১০ গুণ!
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { title: "Incomplete Order Tracker", desc: "যারা কার্টে রেখে চলে গেছে, তাদের রিটার্গেট করে সেল বাড়ান।", icon: FileSearch, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                        { title: "Fraud Checker System", desc: "প্রোডাক্ট পাঠানোর আগেই ফ্রড কাস্টমার চিনুন, টাকা বাঁচান।", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                        { title: "IP Ban Feature", desc: "ফ্রড কাস্টমারদের পার্মানেন্টলি ব্লক করার সুবিধা।", icon: Ban, color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-800" },
                        { title: "High-Converting Page", desc: "স্পেশাল প্রোডাক্টের জন্য সাইকোলজিক্যাল সেলস ডিজাইন।", icon: Layout, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                        { title: "One-Click Courier Entry", desc: "Steadfast, Pathao, RedX - এক ক্লিকেই অর্ডার এন্ট্রি।", icon: Truck, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
                        { title: "Amount Adjust", desc: "অর্ডার ভ্যালু, ডিসকাউন্ট ও শিপিং চার্জ সহজে এডজাস্ট করুন।", icon: Calculator, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                        { title: "Footprint Retargeting", desc: "ভিজিটরদের ডাটা ক্যাপচার করে রিটার্গেটিং অ্যাড চালান।", icon: Target, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                        { title: "Advanced Order Manager", desc: "সব অর্ডারের স্ট্যাটাস এক ড্যাশবোর্ডে ম্যানেজ করুন।", icon: ClipboardList, color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
                        { title: "Server Side Tracking", desc: "iOS 14+ আপডেট সল্যুশন। ১০০% ডাটা ট্র্যাকিং।", icon: Server, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
                        { title: "Stock Management", desc: "স্টক শেষ হওয়ার আগেই অটোমেটিক এলার্ট পান।", icon: Layers, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-900/20" },
                        { title: "Auto Invoice", desc: "অটোমেটিক প্রফেশনাল ইনভয়েস জেনারেট ও প্রিন্ট।", icon: Receipt, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
                     ].map((feat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 group">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.bg} ${feat.color}`}>
                              <feat.icon size={24} />
                           </div>
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feat.title}</h3>
                           <p className="text-sm text-slate-600 dark:text-slate-400">{feat.desc}</p>
                        </div>
                     ))}
                     
                     {/* Bonus Card */}
                     <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl text-white flex flex-col justify-center items-center text-center shadow-lg">
                        <div className="text-3xl font-bold mb-1">৪১+</div>
                        <div className="text-sm font-medium opacity-90 mb-4">আরও ইনবিল্ট ফিচার</div>
                        <p className="text-xs mb-4">মোবাইল রেস্পন্সিভ, ফাস্ট লোডিং, এসইও ফ্রেন্ডলি, পেমেন্ট গেটওয়ে ইত্যাদি।</p>
                        <Button variant="secondary" size="sm" className="w-full justify-center text-indigo-900" onClick={() => handleDiscussionClick()}>
                           সব ফিচার জানুন
                        </Button>
                     </div>
                  </div>
               </div>

               {/* ==========================================
                   NEW SECTION: RESULTS SLIDER (Copied & Updated Title)
                  ========================================== */}
               <div className="mb-24">
                   <div className="text-center max-w-4xl mx-auto mb-12">
                       <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-mono text-xs uppercase tracking-widest mb-4 border border-green-500/30 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 animate-pulse">
                           <ShieldCheck size={14} /> Verified Results
                       </div>
                       <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                           আমাদের ল্যান্ডিং পেজ ব্যবহার করে ক্লায়েন্টরা <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">লাখ লাখ টাকার প্রোডাক্ট সেল</span> করছে প্রত্যেকদিন <br/>
                           আপনি কেন পিছিয়ে থাকবেন?
                       </h2>
                       <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                           "আমরা প্রতি মাসে <span className="text-green-600 dark:text-green-400 font-bold">১০ লাখ টাকা থেকে ১ কোটি টাকা</span> পর্যন্ত আমাদের প্রত্যেকটা ক্লাইন্ট সেল হয়। ডিটেলস আপনি এখানে পেয়ে যাবেন এবং আরও বিস্তারিত জানতে আমাদের সাথে কথা বলতে পারেন।"
                       </p>
                   </div>

                   {/* The Slider */}
                   <div className="relative group max-w-6xl mx-auto">
                       {/* Viewport */}
                       <div className="overflow-hidden rounded-3xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl relative aspect-[16/9] md:aspect-[21/9]">
                           <div 
                               className="flex h-full transition-transform duration-700 ease-in-out"
                               style={{ transform: `translateX(-${currentResultSlide * 100}%)` }}
                           >
                               {screenshots.map((shot, idx) => (
                                   <div key={idx} className="min-w-full h-full relative shrink-0 cursor-zoom-in" onClick={() => setActiveMedia({type: 'image', url: shot.url})}>
                                       <img 
                                           src={shot.url} 
                                           alt={shot.title} 
                                           className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                                       />
                                       {/* Caption Overlay */}
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                                           <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                               <div className="bg-indigo-600 w-fit px-3 py-1 rounded text-xs font-bold text-white mb-2 uppercase tracking-wider">Proof #{idx + 1}</div>
                                               <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{shot.title}</h3>
                                               <p className="text-slate-200 text-sm md:text-base max-w-xl">{shot.desc}</p>
                                           </div>
                                           {/* Zoom Hint */}
                                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                                               <ZoomIn className="text-white w-8 h-8" />
                                           </div>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>

                       {/* Controls */}
                       <button 
                           onClick={prevSlide}
                           className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/50 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-white backdrop-blur-md transition-all border border-slate-200 dark:border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 shadow-lg"
                       >
                           <ChevronLeft size={28} />
                       </button>
                       <button 
                           onClick={nextSlide}
                           className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/50 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-white backdrop-blur-md transition-all border border-slate-200 dark:border-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 shadow-lg"
                       >
                           <ChevronRight size={28} />
                       </button>

                       {/* Indicators */}
                       <div className="flex justify-center gap-2 mt-6">
                           {screenshots.map((_, idx) => (
                               <button
                                   key={idx}
                                   onClick={() => setCurrentResultSlide(idx)}
                                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentResultSlide ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'}`}
                               />
                           ))}
                       </div>
                   </div>
               </div>

               {/* 5.5 NEW SECTION: DEMO DESIGN GALLERY (UPDATED - No Grid) */}
               <div className="mb-24">
                  <div className="text-center mb-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                       <Palette size={14} /> Inspiration
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        আমাদের ল্যান্ডিং পেজ ডেমো গ্যালারি
                     </h2>
                     <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        আপনার পণ্যের ক্যাটাগরি সিলেক্ট করে পছন্দের ডিজাইন বেছে নিন
                     </p>
                  </div>
                  
                  {/* Category Buttons Link System */}
                  <div className="flex flex-wrap justify-center gap-4">
                     {[
                        { name: "গ্যাজেট আইটেম", icon: Laptop, url: getDemoLink(0) },
                        { name: "ফ্যাশন কালেকশন", icon: Shirt, url: getDemoLink(1) },
                        { name: "কসমেটিকস & বিউটি", icon: Sparkles, url: getDemoLink(2) },
                        { name: "হেলথ & ফিটনেস", icon: Activity, url: getDemoLink(3) },
                        { name: "কিচেন এক্সেসরিজ", icon: Utensils, url: getDemoLink(4) },
                     ].map((item, idx) => (
                       <button 
                         key={idx}
                         onClick={() => window.open(item.url, '_blank')}
                         className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm font-bold text-slate-700 dark:text-slate-200 group"
                       >
                         <item.icon size={18} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                         {item.name}
                         <ExternalLink size={14} className="ml-1 opacity-50 group-hover:opacity-100" />
                       </button>
                     ))}
                  </div>
               </div>

               {/* 6. PRICING (3 Packages) */}
               <div id="pricing" className="mb-24">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        আমাদের প্যাকেজ - সবার জন্য সাশ্রয়ী!
                     </h2>
                     <p className="text-lg text-slate-600 dark:text-slate-400">
                        লুকানো কোনো খরচ নেই। এককালীন পেমেন্ট।
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                     
                     {/* Basic (6500) */}
                     <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative flex flex-col h-full">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">বেসিক প্যাকেজ</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                           <span className="text-4xl font-black text-slate-900 dark:text-white">৳৬,৫০০</span>
                           <span className="text-sm text-slate-400 line-through">৳১৫,০০০</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                           {[
                              "১টি প্রফেশনাল ডিজাইন", 
                              "ফ্রি .com ডোমেইন ও হোস্টিং (আপনার নামে)", 
                              "সার্ভার সাইড ট্র্যাকিং (Pixel/CAPI)",
                              "ফেক অর্ডার ডিটেকশন সিস্টেম (Key Feature)", 
                              "ইনকমপ্লিট অর্ডার রিকভারি (Key Feature)",
                              "স্টক ম্যানেজমেন্ট সিস্টেম (Key Feature)",
                              "অটো ইনভয়েস জেনারেটর (Key Feature)",
                              "৩ মাস ফ্রি সাপোর্ট"
                           ].map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                 <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" /> {feat}
                              </li>
                           ))}
                        </ul>
                        
                        <div className="bg-slate-50 dark:bg-slate-950/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 mb-6 text-xs text-slate-500 text-center">
                           <p>অতিরিক্ত ডিজাইন চার্জ:</p>
                           <p className="font-bold">পুরাতন ক্লায়েন্ট: ৳১,৯৫০ | নতুন: ৳২,৫০০</p>
                        </div>

                        <Button variant="outline" className="w-full justify-center mt-auto" onClick={() => handlePlanClick("Basic Landing Page")}>অর্ডার করুন</Button>
                     </div>

                     {/* Standard (Best Value - 12500) */}
                     <div className="bg-indigo-600 p-8 rounded-3xl border-2 border-indigo-400 shadow-2xl relative transform scale-105 z-10 text-white flex flex-col h-full">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                           <Star size={10} fill="currentColor" /> BEST SELLING
                        </div>
                        <h3 className="text-2xl font-bold mb-2">স্ট্যান্ডার্ড প্যাকেজ</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                           <span className="text-4xl font-black">৳১২,৫০০</span>
                           <span className="text-sm text-indigo-200 line-through">৳২৫,০০০</span>
                        </div>
                        <div className="bg-indigo-700/50 p-3 rounded-lg border border-indigo-500 mb-6 text-sm">
                           <p className="flex items-center gap-2 font-bold text-yellow-300">
                              <Zap size={14} fill="currentColor" /> ফেসবুক অ্যাডের খরচ বাঁচাতে রেকমেন্ডেড
                           </p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                           {[
                              "বেসিক প্যাকেজের সব ফিচার", 
                              "৩টি প্রফেশনাল ডিজাইন (ফানেল স্ট্র্যাটেজি)", 
                              "অ্যাডভান্সড অ্যানালিটিক্স সিস্টেম", 
                              "SMS নোটিফিকেশন সিস্টেম ইন্টিগ্রেশন",
                              "Facebook Ads কস্টিং কমানোর স্ট্রাকচার",
                              "৬ মাস ফ্রি সাপোর্ট", 
                              "A/B টেস্টিং সুবিধা"
                           ].map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-indigo-100">
                                 <CheckCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" /> {feat}
                              </li>
                           ))}
                        </ul>
                        <Button variant="secondary" className="w-full justify-center bg-white text-indigo-900 hover:bg-indigo-50 border-none font-bold mt-auto" onClick={() => handlePlanClick("Standard Landing Page")}>অর্ডার করুন (৫০% ছাড়)</Button>
                     </div>

                     {/* Premium (18500) */}
                     <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-purple-500/30 relative flex flex-col h-full">
                        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">প্রিমিয়াম প্যাকেজ</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                           <span className="text-4xl font-black text-slate-900 dark:text-white">৳১৮,৫০০</span>
                           <span className="text-sm text-slate-400 line-through">৳৪০,০০০</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                           {[
                              "স্ট্যান্ডার্ড প্যাকেজের সব ফিচার", 
                              "৪টি প্রফেশনাল ডিজাইন (হাই-কনভার্টিং)", 
                              "CRM সফটওয়্যার ইন্টিগ্রেশন", 
                              "SMS Automation & Marketing", 
                              "অ্যাডভান্সড বিজনেস অটোমেশন ফিচার",
                              "১ বছর প্রায়োরিটি সাপোর্ট"
                           ].map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                 <CheckCircle size={16} className="text-purple-500 shrink-0 mt-0.5" /> {feat}
                              </li>
                           ))}
                        </ul>
                        <Button variant="outline" className="w-full justify-center mt-auto" onClick={() => handlePlanClick("Premium Landing Page")}>অর্ডার করুন</Button>
                     </div>
                  </div>
                  
                  <div className="mt-12 space-y-4">
                     {/* Discount Banner */}
                     <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-4 text-center max-w-3xl mx-auto shadow-lg animate-pulse">
                        <p className="text-lg font-bold flex items-center justify-center gap-2">
                           <Gift size={20} className="animate-bounce" />
                           পুরাতন কাস্টমারদের জন্য থাকছে ফ্ল্যাট ১০% ডিসকাউন্ট!
                        </p>
                     </div>

                     {/* Offer Expiry */}
                     <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-500/20 rounded-2xl p-6 text-center max-w-3xl mx-auto">
                        <p className="text-lg font-bold text-yellow-800 dark:text-yellow-500 mb-2">🎁 বিশেষ অফার - এই মাসেই অর্ডার করুন!</p>
                        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">প্রথম ৫০ জন ক্লায়েন্ট পাবেন অতিরিক্ত ১,০০০ টাকা ছাড় + ফ্রি লোগো ডিজাইন।</p>
                        <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">অফার শেষ হবে: ৩১ জানুয়ারি, ২০২৬</div>
                     </div>
                  </div>
               </div>

               {/* RECENT WORK HIGHLIGHTS (Portfolio Marquee) */}
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
                           {TEXT.results_portfolio.items.map((img, idx) => (
                              <div key={`p1-${idx}`} className="relative group w-[200px] md:w-[350px] aspect-[1000/1300] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl dark:shadow-2xl flex-shrink-0 cursor-pointer">
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
                           {TEXT.results_portfolio.items.map((img, idx) => (
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
                           {TEXT.results_portfolio.items.map((img, idx) => (
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
                           {TEXT.results_portfolio.items.map((img, idx) => (
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

               {/* 7. WHY US */}
               <div className="mb-24">
                  <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold text-slate-900 dark:text-white">কেন শুধু আমাদের কাছ থেকেই নিবেন?</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { title: "আমরা মার্কেটার", desc: "অন্যরা শুধু ডিজাইন করে, আমরা সেলস বুঝি।", icon: TrendingUp },
                        { title: "ট্র্যাক রেকর্ড", desc: "আমাদের ক্লায়েন্টরা মাসে ২.৫ কোটি টাকার সেল জেনারেট করছে।", icon: Trophy },
                        { title: "Data Driven", desc: "সার্ভার সাইড ট্র্যাকিং দিয়ে ১০০% ডাটা ক্যাপচার নিশ্চিত করি।", icon: Database },
                        { title: "সেরা প্রাইস", desc: "অন্যরা যেখানে ২০ হাজারে যা দেয়, আমরা তা ৬,৫০০ টাকায় দিচ্ছি।", icon: Wallet },
                        { title: "২৪/৭ সাপোর্ট", desc: "প্রজেক্ট শেষ হওয়ার পরেও আমরা পাশে থাকি।", icon: Phone },
                        { title: "ফ্রি আপডেট", desc: "টেকনোলজি পাল্টালে আমরা আপনার সিস্টেম আপডেট করে দেব।", icon: Settings },
                     ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                           <item.icon size={32} className="text-indigo-500 mx-auto mb-4" />
                           <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                           <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* 8. FAQ */}
               <div className="mb-24 max-w-3xl mx-auto">
                   <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">সচরাচর জিজ্ঞাসা (FAQ)</h2>
                   <div className="space-y-4">
                      {[
                         {q: "আপনারা কি হোস্টিং ব্যবহার করেন? cPanel অ্যাক্সেস পাব?", a: "যদি cPanel চান, তবে অর্ডার করার আগেই জানাতে হবে; আমরা আপনার ইমেইলে কিনে দেব। তবে আমরা আমাদের **Managed VPS Server** রিকমেন্ড করি। এতে সাইট সুপার ফাস্ট থাকে এবং কোনো টেকনিক্যাল সমস্যা হলে আমরাই ফিক্স করে দিই। এক্ষেত্রে cPanel পাবেন না, তবে অ্যাডমিন প্যানেল দিয়ে সবকিছু কন্ট্রোল করতে পারবেন।"},
                         {q: "ল্যান্ডিং পেজ বানাতে কতদিন লাগবে?", a: "মাত্র ৩-৫ কার্যদিবস। জরুরি হলে ২ দিনেও ডেলিভার করতে পারি।"},
                         {q: "ট্র্যাকিং এবং সিকিউরিটি সিস্টেম কেমন হবে?", a: "আমাদের প্রতিটি ল্যান্ডিং পেজে **Full Server-Side Tracking** করা থাকে। এছাড়া প্রতিটি পেজে **Fake Order Protection** সিস্টেম থাকে। আপনি যত প্রিমিয়াম প্যাকেজ নিবেন, ফিল্টারিং সিস্টেম তত অ্যাডভান্সড করে দেওয়া হবে।"},
                         {q: "পেমেন্ট কীভাবে করব?", a: "বিকাশ/নগদ/রকেট অথবা ব্যাংক ট্রান্সফার। ৫০% এডভান্স, ৫০% কাজ শেষে।"},
                         {q: "অর্ডার করার পর কি রিফান্ড পাব?", a: "আমরা শতভাগ মান নিশ্চিত করি। তবুও যদি কাজে সন্তুষ্ট না হন, যুক্তিসঙ্গত কারণে রিফান্ড দেওয়া হবে।"}
                      ].map((item, idx) => (
                         <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                            <button className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900/50 text-left font-bold text-slate-800 dark:text-slate-200" onClick={() => toggleFaq(idx)}>
                               <span className="flex items-center gap-3">
                                  <HelpCircle size={18} className="text-indigo-500" />
                                  {item.q}
                               </span>
                               {openFaqIndex === idx ? <ChevronLeft className="-rotate-90" /> : <ChevronLeft className="rotate-0" />}
                            </button>
                            {openFaqIndex === idx && (
                               <div className="p-4 bg-white dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                                  {item.a}
                               </div>
                            )}
                         </div>
                      ))}
                   </div>
               </div>

               {/* 9. FINAL CTA */}
               <div className="mt-20 max-w-4xl mx-auto relative z-10 mb-20 text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative group">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                     
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                           ব্যবসা লস করতে না চাইলে <br/> <span className="text-green-200">আজই ডেভেলপমেন্ট শুরু করুন!</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 text-white/90 mb-8 font-medium">
                           <span>❌ প্রতিদিন ১০-২০টা অর্ডার মিস</span>
                           <span>❌ মাসে লাখ টাকা সেল লস</span>
                           <span>❌ কম্পিটিটররা এগিয়ে যাচ্ছে</span>
                        </div>
                        <p className="text-xl text-white font-bold mb-8">
                           সিদ্ধান্ত আপনার। সময় এখনই!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                           <Button className="bg-white text-green-900 hover:bg-green-50 border-none px-10 py-5 font-black rounded-full text-lg shadow-xl" onClick={() => handlePlanClick("Basic Landing Page")}>
                              ডেভেলপমেন্ট শুরু করুন
                           </Button>
                           <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full" onClick={handleDiscussionClick}>
                              ফ্রি কনসালটেশন নিন
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* FULLSCREEN LIGHTBOX FOR SLIDER & VIDEO */}
               {(activeMedia || isVideoOpen) && (
                   <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fade-in" onClick={() => { setActiveMedia(null); setIsVideoOpen(false); }}>
                       <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors p-2 bg-white/10 rounded-full border border-white/20">
                           <X size={24} />
                       </button>
                       {/* Priority for Video Modal from Button */}
                       {isVideoOpen && (
                           <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black relative" onClick={(e) => e.stopPropagation()}>
                               <video 
                                   src={videoUrls.landingPage} 
                                   controls 
                                   autoPlay 
                                   className="w-full h-full object-contain" 
                               />
                           </div>
                       )}
                       {/* Media from Slider */}
                       {activeMedia && !isVideoOpen && (
                           activeMedia.type === 'video' ? (
                               <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black relative" onClick={(e) => e.stopPropagation()}>
                                   <video 
                                       src={activeMedia.url} 
                                       controls 
                                       autoPlay 
                                       className="w-full h-full object-contain" 
                                   />
                               </div>
                           ) : (
                               <img 
                                   src={activeMedia.url} 
                                   alt="Proof" 
                                   className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-800" 
                                   onClick={(e) => e.stopPropagation()} 
                               />
                           )
                       )}
                   </div>
               )}

            </div>
        </div>
  );
};

export default LandingPageLayout;