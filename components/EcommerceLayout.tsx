import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Play, ShieldCheck, CheckCircle, 
  ShoppingCart, Rocket, DollarSign, Target, MousePointerClick, 
  MessageCircle, X, Database, ShieldAlert, Ban, Layout, Truck, 
  Calculator, ClipboardList, Server, Layers, Receipt, MonitorSmartphone, 
  Shirt, Laptop, Utensils, Gem, Armchair, ExternalLink, Activity, 
  ChevronLeft, Star, ChevronRight, HelpCircle, Lock, CreditCard, Smartphone,
  Settings, PenTool, Globe, Zap, Code, UserX, History, Palette, Handshake,
  AlertTriangle, Crown, Sparkles, FileText, Headphones, ArrowDown, Eye, Plus, Minus,
  Globe2, Flame
} from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import ClientReviews from './ClientReviews';
import ResultsSlider from './ResultsSlider';
import { useAdmin } from '../contexts/AdminContext';

const EcommerceLayout: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { videoUrls, demoLinks } = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDiscussionClick = () => {
    const message = `Hello, I'm interested in "E-commerce Website Solution" and would like to discuss my budget and business type.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePlanClick = (planName: string) => {
    const message = `Hello, I want to select the '${planName}' plan for E-commerce Website.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
      { q: "ডোমেইন ও হোস্টিং কি ক্লায়েন্টের নামে কেনা হবে?", a: "হ্যাঁ, অবশ্যই। ডোমেইন এবং হোস্টিং সম্পূর্ণ আপনার নামে কেনা হবে এবং আপনাকে ফুল cPanel এক্সেস বুঝিয়ে দেওয়া হবে। ১ বছর পর আপনি চাইলে নিজেও রিনিউ করতে পারবেন।" },
      { q: "ওয়েবসাইট ডেলিভারি পেতে কতদিন সময় লাগবে?", a: "অর্ডার কনফার্ম করার পর সাধারণত ৩ থেকে ৪ কার্যদিবসের মধ্যে আমরা সম্পূর্ণ রেডি ওয়েবসাইট ডেলিভারি দিয়ে থাকি।" },
      { q: "ই-কমার্স ছাড়া অন্য ওয়েবসাইট তৈরি করা যাবে?", a: "জ্বী, ই-কমার্স ছাড়াও নিউজ পোর্টাল, ব্লগ, এজেন্সি, পোর্টফোলিও, হসপিটাল ম্যানেজমেন্ট সহ যেকোনো ধরনের ওয়েবসাইট আমাদের থেকে ডেভেলপ করাতে পারবেন।" },
      { q: "আপনাদের ওয়েবসাইট কতটা সিকিউর?", a: "আমরা প্রিমিয়াম ইন্টারন্যাশনাল হোস্টিং (USA/Singapore Server) এবং SSL ব্যবহার করি। এছাড়াও আমাদের সাইটে অটোমেটিক ম্যালওয়্যার স্ক্যানার থাকে, যা আপনার সাইটকে ১০০% নিরাপদ রাখে।" },
      { q: "মার্কেটিং বা বিজনেস সাপোর্ট পাওয়া যাবে?", a: "অবশ্যই! আমরা শুধু ওয়েবসাইট বানিয়ে দিই না। আপনার সেলস বাড়ানোর জন্য ফেইসবুক মার্কেটিং স্ট্র্যাটেজি এবং বিজনেস কনসালটেন্সি সাপোর্টও প্রোভাইড করি।" },
      { q: "সাইটে কোনো সমস্যা হলে সাপোর্ট পাওয়া যাবে?", a: "আমরা ১৬ ঘণ্টা কাস্টমার সাপোর্ট দিয়ে থাকি। যেকোনো টেকনিক্যাল সমস্যায় আমাদের ডেডিকেটেড টিম আপনাকে সমাধান দেবে।" }
  ];

  // Common features list based on user request to be used in all packages
  const commonFeatures = [
      { text: "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)", icon: Globe2, highlight: true },
      { text: "সুপার ফাস্ট লোডিং (১.৫ সেকেন্ড)", icon: Rocket },
      { text: "Fraud Checker & IP Ban", icon: ShieldAlert },
      { text: "Incomplete Order Recovery (10x Sales)", icon: RefreshCcwIcon }, // Icon placeholder
      { text: "1-Click Courier (Pathao/RedX/Steadfast)", icon: Truck },
      { text: "In-built Landing Page Builder", icon: Layout },
      { text: "Server Side Pixel & Footprint Tracking", icon: Target },
      { text: "Stock Management & Auto Invoice", icon: ClipboardList },
      { text: "Amount Adjust & Order Management", icon: Settings },
      { text: "৪১+ প্রয়োজনীয় কি-ফিচার", icon: Flame, color: "text-orange-500" }
  ];

  return (
      <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-indigo-500/30">
         
         {/* Global Background Elements */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
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

            {/* 1. HERO SECTION (Sales Centric) */}
            <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20 border-b border-slate-200 dark:border-slate-800/50 pb-12 md:pb-16 relative">
               
               {/* Animated Trust Elements */}
               <div className="hidden md:block absolute top-10 left-0 animate-float" style={{ animationDuration: '6s' }}>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 rotate-[-6deg]">
                     <ShoppingCart className="text-indigo-500 w-6 h-6" />
                     <span className="font-bold text-sm">Sales Optimized</span>
                  </div>
               </div>
               <div className="hidden md:block absolute top-20 right-10 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 rotate-[6deg]">
                     <Rocket className="text-orange-500 w-6 h-6" />
                     <span className="font-bold text-sm">Super Fast</span>
                  </div>
               </div>

               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up border border-indigo-100 dark:border-indigo-500/20">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  Bangladesh Market Ready
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                  Sales-Centric E-commerce <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 relative">
                     Website & Landing Page
                  </span>
               </h1>
               
               <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  আমরা শুধু ওয়েবসাইট বানাই না—আমরা মার্কেটিংও করি। তাই আমরা জানি কোন স্ট্রাকচারের ওয়েবসাইট + কোন ট্র্যাকিং + কোন কনভার্সন ফ্লো ব্যবহার করলে কম খরচে বেশি অর্ডার আসে।
               </p>

               {/* Quick Value Bullets */}
               <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {["১/২ ক্লিকে ইজি চেকআউট", "সার্ভার-সাইড ট্র্যাকিং রেডি (Pixel + CAPI)", "ফ্রড কাস্টমার কন্ট্রোল"].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-2 bg-white dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                     </div>
                  ))}
               </div>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg rounded-full animate-none" onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}>
                     <Play size={20} className="mr-2 fill-current" /> ডেমো দেখতে চাই
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 text-lg rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" onClick={handleDiscussionClick}>
                     ফ্রি অডিট রিকোয়েস্ট করুন
                  </Button>
               </div>
               <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> ডোমেইন-হোস্টিং আপনার নামে, ১ বছরের মেয়াদ, পূর্ণ নিয়ন্ত্রণ আপনার।
               </p>
            </div>

            {/* 2. VIDEO SECTION */}
            <div className="mb-24 relative">
               <div className="max-w-4xl mx-auto text-center mb-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                     ভিডিওতে দেখুন—কীভাবে আমাদের ওয়েবসাইট অর্ডার জেনারেট করে
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                     অর্ডার ফ্লো, ট্র্যাকিং সেটআপ, রিটার্গেটিং সিস্টেম—সবকিছু ১ ভিডিওতে ব্যাখ্যা।
                  </p>
               </div>

               <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-2xl bg-black aspect-video group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                  <img src="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                        <Play size={32} className="ml-1 text-white fill-white" />
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                  {["কাস্টমার কীভাবে দ্রুত অর্ডার করে", "কীভাবে রিটার্গেটিং সেটআপ কাজ করে", "কেন ওয়েবসাইটে অর্ডার ফ্লো “স্টেবল” থাকে"].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full text-indigo-600 dark:text-indigo-400 font-bold text-sm">0{idx+1}</div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* 3. SALES LOGIC (Why Website - Messenger vs Website) */}
            <div className="mb-24 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/30 blur-[100px] rounded-full"></div>

               <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                     <div className="inline-block px-4 py-1 bg-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Sales Logic</div>
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        ওয়েবসাইট মানে <br/> <span className="text-indigo-400">২৪/৭ আপনার সেলস ওপেন</span>
                     </h2>
                     <p className="text-lg text-slate-300 mb-8 leading-relaxed border-l-4 border-indigo-500 pl-6">
                        মেসেঞ্জারে রিপ্লাই দিতে দেরি হলে অনেক অর্ডার মিস হয়। ওয়েবসাইটে কাস্টমার যেকোন সময় নিজে নিজেই অর্ডার প্লেস করতে পারে—আপনি অফলাইনে থাকলেও সেলস চলতে থাকে।
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           {icon: DollarSign, text: "কম অ্যাড কস্টে বেশি রিচ"},
                           {icon: Target, text: "পাওয়ারফুল রিটার্গেটিং"},
                           {icon: MousePointerClick, text: "১–২ ক্লিক চেকআউট"},
                           {icon: MessageCircle, text: "WhatsApp ইন্টিগ্রেশন"}
                        ].map((item, idx) => (
                           <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                              <item.icon size={20} className="text-indigo-400" />
                              <span className="font-semibold text-sm">{item.text}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  {/* Comparison Card */}
                  <div className="flex-1 w-full">
                     <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 text-slate-900 dark:text-white shadow-2xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-xl font-bold mb-6 text-center">কেন Website Audience বেশি শক্তিশালী?</h3>
                        
                        <div className="space-y-4">
                           {/* Messenger Side */}
                           <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                              <div className="mt-1 bg-red-100 dark:bg-red-900/40 p-1.5 rounded-full text-red-500 shrink-0"><X size={16} strokeWidth={3} /></div>
                              <div>
                                 <h4 className="font-bold text-base text-red-600 dark:text-red-400 mb-1">শুধু মেসেজ ক্যাম্পেইন</h4>
                                 <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight">ফেক কাস্টমার ও উইন্ডো শপার বেশি। ফেসবুকে ডাটা থাকে না কে কিনল আর কে কিনল না।</p>
                              </div>
                           </div>

                           {/* Website Side */}
                           <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                              <div className="mt-1 bg-green-100 dark:bg-green-900/40 p-1.5 rounded-full text-green-600 shrink-0"><CheckCircle size={16} strokeWidth={3} /></div>
                              <div>
                                 <h4 className="font-bold text-base text-green-600 dark:text-green-400 mb-1">ওয়েবসাইট কনভার্সন অ্যাড</h4>
                                 <p className="text-sm text-slate-600 dark:text-slate-400 leading-tight">যারা অনলাইনে কেনাকাটা করতে অভ্যস্ত, ফেসবুক শুধু তাদের কাছেই অ্যাড দেখায়। <span className="font-bold">সেলস রেট ৩ গুণ বেশি।</span></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 4. RESULTS SLIDER (Proof) - Moved UP */}
            <ResultsSlider 
                badgeText="Website Performance Impact"
                headline="ভালো ওয়েবসাইট ছাড়া এমন রেজাল্ট অসম্ভব!"
                subheadline="নিচের অ্যাড রেজাল্টগুলো দেখুন—এগুলো তখনই সম্ভব হয়েছে যখন ওয়েবসাইট সুপার ফাস্ট এবং সেলস-অপ্টিমাইজড ছিল। আমরা এমন ওয়েবসাইটই বানাই যা ভিজিটরকে কাস্টমারে রূপান্তর করে।"
            />

            {/* 5. FEATURES GRID */}
            <div className="mb-24">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                     আপনার ই-কমার্স বিজনেসের জন্য কমপ্লিট সল্যুশন
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                     বেসিক ওয়েবসাইট নয়—সেলস মেশিন তৈরি করুন
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {/* Feature Cards */}
                   {[
                      { title: "সুপার ফাস্ট লোডিং", desc: "১.৫ সেকেন্ডে লোড হয়, তাই কাস্টমার বাউন্স করে না।", icon: Activity, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                      { title: "মোবাইল ফ্রেন্ডলি UI", desc: "৯৫% কাস্টমার মোবাইল ইউজার, তাই মোবাইল ফোকাসড ডিজাইন।", icon: MonitorSmartphone, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                      { title: "স্টক ম্যানেজমেন্ট", desc: "কোন প্রডাক্ট কত পিস আছে, অটোমেটিক আপডেট থাকবে।", icon: Database, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
                      { title: "কুরিয়ার ইন্টিগ্রেশন", desc: "পাঠাও/স্টিডফাস্ট এ এক ক্লিকে অর্ডার বুকিং।", icon: Truck, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-900/20" },
                      { title: "ফেক অর্ডার ডিটেকশন", desc: " আইপি ও নাম্বার ট্র্যাক করে ফেক অর্ডার ধরিয়ে দেবে।", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                      { title: "অটো ইনভয়েস", desc: "অর্ডার করার সাথে সাথে কাস্টমার ইনভয়েস পাবে।", icon: Receipt, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                      { title: "Pixel & CAPI Setup", desc: "Data Tracking এর জন্য অ্যাডভান্সড সেটআপ ফ্রি।", icon: Target, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
                      { title: "Life-time Support", desc: "টেকনিক্যাল যেকোনো সমস্যায় আমরা আছি।", icon: HelpCircle, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" }
                   ].map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                         </div>
                         <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
               </div>
            </div>

            {/* 6. GUARANTEE / USP */}
            <div className="mb-24 bg-gradient-to-r from-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-indigo-500/30">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
               <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full"></div>
               
               <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 text-center lg:text-left">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-black uppercase tracking-widest mb-6 border border-yellow-500/30 shadow-lg">
                        <Crown size={14} fill="currentColor" /> Premium Agency USP
                     </div>
                     <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        বাংলাদেশে একমাত্র আমরাই দিচ্ছি <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">১০০% সেলস গ্যারান্টি!</span>
                     </h2>
                     <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        অন্যরা শুধু ওয়েবসাইট বানিয়ে দায়িত্ব শেষ করে। আমরা শুধু ডেভেলপমেন্ট করি না, সাথে <strong className="text-white">মার্কেটিং সাপোর্টও</strong> দিয়ে থাকি। বিজনেস শুরু থেকে শেষ পর্যন্ত আমরা মেইনটেইন করতে পারব।
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                           <CheckCircle className="text-green-400" /> <span className="text-white font-bold">১ বছরের ডোমেইন-হোস্টিং ফ্রি</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                           <CheckCircle className="text-green-400" /> <span className="text-white font-bold">মার্কেটিং ও বিজনেস সাপোর্ট</span>
                        </div>
                     </div>

                     <Button variant="white" className="font-bold" onClick={() => window.open('https://wa.me/8801798205143', '_blank')}>
                        সরাসরি কথা বলুন <ArrowRight className="ml-2 w-4 h-4"/>
                     </Button>
                  </div>
                  
                  <div className="flex-1 w-full max-w-md">
                     <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 relative">
                        <div className="absolute -top-6 -right-6 bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                           ১৬ ঘণ্টা সাপোর্ট
                        </div>
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">কেন আমরা অদ্বিতীয়?</h3>
                        <ul className="space-y-4 text-slate-200">
                           <li className="flex gap-3"><Star className="text-yellow-400 shrink-0" size={20} /> ১০০% সিকিউর কোডিং স্ট্রাকচার</li>
                           <li className="flex gap-3"><Star className="text-yellow-400 shrink-0" size={20} /> ইন্টারন্যাশনাল ক্লাউড হোস্টিং</li>
                           <li className="flex gap-3"><Star className="text-yellow-400 shrink-0" size={20} /> আনলিমিটেড ব্যান্ডউইথ সুবিধা</li>
                           <li className="flex gap-3"><Star className="text-yellow-400 shrink-0" size={20} /> লাইফটাইম টেকনিক্যাল এক্সেস</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            {/* 7. LIVE WEBSITE DEMOS (NEW DYNAMIC SECTION) */}
            <div id="demo-section" className="mb-24">
               <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200 dark:border-blue-500/20">
                    <Eye size={14} /> Live Demos
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                     Live Website Examples
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                     আমাদের তৈরি করা কিছু লাইভ ওয়েবসাইট ভিজিট করে দেখুন
                  </p>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {demoLinks?.map((url, idx) => (
                    <button 
                      key={idx}
                      onClick={() => window.open(url, '_blank')}
                      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all group relative overflow-hidden"
                    >
                      {/* Gradient Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                          <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-slate-500 dark:text-slate-400 shadow-sm">
                             <Globe size={28} />
                          </div>
                          <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-base">
                             Website Demo {idx + 1}
                          </span>
                          <span className="text-xs text-slate-400 mt-2 flex items-center gap-1 bg-slate-50 dark:bg-slate-950 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                             Visit Site <ExternalLink size={10} />
                          </span>
                      </div>
                    </button>
                  ))}
               </div>
            </div>

            {/* 8. PRICING SECTION */}
            <div id="pricing" className="mb-24">
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200 dark:border-indigo-500/30">
                     <DollarSign size={14} /> Transparent Pricing
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                     আমাদের ই-কমার্স ওয়েবসাইট <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">প্যাকেজগুলো দেখুন</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                     প্রতিটি প্যাকেজেই থাকছে <span className="text-red-500 font-bold">ফেক অর্ডার ফিল্টারিং</span> এবং অ্যাড কস্ট কমানোর জন্য <span className="text-green-600 font-bold">সার্ভার সাইড ট্র্যাকিং</span> সল্যুশন।
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                  
                  {/* Package 1: New Entrepreneur */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 transition-all h-full">
                     <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 mb-3">STARTER</div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">নতুন উদ্যোক্তা</h3>
                        <p className="text-xs text-slate-500">ছোট পরিসরে শুরু করার জন্য</p>
                     </div>
                     <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">৳১৯,৯০০</span>
                        <span className="text-sm text-slate-400 line-through">৳২৯,০০০</span>
                     </div>
                     <ul className="space-y-3 mb-8 flex-grow">
                        {commonFeatures.map((item, i) => (
                           <li key={i} className={`flex items-start gap-3 text-sm ${item.highlight ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'} ${item.color || ''}`}>
                              <item.icon size={16} className={`shrink-0 mt-0.5 ${item.highlight ? 'text-green-600' : 'text-green-500'} ${item.color && item.color.replace('text-', 'text-')}`} />
                              {item.text}
                           </li>
                        ))}
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                           <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" /> ১ মাস ফ্রি সাপোর্ট
                        </li>
                     </ul>
                     <Button variant="outline" className="w-full justify-center" onClick={() => handlePlanClick("New Entrepreneur Website")}>অর্ডার করুন</Button>
                  </div>

                  {/* Package 2: Business Growth */}
                  <div className="bg-indigo-600 p-8 rounded-3xl border-2 border-indigo-400 shadow-2xl relative transform xl:-translate-y-4 z-10 flex flex-col h-full text-white">
                     <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
                        BEST SELLING
                     </div>
                     <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-white/20 rounded-lg text-xs font-bold text-white mb-3">GROWTH</div>
                        <h3 className="text-xl font-bold text-white mb-2">বিজনেস গ্রোথ</h3>
                        <p className="text-xs text-indigo-200">সেলস বৃদ্ধির জন্য সেরা চয়েস</p>
                     </div>
                     <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl font-black text-white">৳৩০,০০০</span>
                        <span className="text-sm text-indigo-200 line-through">৳৪৫,০০০</span>
                     </div>
                     <ul className="space-y-3 mb-8 flex-grow">
                        {commonFeatures.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-indigo-100">
                              <item.icon size={16} className={`shrink-0 mt-0.5 ${item.highlight ? 'text-yellow-400' : 'text-green-400'}`} />
                              <span className={item.highlight ? 'font-bold text-white' : ''}>{item.text}</span>
                           </li>
                        ))}
                        <li className="flex items-start gap-3 text-sm text-indigo-100 font-bold bg-indigo-700/50 p-2 rounded-lg border border-indigo-500">
                           <Zap size={16} className="text-yellow-400 shrink-0 mt-0.5" fill="currentColor"/> 
                           ৩ মাস প্রায়োরিটি সাপোর্ট
                        </li>
                     </ul>
                     <Button variant="white" className="w-full justify-center font-bold text-indigo-900" onClick={() => handlePlanClick("Business Growth Website")}>অর্ডার করুন</Button>
                  </div>

                  {/* Package 3: Brand Ecommerce */}
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 transition-all h-full">
                     <div className="mb-6">
                        <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-xs font-bold text-purple-600 dark:text-purple-400 mb-3">PREMIUM</div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">ব্র্যান্ড ই-কমার্স</h3>
                        <p className="text-xs text-slate-500">বড় পরিসরের অটোমেশন</p>
                     </div>
                     <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">৳৪৫,০০০</span>
                        <span className="text-sm text-slate-400 line-through">৳৬০,০০০</span>
                     </div>
                     <ul className="space-y-3 mb-8 flex-grow">
                        {commonFeatures.map((item, i) => (
                           <li key={i} className={`flex items-start gap-3 text-sm ${item.highlight ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'} ${item.color || ''}`}>
                              <item.icon size={16} className={`shrink-0 mt-0.5 ${item.highlight ? 'text-green-600' : 'text-purple-500'} ${item.color && item.color.replace('text-', 'text-')}`} />
                              {item.text}
                           </li>
                        ))}
                        <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-bold">
                           <ShieldCheck size={16} className="text-red-500 shrink-0 mt-0.5"/> 
                           মাল্টি-ভেন্ডর সিস্টেম অপশন & ৬ মাস VIP সাপোর্ট
                        </li>
                     </ul>
                     <Button variant="outline" className="w-full justify-center hover:border-purple-500 hover:text-purple-600" onClick={() => handlePlanClick("Brand Ecommerce Website")}>অর্ডার করুন</Button>
                  </div>

                  {/* Package 4: Custom Solution */}
                  <div className="bg-slate-900 dark:bg-black p-8 rounded-3xl border border-slate-700 dark:border-slate-800 flex flex-col hover:border-indigo-500 transition-all h-full relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="relative z-10">
                        <div className="mb-6">
                           <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 mb-3">ENTERPRISE</div>
                           <h3 className="text-xl font-bold text-white mb-2">কাস্টম রিকোয়ারমেন্ট</h3>
                           <p className="text-xs text-slate-400">স্পেশাল ফিচারের জন্য</p>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                           <span className="text-2xl font-black text-white">আলোচনা সাপেক্ষে</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-grow">
                           {commonFeatures.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                 <item.icon size={16} className={`shrink-0 mt-0.5 ${item.highlight ? 'text-green-400' : 'text-indigo-400'}`} />
                                 <span className={item.highlight ? 'font-bold text-white' : ''}>{item.text}</span>
                              </li>
                           ))}
                           <li className="flex items-start gap-3 text-sm text-slate-300">
                              <Handshake size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                              React/Next.js Custom Coding & Dedicated Support
                           </li>
                        </ul>
                        <Button variant="secondary" className="w-full justify-center" onClick={() => handlePlanClick("Custom Website Solution")}>কথা বলুন</Button>
                     </div>
                  </div>

               </div>
            </div>

            {/* 9. PROCESS SECTION */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        আমাদের কাজের প্রক্রিয়া (Process)
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        কীভাবে আমরা একটি প্রজেক্ট সফলভাবে সম্পন্ন করি
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 -translate-y-1/2 rounded-full"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
                        {[
                            { title: "Requirement", bn: "রিকোয়ারমেন্ট", icon: FileText },
                            { title: "Wireframe", bn: "ওয়্যারফ্রেমিং", icon: PenTool },
                            { title: "Design", bn: "ডিজাইন", icon: Palette },
                            { title: "Development", bn: "ডেভেলপমেন্ট", icon: Code },
                            { title: "Testing", bn: "টেস্টিং", icon: CheckCircle },
                            { title: "Delivery", bn: "ডেলিভারি", icon: Rocket },
                            { title: "Support", bn: "সাপোর্ট", icon: Headphones }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 shadow-lg group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <step.icon size={28} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-900">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{step.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.bn}</p>
                                {idx !== 6 && (
                                    <div className="lg:hidden mt-4 text-slate-300 dark:text-slate-700">
                                        <ArrowDown size={20} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CLIENT REVIEWS (With Custom Title for Ecommerce) --- */}
            <ClientReviews 
               headline="আমরা কি সত্যিই ভালো কাজ করি? 🤔"
               subheadline="আমাদের কথায় বিশ্বাস না হলে, শুনুন তাদের মুখ থেকে যারা ইতিমধ্যে তাদের ব্যবসা ৫-১০ গুণ বাড়িয়ে ফেলেছেন!"
            />

            {/* --- NEW SECTION: FAQ (Specific to Website Service) --- */}
            <div className="mt-24 mb-16 max-w-3xl mx-auto">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">সচরাচর জিজ্ঞাসা (FAQ)</h2>
                   <p className="text-slate-600 dark:text-slate-400">আপনার মনে জাগা কিছু প্রশ্নের উত্তর</p>
                </div>
                <div className="space-y-4">
                   {faqs.map((item, idx) => (
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

            {/* FINAL CTA */}
            <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border-4 border-indigo-600">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                     আপনার ব্যবসার ডিজিটাল দোকান <br/> <span className="text-indigo-400">আজই তৈরি করুন!</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                     দেরি করবেন না। প্রতিদিন শত শত কাস্টমার অনলাইনে খুঁজছে। আপনার ওয়েবসাইট না থাকলে তারা আপনার কম্পিটিটরের কাছে চলে যাচ্ছে।
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full sm:w-auto h-16 px-12 text-xl rounded-full bg-white text-indigo-900 hover:bg-indigo-50 border-none font-black shadow-xl"
                        onClick={() => handlePlanClick("Business Growth Website")}
                     >
                        ওয়েবসাইট তৈরি করুন
                     </Button>
                     <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full sm:w-auto h-16 px-12 text-xl rounded-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-white"
                        onClick={handleDiscussionClick}
                     >
                        ফ্রি কনসালটেশন
                     </Button>
                  </div>
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
                        src={videoUrls.ecommerce} 
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

// Helper Icon for Incomplete Order Recovery
const RefreshCcwIcon = ({size, className}: {size:number, className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
);

export default EcommerceLayout;