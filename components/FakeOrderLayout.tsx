import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ShieldAlert, Ban, Truck, ArrowRight, CheckCircle, 
  XCircle, TrendingDown,
  MessageCircle, Layout, ShoppingCart, BarChart3, Server, Gift,
  Clock, Star, Activity, Code, Globe, Zap, Cpu, TrendingUp,
  Layers, ShieldCheck, Play, X, AlertTriangle
} from 'lucide-react';
import Button from './Button';
import ClientReviews from './ClientReviews';
import ResultsSlider from './ResultsSlider';
import { useAdmin } from '../contexts/AdminContext';

const FakeOrderLayout: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { videoUrls } = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = (plan: string, price: string) => {
    const message = `Hello, I want to order the "${plan}" for Fake Order Prevention System at ${price}.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-red-500/30">
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           
           {/* Back Navigation */}
           <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 md:mb-10 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-sm">
                   <ArrowLeft size={14} />
                </div>
                <span className="font-medium text-sm">হোমে ফিরে যান</span>
           </Link>

           {/* 1. HERO SECTION */}
           <div className="text-center max-w-5xl mx-auto mb-20 relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-6 border border-red-200 dark:border-red-500/30 animate-pulse">
                 <ShieldAlert size={14} className="fill-current" />
                 Stop Revenue Loss
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                 ফেক অর্ডারের কারণে <br className="hidden md:block" />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">
                    আপনার কুরিয়ার চার্জ লস?
                 </span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                 ৯৫% ফেক অর্ডার বন্ধ + ৫০% বিজ্ঞাপন খরচ কমান + ৪৫% বেশি সেলস <br className="hidden md:block"/> — <span className="text-indigo-600 dark:text-indigo-400 font-bold underline decoration-wavy">একটি অটোমেটেড সিস্টেমে!</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full shadow-xl shadow-red-500/20 bg-red-600 hover:bg-red-700 border-red-500" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                    সিস্টেমটি অর্ডার করুন <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
                 <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-full" onClick={() => setIsVideoOpen(true)}>
                    <Play size={20} className="mr-2" /> ডেমো দেখুন
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl -z-10"></div>
                    
                    {/* Thumbnail Image */}
                    <img 
                       src="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png" 
                       alt="Video Thumbnail" 
                       className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                    
                    {/* Overlay & Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                       <div className="relative">
                          <div className="absolute inset-0 bg-red-500/30 rounded-full animate-ping"></div>
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                             <Play size={32} className="ml-1 text-white fill-white" />
                          </div>
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                       <h3 className="text-white font-bold text-lg md:text-xl">দেখুন ফেক অর্ডার ডিটেকশন সিস্টেম কিভাবে কাজ করে</h3>
                       <p className="text-slate-300 text-sm mt-1">লাইভ ডেমো এবং ফিচার ওভারভিউ</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* 2. PROBLEM SECTION (Danger Zone) */}
           <div className="mb-24 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-red-100 dark:border-red-900/20 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
               
               <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                     <ShieldAlert className="text-red-500" size={32} />
                     আপনার ব্যবসায় এই ৫টি সমস্যা হচ্ছে কিনা দেখুন:
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     "প্রতি ১০টি অর্ডারে ৩-৪টি ফেক হয়ে যাচ্ছে?",
                     "কম্পিটিটররা ফেক অর্ডার করে স্টক আটকে রাখছে?",
                     "Facebook-এ প্রতিদিন ২-৫ হাজার টাকা খরচ করেও সেল আসছে না?",
                     "একই কাস্টমার বার বার ভুয়া অর্ডার দিচ্ছে?",
                     "কুরিয়ার চার্জ দিয়ে লস হচ্ছে প্রতিদিন?"
                  ].map((problem, idx) => (
                     <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30">
                        <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-full text-red-600 shrink-0 mt-1">
                           <XCircle size={20} />
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{problem}</span>
                     </div>
                  ))}
                  
                  {/* Impact Card */}
                  <div className="bg-red-600 p-6 rounded-xl text-white flex flex-col justify-center items-center text-center shadow-lg transform md:scale-105">
                     <TrendingDown size={32} className="mb-2 text-red-200" />
                     <h3 className="font-bold text-lg mb-1">ক্ষতির পরিমাণ</h3>
                     <p className="text-sm opacity-90">মাসিক ৫০,০০০-২,০০,০০০ টাকা শুধু ফেক অর্ডারে লস হচ্ছে!</p>
                  </div>
               </div>
           </div>

           {/* 3. ROI CALCULATION (Moved UP for Impact) */}
           <div className="mb-24 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
               
               <div className="relative z-10">
                   <div className="text-center mb-10">
                       <h2 className="text-3xl md:text-4xl font-bold mb-4">হিসাব করুন: এই সিস্টেম কত টাকা বাঁচাবে?</h2>
                       <p className="text-indigo-200">মাত্র ৫,০০০-৮,৫০০ টাকা বিনিয়োগ করে বছরে ১৬,৮০,০০০+ টাকা বাঁচান!</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30">
                           <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle/> আপনার বর্তমান মাসিক লস</h3>
                           <ul className="space-y-4 text-slate-300">
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>ফেক অর্ডারে কুরিয়ার লস</span>
                                   <span className="font-bold text-red-400">৯০,০০০ টাকা</span>
                               </li>
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>Facebook বিজ্ঞাপনে অপচয়</span>
                                   <span className="font-bold text-red-400">২৪,০০০ টাকা</span>
                               </li>
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>হারানো Abandoned Cart সেল</span>
                                   <span className="font-bold text-red-400">৩০,০০০ টাকা</span>
                               </li>
                               <li className="flex justify-between pt-2">
                                   <span className="font-bold text-white">মোট মাসিক লস</span>
                                   <span className="font-bold text-red-500 text-xl">১,৪৪,০০০ টাকা!</span>
                               </li>
                           </ul>
                       </div>

                       <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30">
                           <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2"><CheckCircle/> এই সিস্টেম নেওয়ার পর লাভ</h3>
                           <ul className="space-y-4 text-slate-300">
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>ফেক অর্ডার ৯০% কমবে</span>
                                   <span className="font-bold text-green-400">৮১,০০০ টাকা সাশ্রয়</span>
                               </li>
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>বিজ্ঞাপন খরচ ৪০% কমবে</span>
                                   <span className="font-bold text-green-400">২৪,০০০ টাকা সাশ্রয়</span>
                               </li>
                               <li className="flex justify-between border-b border-white/10 pb-2">
                                   <span>Recovery থেকে বাড়তি সেল</span>
                                   <span className="font-bold text-green-400">৩৫,০০০+ টাকা আয়</span>
                               </li>
                               <li className="flex justify-between pt-2">
                                   <span className="font-bold text-white">মোট মাসিক লাভ</span>
                                   <span className="font-bold text-green-500 text-xl">১,৪০,০০০+ টাকা!</span>
                               </li>
                           </ul>
                       </div>
                   </div>
                   
                   <div className="mt-8 text-center">
                       <p className="text-yellow-400 font-bold text-lg animate-pulse">ROI (Return on Investment): ১,৬৮০%—মাত্র ১.৫ দিনেই খরচ উঠে যাবে!</p>
                   </div>
               </div>
           </div>

           {/* 4. SOLUTION DETAILS SECTION */}
           <div className="mb-24">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                     একটি সিস্টেম = <span className="text-green-600 dark:text-green-500">৯৫% সমস্যা শেষ!</span>
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                     আমরা আনলেছি বাংলাদেশের একমাত্র কমপ্লিট AI-পাওয়ার্ড সলিউশন—যা ইতিমধ্যে ৫০০+ ই-কমার্স ব্যবসাকে প্রতি মাসে লাখ টাকা বাঁচাতে সাহায্য করছে!
                  </p>
               </div>

               <div className="space-y-16">
                  {/* Problem 1: Pixel/Ads */}
                  <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                     <div className="flex-1">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold px-4 py-1 rounded-full inline-block text-sm mb-4">সমস্যা #১: ডলার খরচ করছেন কিন্তু সেল আসছে না?</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Facebook CAPI & Pixel Solution</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">Facebook পিক্সেল ফেক কাস্টমারের ডাটা পাচ্ছে। ফলে Facebook আপনাকে আরও ফেক কাস্টমার দেখাচ্ছে! আমাদের সল্যুশন:</p>
                        <ul className="space-y-3">
                           {[
                              "Facebook CAPI Integration (সার্ভার সাইড)",
                              "Meta Andromeda Update সাপোর্ট",
                              "ডাটা ফিল্টার সিস্টেম (৯৮% সঠিক ডাটা)",
                              "শুধু রিয়েল কাস্টমারের ডাটা ফেসবুকে যাবে"
                           ].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                 <CheckCircle size={16} className="text-green-500" /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="flex-1 w-full bg-white dark:bg-black p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                           <span className="font-bold text-slate-500">Result</span>
                           <span className="text-green-500 font-bold flex items-center gap-1"><TrendingDown className="rotate-180"/> +60% Sales</span>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-500">Ad Cost</span>
                              <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                                 <div className="w-[50%] h-full bg-green-500"></div>
                              </div>
                              <span className="text-xs font-bold text-green-500">-50%</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-500">Accuracy</span>
                              <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                                 <div className="w-[98%] h-full bg-indigo-500"></div>
                              </div>
                              <span className="text-xs font-bold text-indigo-500">98%</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Problem 2: Fake Customer */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                     <div className="flex-1">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold px-4 py-1 rounded-full inline-block text-sm mb-4">সমস্যা #২: একই কাস্টমার বার বার ফেক অর্ডার দিচ্ছে?</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Smart Fraud Detection AI</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">আপনার সিস্টেম জানে না কে আগে ফেক অর্ডার দিয়েছে! আমাদের AI সিস্টেম:</p>
                        <ul className="space-y-3">
                           {[
                              "কাস্টমার হিস্ট্রি ট্র্যাকিং (পূর্বের রেকর্ড চেক)",
                              "সাকসেস রেট চেক (৫০% এর কম হলে ব্লক)",
                              "একই IP এবং ডিভাইস ব্লক সিস্টেম",
                              "ডুপ্লিকেট অর্ডার প্রোটেকশন (২৪ ঘণ্টায় ১টি)"
                           ].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                 <CheckCircle size={16} className="text-green-500" /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-64 h-64 bg-red-500/10 rounded-full flex items-center justify-center animate-pulse">
                           <div className="w-48 h-48 bg-red-500/20 rounded-full flex items-center justify-center">
                              <ShieldAlert size={80} className="text-red-600" />
                           </div>
                           <div className="absolute top-0 right-0 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-red-200 text-xs font-bold text-red-600">
                              Block List Updated
                           </div>
                           <div className="absolute bottom-0 left-0 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-green-200 text-xs font-bold text-green-600">
                              Real Order Approved
                           </div>
                        </div>
                     </div>
                  </div>

                   {/* Problem 3: Delivery Rate */}
                   <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                     <div className="flex-1">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold px-4 py-1 rounded-full inline-block text-sm mb-4">সমস্যা #৩: অর্ডার হচ্ছে কিন্তু ডেলিভারি হচ্ছে না?</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Delivery Success Optimization</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">কিছু এলাকায় বা কিছু কাস্টমারের ডেলিভারি রেট খুবই কম। আমাদের সমাধান:</p>
                        <ul className="space-y-3">
                           {[
                              "Courier Data Check (রিলায়েবিলিটি যাচাই)",
                              "Delivery Success Rate Block (<30% এলাকায় OTP)",
                              "OTP Verification System (সন্দেহজনক অর্ডারে)",
                              "৩টি প্রিমিয়াম SMS Gateway সাপোর্ট"
                           ].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                 <CheckCircle size={16} className="text-green-500" /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="flex-1 w-full bg-white dark:bg-black p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg text-center">
                        <Truck size={48} className="mx-auto text-indigo-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                            <span className="block text-green-500 text-lg mb-1">+90% Sales</span>
                            Delivery Rate Boost
                        </h4>
                        <div className="flex items-center justify-center gap-4 mt-4">
                           <div className="text-center">
                              <p className="text-slate-400 text-sm">Before</p>
                              <p className="text-2xl font-bold text-red-500">50%</p>
                           </div>
                           <ArrowRight size={24} className="text-slate-300" />
                           <div className="text-center">
                              <p className="text-slate-400 text-sm">After</p>
                              <p className="text-2xl font-bold text-green-500">95+%</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
           </div>

           {/* --- NEW SECTION: CUSTOM RESULTS SECTION FOR TRACKING/FILTERING --- */}
           <ResultsSlider 
              badgeText="Impact of Tracking"
              headline="ডাটা ট্র্যাকিং এর ম্যাজিক রেজাল্ট"
              subheadline="যখন আপনি সঠিক ডাটা দিয়ে ফেসবুককে গাইড করবেন, তখন অ্যাড কস্ট কমবেই। নিচের রেজাল্টগুলো দেখুন—সঠিক ট্র্যাকিং থাকলে আপনার সেলস গ্রাফ ঠিক এমন হবে।"
           />

           {/* 5. FEATURE GRID (Categorized) */}
           <div className="mb-24">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                     ৩০+ শক্তিশালী ফিচার—সবকিছু এক প্যাকেজে!
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Category 1 */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <ShieldAlert className="text-red-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">স্মার্ট ফ্রড প্রটেকশন</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ফেক অর্ডার অটো ব্লকিং সিস্টেম</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ক্যান্সেল অর্ডার প্রিভেনশন</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> কাস্টমার হিস্ট্রি ও অর্ডার ট্র্যাকিং</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> একই IP এবং নম্বর ব্লক (২৪ ঘণ্টা)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ভুল/ভুয়া নাম্বার ব্লক</li>
                     </ul>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <MessageCircle className="text-green-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">OTP ও SMS মার্কেটিং</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ফ্লেক্সিবল OTP Verification</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ৩টি প্রিমিয়াম SMS Gateway</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Bulk SMS Marketing</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Order Complete SMS Notification</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Abandoned Cart Auto SMS</li>
                     </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <Layout className="text-blue-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Pixel & CAPI</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Facebook CAPI (Server Side)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Meta Andromeda Update Compatible</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> শুধু রিয়েল কাস্টমার ডাটা</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> পিক্সেল ডাটা ফিল্টার (৯৮% সঠিক)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> কাস্টম ইভেন্ট সেটাপ</li>
                     </ul>
                  </div>

                   {/* Category 4 */}
                   <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <ShoppingCart className="text-orange-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Abandoned Cart Recovery</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Abandoned Cart Tracking</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ইনকমপ্লিট অর্ডার ট্র্যাকিং</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> অটো রিকভারি SMS সিস্টেম</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> ৩৫% সেল ফিরে পাওয়ার সুবিধা</li>
                     </ul>
                  </div>

                  {/* Category 5 */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <BarChart3 className="text-purple-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Dashboard & Analytics</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Revenue, Profit, Leads Overview</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> কাস্টমার অর্ডার হিস্ট্রি রেকর্ড</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Courier Data Check Integration</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Success & Cancel Rate Analysis</li>
                     </ul>
                  </div>

                  {/* Category 6 */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                     <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <Server className="text-cyan-500" />
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Advanced Tracking</h3>
                     </div>
                     <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Server Side Tracking (100% Accurate)</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> বাটন ক্লিক ট্র্যাকিং</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> স্ক্রল ও টাইম ট্র্যাকিং</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div> Ad Blocker বাইপাস সিস্টেম</li>
                     </ul>
                  </div>
               </div>
           </div>

           {/* 6. EXCLUSIVE TECH SECTION (Authority) */}
           <div className="mb-24 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-indigo-500/30 shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
               <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
               
               <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 flex items-center justify-center gap-3">
                     <Cpu size={32} className="animate-pulse text-cyan-400" />
                     আমাদের তৈরি <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Custom Tracking Engine</span> (No GTM)
                  </h2>
                  <p className="text-indigo-200 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                     আমরা গতানুগতিক Google Tag Manager (GTM) ব্যবহার করি না। আমরা ডেভেলপ করেছি <span className="text-white font-bold">নিজস্ব ট্র্যাকিং স্ক্রিপ্ট</span>—যা ব্রাউজার ও সার্ভার থেকে ডাটা ক্যাপচার করে <span className="text-yellow-400 font-bold">Event Match Quality 7+</span> নিশ্চিত করে।
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left mb-10">
                     {/* Feature 1 */}
                     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-indigo-600/20 rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                              <Code size={28} />
                           </div>
                           <div>
                              <h4 className="font-bold text-xl mb-2 text-white">Proprietary Codebase</h4>
                              <p className="text-sm text-slate-300 leading-relaxed">
                                 সম্পূর্ণ নিজস্ব কোডিং সিস্টেমে তৈরি লাইটওয়েট স্ক্রিপ্ট। কোনো থার্ড পার্টি কন্টেইনার বা GTM লোড হয় না, তাই সাইট স্লো হয় না।
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Feature 2 */}
                     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-colors group">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-green-600/20 rounded-xl text-green-400 group-hover:text-white group-hover:bg-green-600 transition-colors">
                              <Activity size={28} />
                           </div>
                           <div>
                              <h4 className="font-bold text-xl mb-2 text-white">Direct API Connection</h4>
                              <p className="text-sm text-slate-300 leading-relaxed">
                                 সার্ভার থেকে সরাসরি Facebook API তে ডাটা পাঠানো হয়। মাঝখানে কোনো লেয়ার না থাকায় ডাটা লস হয় না।
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Feature 3 */}
                     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                              <Layers size={28} />
                           </div>
                           <div>
                              <h4 className="font-bold text-xl mb-2 text-white">Intelligent Data Parsing</h4>
                              <p className="text-sm text-slate-300 leading-relaxed">
                                 অটোমেটিক কাস্টমার ইনফো (Email, Phone, Name) এনক্রিপ্ট করে পাঠায়, যা ম্যানুয়াল সেটআপে সম্ভব না।
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Feature 4 */}
                     <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-purple-600/20 rounded-xl text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                              <Globe size={28} />
                           </div>
                           <div>
                              <h4 className="font-bold text-xl mb-2 text-white">Event Match Quality (7+) Guaranteed</h4>
                              <p className="text-sm text-slate-300 leading-relaxed">
                                 আমাদের সিস্টেম গ্যারান্টি দেয় যে আপনার ইভেন্ট ম্যাচ কোয়ালিটি স্কোর সব সময় ৭ এর উপরে থাকবে (Out of 10)।
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="bg-indigo-600/20 border border-indigo-500/30 p-4 rounded-xl inline-block">
                     <p className="font-bold text-lg md:text-xl">
                        <span className="text-slate-400 line-through mr-2">অন্যান্য টুলস খরচ: $৫০-$১০০/মাস</span>
                        <span className="text-white">→ আমাদের সিস্টেমে কোনো মান্থলি চার্জ নেই!</span>
                     </p>
                  </div>
               </div>
           </div>

           {/* 7. PRICING SECTION */}
           <div id="pricing" className="mb-24">
               <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-200 dark:border-yellow-500/30">
                     <Clock size={14} /> মাত্র ৭২ ঘণ্টা বাকি!
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                     সীমিত সময়ের অফার—আজই সিদ্ধান্ত নিন!
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                     গত সপ্তাহে ১৫০ জন ব্যবসায়ী এই সিস্টেম নিয়েছেন—আপনিও পিছিয়ে পড়বেন?
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Yearly Plan */}
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 relative">
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">১ বছরের সম্পূর্ণ সিস্টেম</h3>
                     <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">৳৫,০০০</span>
                        <span className="text-lg text-slate-400 line-through">৳৮,০০০</span>
                     </div>
                     <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg text-sm font-bold mb-6 inline-block">
                        সাশ্রয়: ৪,৫০০ টাকা
                     </div>
                     
                     <ul className="space-y-4 mb-8">
                        {[
                           "৩৫টি প্রিমিয়াম ফিচার",
                           "ফ্রি ইনস্টলেশন ও সেটাপ (মূল্য: ১,৫০০ টাকা)",
                           "১ বছর আপডেট ও সাপোর্ট",
                           "ভিডিও টিউটোরিয়াল (১০+ ভিডিও)",
                           "লাইভ চ্যাট সাপোর্ট"
                        ].map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                              <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                           </li>
                        ))}
                     </ul>
                     <Button variant="outline" className="w-full justify-center" onClick={() => handleOrderClick("Yearly Plan", "5000 BDT")}>১ বছরের প্যাকেজ অর্ডার করুন</Button>
                  </div>

                  {/* Lifetime Plan (Popular) */}
                  <div className="bg-indigo-600 rounded-3xl p-8 border-4 border-indigo-400 shadow-2xl text-white relative transform md:scale-105 z-10">
                     <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
                        ⭐ ৮৭% মানুষ এটি বেছে নিচ্ছে!
                     </div>
                     <h3 className="text-2xl font-bold mb-2">সারাজীবনের সম্পূর্ণ সিস্টেম</h3>
                     <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl font-black">৳৮,৫০০</span>
                        <span className="text-lg text-indigo-200 line-through">৳১৫,০০০</span>
                     </div>
                     <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-bold mb-6 inline-block">
                        সাশ্রয়: ৮,০০০ টাকা
                     </div>
                     
                     <ul className="space-y-4 mb-8">
                        {[
                           "৩৫টি প্রিমিয়াম ফিচার",
                           "ফ্রি ইনস্টলেশন ও সেটাপ (মূল্য: ১,৫০০ টাকা)",
                           "লাইফটাইম আপডেট—নতুন ফিচার ফ্রি!",
                           "লাইফটাইম সাপোর্ট—যতদিন ব্যবসা, ততদিন!",
                           "Priority Support—৩০ মিনিটে রেসপন্স",
                           "১ বার পেমেন্ট = চিরকাল ব্যবহার করুন!"
                        ].map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-indigo-100">
                              <Star size={18} className="text-yellow-400 shrink-0 mt-0.5" fill="currentColor" />
                              <span>{feat}</span>
                           </li>
                        ))}
                     </ul>
                     <Button variant="white" className="w-full justify-center font-bold text-indigo-900 hover:bg-indigo-50" onClick={() => handleOrderClick("Lifetime Plan", "8500 BDT")}>লাইফটাইম প্যাকেজ অর্ডার করুন</Button>
                  </div>
               </div>
           </div>

           {/* 8. GUARANTEE SECTION */}
           <div className="mb-24 text-center">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border-2 border-green-500/20 inline-block">
                   <ShieldCheck size={48} className="mx-auto text-green-500 mb-4" />
                   <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">আমাদের ১০০% গ্যারান্টি</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
                      <div className="p-4 bg-white dark:bg-black rounded-xl shadow-sm">
                         <h4 className="font-bold text-green-600 mb-1">৯৫% সমস্যা সমাধান</h4>
                         <p className="text-xs text-slate-500">যদি ৯৫% সমস্যা সমাধান না হয়, ১০০% টাকা ফেরত! (১৫ দিনের মধ্যে)</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-black rounded-xl shadow-sm">
                         <h4 className="font-bold text-green-600 mb-1">১০০% কন্ট্রোল</h4>
                         <p className="text-xs text-slate-500">সম্পূর্ণ সিস্টেম আপনার হাতে—যেকোনো সময় বন্ধ বা চালু করতে পারবেন।</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-black rounded-xl shadow-sm">
                         <h4 className="font-bold text-green-600 mb-1">Live Support</h4>
                         <p className="text-xs text-slate-500">সেটআপের সময় কোনো সমস্যা হলে আমরা লাইভ সাপোর্ট দেব।</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-black rounded-xl shadow-sm">
                         <h4 className="font-bold text-green-600 mb-1">Safe & Secure</h4>
                         <p className="text-xs text-slate-500">আপনার ডাটা ১০০% সুরক্ষিত থাকবে।</p>
                      </div>
                   </div>
                </div>
            </div>

           {/* 9. TESTIMONIALS */}
           <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">সফল ব্যবসায়ীরা কী বলছেন</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                      { name: "জাহিদ হোসেন", role: "Fashion E-commerce", quote: "১ মাসে ৮৫,০০০ টাকা সাশ্রয় হয়েছে! ফেক অর্ডার প্রায় শূন্য হয়ে গেছে।" },
                      { name: "রফিকুল ইসলাম", role: "Electronics Shop", quote: "Facebook বিজ্ঞাপন খরচ অর্ধেক হয়ে গেছে কিন্তু সেল দ্বিগুণ হয়েছে। অসাধারণ সিস্টেম!" },
                      { name: "শাহিনা আক্তার", role: "Beauty Products", quote: "Abandoned Cart Recovery দিয়ে মাসে ৪০,০০০ টাকার বাড়তি সেল পাচ্ছি। বিনিয়োগ ২ দিনেই উঠে গেছে!" }
                   ].map((item, i) => (
                      <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
                         <div className="text-4xl text-indigo-200 dark:text-indigo-900/50 absolute top-4 left-4 font-serif">"</div>
                         <p className="text-slate-600 dark:text-slate-300 mb-6 italic relative z-10 pt-4">{item.quote}</p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                               {item.name[0]}
                            </div>
                            <div>
                               <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</h4>
                               <p className="text-xs text-slate-500">{item.role}</p>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
            </div>

            {/* 10. FINAL CTA (REDESIGNED) */}
            <div className="mt-20 max-w-5xl mx-auto relative z-10 mb-20 px-4">
               {/* Animated Border Gradient */}
               <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-[2.5rem] blur opacity-30 animate-pulse"></div>
               
               <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-red-500/20">
                  {/* Background Noise & Blurs */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  <div className="relative z-10">
                     {/* Warning Badge */}
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-black uppercase tracking-widest mb-8 animate-bounce">
                        <AlertTriangle size={16} /> Urgent Warning
                     </div>

                     <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        আজ অর্ডার না করলে <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-sm">
                           প্রতিদিন ৫,০০০ টাকা লস!
                        </span>
                     </h2>
                     
                     <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-8"></div>

                     <p className="text-xl md:text-2xl text-slate-300 font-bold mb-10">
                        সিদ্ধান্ত আপনার। সময় এখনই!
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button 
                           className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-none px-12 py-5 font-black rounded-full text-xl shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
                           onClick={() => handleOrderClick("Lifetime Plan", "8500 BDT")}
                        >
                           এখনই অর্ডার কনফার্ম করুন <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                     </div>
                     
                     <p className="mt-6 text-sm text-slate-500 font-mono">
                        ⚠️ অফারটি সীমিত সময়ের জন্য প্রযোজ্য
                     </p>
                  </div>
               </div>
            </div>

            {/* FULLSCREEN VIDEO MODAL */}
            {isVideoOpen && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/95 backdrop-blur-xl animate-fade-in" onClick={() => setIsVideoOpen(false)}>
                  <button 
                     onClick={() => setIsVideoOpen(false)}
                     className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors z-50 border border-slate-700"
                  >
                     <X size={24} />
                  </button>
                  
                  <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-800 bg-black relative" onClick={(e) => e.stopPropagation()}>
                     <video 
                        src={videoUrls.fakeOrder} 
                        className="w-full h-full object-contain"
                        controls 
                        autoPlay
                     />
                  </div>
               </div>
            )}

            {/* --- CLIENT REVIEWS (Inserted Here) --- */}
            <ClientReviews 
               headline="আমরা কি সত্যিই ভালো কাজ করি? 🤔"
               subheadline="আমাদের কথায় বিশ্বাস না হলে, শুনুন তাদের মুখ থেকে যারা ইতিমধ্যে তাদের ব্যবসা ৫-১০ গুণ বাড়িয়ে ফেলেছেন!"
            />

        </div>
    </div>
  );
};

export default FakeOrderLayout;