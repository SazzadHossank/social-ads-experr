import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Target, Users, Award, TrendingUp, 
  Lightbulb, Globe, Heart, ShieldCheck, Rocket, 
  Briefcase, CheckCircle, ArrowRight, Star, Quote,
  Facebook, Linkedin, Instagram, Plus, Minus
} from 'lucide-react';
import Button from './Button';
import { TEXT } from '../constants';

const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Safe handling of the long URL
  const CEO_IMG_URL = "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/481301873_530591250058284_1455799100426456261_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGIoNh-EkT2KPFnVNaNvlrPTEn8W4uSVQVMSfxbi5JVBdm3e_Sty3V8xH2_C3Vau11K3Eax8NWGTIgj4LO_s6d4&_nc_ohc=isPNtN5_zRgQ7kNvwHr5Udj&_nc_oc=AdnQq5jh48PbYEnRqg63wnSP524D7g6F7_02K37CQ5FsyRvLTRSJmZ_5DOOwMuGSnIw&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=073yCuLLDChGJtaQRj80CQ&oh=00_AfpiJs7RhAdBDuhrrxsKxRV71FA-eXcdc11h6jLfb3yaUA&oe=6969F00F";

  const stats = [
    { label: "সফল প্রজেক্ট", value: "৫০০+", sub: "কমপ্লিট", icon: CheckCircle, color: "text-green-500", border: "border-green-500/20" },
    { label: "হ্যাপি ক্লায়েন্ট", value: "১২০+", sub: "অ্যাক্টিভ", icon: Users, color: "text-blue-500", border: "border-blue-500/20" },
    { label: "অ্যাড স্পেন্ড", value: "$১.৫M+", sub: "ম্যানেজড", icon: TrendingUp, color: "text-purple-500", border: "border-purple-500/20" },
    { label: "ইন্ডাস্ট্রি এক্সপেরিয়েন্স", value: "৮+ বছর", sub: "টানা", icon: Award, color: "text-orange-500", border: "border-orange-500/20" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors group">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-sm">
               <ArrowLeft size={14} />
            </div>
            <span className="font-medium text-sm">হোমে ফিরে যান</span>
        </Link>

        {/* 1. CINEMATIC HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-24 relative">
           <div className="absolute top-10 left-10 hidden lg:block animate-float">
              <div className="p-3 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-800 rotate-[-10deg]">
                 <Rocket className="text-orange-500" size={32} />
              </div>
           </div>
           <div className="absolute bottom-10 right-10 hidden lg:block animate-float" style={{animationDelay: '1.5s'}}>
              <div className="p-3 bg-white dark:bg-slate-900 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-800 rotate-[10deg]">
                 <Star className="text-yellow-500" size={32} fill="currentColor" />
              </div>
           </div>

           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-slate-200 dark:border-slate-700 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              EST. 2017
           </div>
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              আমরা ডিজিটাল দুনিয়ায় <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                 আপনার গ্রোথ পার্টনার
              </span>
           </h1>
           <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Social Ads Expert কোনো সাধারণ এজেন্সি নয়। আমরা ডাটা, ক্রিয়েটিভিটি এবং টেকনোলজির সমন্বয়ে আপনার ব্র্যান্ডকে নেক্সট লেভেলে নিয়ে যাওয়ার কারিগর।
           </p>
        </div>

        {/* 2. CEO PROFILE SECTION (The Centerpiece) */}
        <div className="mb-32 relative">
           <div className="absolute inset-0 bg-gradient-to-b from-slate-200/50 to-transparent dark:from-indigo-900/10 dark:to-transparent rounded-[3rem] -z-10 blur-3xl"></div>
           
           <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                 
                 {/* CEO Image Side */}
                 <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600 mix-blend-color opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                    <img 
                       src={CEO_IMG_URL} 
                       alt="Sheikh Hasan - CEO" 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-20"></div>
                    <div className="absolute bottom-8 left-8 z-30 text-white">
                        <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded mb-2 inline-block">FOUNDER & CEO</div>
                        <h3 className="text-4xl font-black mb-1">Sheikh Hasan</h3>
                        <p className="text-indigo-200 font-medium tracking-wide">Digital Marketing Strategist</p>
                    </div>
                 </div>

                 {/* CEO Content Side */}
                 <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative z-10">
                    <Quote className="text-indigo-500/20 absolute top-10 right-10" size={120} />
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                       "আমি বিশ্বাস করি, মার্কেটিং মানে শুধু প্রোডাক্ট বিক্রি করা নয়। মার্কেটিং মানে হলো <span className="text-indigo-600 dark:text-indigo-400">মানুষের সমস্যার সমাধান</span> করা।"
                    </h2>
                    
                    <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
                       <p>
                          ২০১৭ সালে যখন যাত্রা শুরু করি, তখন দেখতাম অনেক উদ্যোক্তা সঠিক গাইডলাইনের অভাবে এবং টেকনিক্যাল নলেজ না থাকার কারণে ব্যবসায় লস করছেন। কেউ কেউ শুধু 'বুস্টিং' কে মার্কেটিং মনে করছেন।
                       </p>
                       <p>
                          আমার লক্ষ্য ছিল একটাই—বাংলাদেশের ই-কমার্স ইকোসিস্টেমে একটি <strong className="text-slate-900 dark:text-white">Data-Driven Culture</strong> তৈরি করা। আজ দীর্ঘ ৮ বছর পর, ৫০০+ সফল উদ্যোক্তা তৈরি করতে পেরে আমি গর্বিত। আমরা আপনার ব্যবসার শুধু সার্ভিস প্রোভাইডার নই, আমরা আপনার গ্রোথ পার্টনার।
                       </p>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center border-t border-slate-200 dark:border-slate-800 pt-8">
                       <div className="flex gap-4">
                          {[
                             { icon: Facebook, href: "#" },
                             { icon: Linkedin, href: "#" },
                             { icon: Instagram, href: "#" }
                          ].map((social, i) => (
                             <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all duration-300">
                                <social.icon size={18} />
                             </a>
                          ))}
                       </div>
                       <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                       <div className="font-mono text-slate-400 text-sm">
                          sheikhhasan749@gmail.com
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

        {/* 3. BENTO GRID - MISSION, VISION & VALUES */}
        <div className="mb-32">
           <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">আমাদের দর্শন (Our Philosophy)</h2>
              <p className="text-slate-600 dark:text-slate-400">যে নীতিগুলোর ওপর ভিত্তি করে আমরা কাজ করি</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Mission Card - Large */}
              <div className="md:col-span-2 bg-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                       <Target size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">আমাদের মিশন</h3>
                    <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
                       বাংলাদেশের ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের (SME) জন্য ডিজিটাল মার্কেটিংকে সহজ, সাশ্রয়ী এবং লাভজনক করা। আমরা চাই প্রতিটি উদ্যোক্তা টেকনোলজি ব্যবহার করে গ্লোবাল মানের ব্র্যান্ড তৈরি করুক এবং দেশের অর্থনীতিতে অবদান রাখুক।
                    </p>
                 </div>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-50"></div>
                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                       <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">আমাদের ভিশন</h3>
                    <p className="text-slate-400 leading-relaxed">
                       আগামী ৫ বছরের মধ্যে ১০,০০০+ সফল অনলাইন উদ্যোক্তা তৈরি করা এবং একটি টেকসই ও ডাটা-নির্ভর ই-কমার্স ইকোসিস্টেম গড়ে তোলা।
                    </p>
                 </div>
              </div>

              {/* Value 1 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                 <ShieldCheck className="text-green-500 mb-4" size={32} />
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">স্বচ্ছতা (Transparency)</h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">কোনো লুকোচুরি নয়। প্রতিটি পয়সার হিসাব এবং রিয়েল ডাটা ক্লায়েন্টের সামনে তুলে ধরি।</p>
              </div>

              {/* Value 2 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                 <TrendingUp className="text-blue-500 mb-4" size={32} />
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">রেজাল্ট ওরিয়েন্টেড</h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">লাইক বা কমেন্ট নয়, আমাদের মূল ফোকাস থাকে সেলস এবং ROI (Return on Investment) এর দিকে।</p>
              </div>

              {/* Value 3 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors">
                 <Lightbulb className="text-yellow-500 mb-4" size={32} />
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">ক্রমাগত ইনোভেশন</h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">অ্যালগরিদম পরিবর্তনের সাথে সাথে আমরাও আমাদের স্ট্র্যাটেজি প্রতিনিয়ত আপডেট করি।</p>
              </div>

           </div>
        </div>

        {/* 4. LIVE STATS COUNTER */}
        <div className="mb-32">
           <div className="bg-slate-100 dark:bg-slate-900/50 rounded-[2rem] p-10 border border-slate-200 dark:border-slate-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {stats.map((stat, idx) => (
                    <div key={idx} className={`text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border ${stat.border}`}>
                       <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                          <stat.icon size={28} />
                       </div>
                       <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                       <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                       <p className="text-xs text-indigo-500 mt-1">{stat.sub}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 5. JOURNEY TIMELINE */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">আমাদের যাত্রাপথ</h2>
              <p className="text-slate-600 dark:text-slate-400">ছোট্ট একটি উদ্যোগ থেকে আজকের সোশ্যাল অ্যাডস এক্সপার্ট</p>
           </div>

           <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-1/2 space-y-12">
              {[
                 { year: "২০১৭", title: "যাত্রার শুরু", desc: "মাত্র ২ জন মেম্বার নিয়ে এবং একটি ছোট অফিস রুমে আমাদের যাত্রা শুরু হয়।" },
                 { year: "২০১৮", title: "টিমের ভিত্তিপ্রস্তর", desc: "প্রথম ১০ জন ডেডিকেটেড মেম্বার নিয়ে কোর টিম গঠন এবং স্থানীয় মার্কেটে শক্ত অবস্থান তৈরি।" },
                 { year: "২০১৯", title: "সার্ভিস সম্প্রসারণ", desc: "শুধু ফেসবুক অ্যাডের পাশাপাশি ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট সার্ভিস চালু করা হয়।" },
                 { year: "২০২০", title: "প্যানডেমিক সাপোর্ট", desc: "করোনাকালীন সময়ে ৫০+ অফলাইন বিজনেসকে অনলাইনে রূপান্তর করে তাদের টিকিয়ে রাখা হয়।" },
                 { year: "২০২১", title: "১০০ ক্লায়েন্ট মাইলফলক", desc: "আমাদের সার্ভিসের কোয়ালিটির কারণে অর্গানিক্যালি আমরা ১০০+ হ্যাপি ক্লায়েন্ট তৈরি করি।" },
                 { year: "২০২২", title: "ডাটা-ড্রিভেন যুগ", desc: "iOS আপডেটের চ্যালেঞ্জ মোকাবেলায় অ্যাডভান্সড ট্র্যাকিং (CAPI) ও সার্ভার সাইড সল্যুশন চালু।" },
                 { year: "২০২৩", title: "অটোমেশন ইন্টিগ্রেশন", desc: "ফেক অর্ডার রোধ এবং ইনভেন্টরি ম্যানেজমেন্টের জন্য নিজস্ব অটোমেশন টুলস ব্যবহার শুরু।" },
                 { year: "২০২৪", title: "টেকনোলজি লিডারশিপ", desc: "নিজস্ব সফটওয়্যার ইকোসিস্টেম তৈরির মাধ্যমে ইন্ডাস্ট্রি লিডার হিসেবে অবস্থান সুদৃঢ়করণ।" },
                 { year: "২০২৫", title: "গ্লোবাল এক্সপ্যানশন", desc: "দেশের গণ্ডি পেরিয়ে আন্তর্জাতিক মার্কেটে সার্ভিস প্রদান এবং ৫০০+ সফল ব্র্যান্ড তৈরির লক্ষ্য।" },
                 { year: "২০২৬", title: "মিশন ২০২৬", desc: "আগামী ১০,০০০+ সফল উদ্যোক্তা তৈরি এবং একটি টেকসই ডিজিটাল ইকোসিস্টেম গড়ার ভিশন।" }
              ].map((item, idx) => (
                 <div key={idx} className="relative pl-8 md:pl-0">
                    {/* Dot */}
                    <div className="absolute top-0 -left-[9px] w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950"></div>
                    
                    <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                       <div className="hidden md:block w-5/12"></div>
                       <div className="md:w-5/12">
                          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500 transition-colors">
                             <span className="text-indigo-600 font-black text-2xl mb-2 block">{item.year}</span>
                             <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                             <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                          </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* 6. FAQ Section (Accordion) */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">সচরাচর জিজ্ঞাসা</h2>
            <p className="text-slate-600 dark:text-slate-400">আপনার মনে জাগা কিছু প্রশ্নের উত্তর</p>
          </div>
          <div className="space-y-4">
            {TEXT.faq.items.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-slate-900 dark:text-white pr-4">{item.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${openFaq === idx ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                     {openFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2">
                     {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CTA SECTION */}
        <div id="contact" className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-slate-800">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-600/20 blur-[100px] rounded-full animate-pulse-slow"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                 আপনার বিজনেসের দায়িত্ব <br/> আমাদের হাতে দিন
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed">
                 আপনার আইডিয়া, আমাদের এক্সিকিউশন। আসুন একসাথে কাজ করি এবং আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাই।
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto h-16 px-12 text-xl rounded-full bg-white text-indigo-900 hover:bg-indigo-50 border-none font-black shadow-xl"
                    onClick={() => window.open('https://wa.me/8801798205143', '_blank')}
                 >
                    সরাসরি কথা বলুন <ArrowRight className="ml-2 w-6 h-6" />
                 </Button>
                 <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto h-16 px-12 text-xl rounded-full border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                    আমাদের সার্ভিস দেখুন
                 </Button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;