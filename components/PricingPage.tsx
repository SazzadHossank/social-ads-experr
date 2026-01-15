import React, { useEffect } from 'react';
import { 
  Check, Star, ArrowRight, ShieldCheck, Zap, Crown, 
  Rocket, Server, Globe, Layout, Handshake, Briefcase, 
  DollarSign, TrendingUp, CheckCircle, Clock 
} from 'lucide-react';
import Button from './Button';

const PricingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = (pkgName: string, price: string) => {
    const message = `Hello, I am interested in the '${pkgName}' package (Price: ${price}) from the Pricing Page.`;
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-6 border border-green-200 dark:border-green-500/30">
             <DollarSign size={14} className="fill-current" /> Affordable Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            স্বচ্ছ এবং সাশ্রয়ী <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              প্রাইসিং প্ল্যান
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            আপনার ব্যবসার ধরণ অনুযায়ী সেরা প্যাকেজটি বেছে নিন। কোন গোপন চার্জ নেই।
          </p>
        </div>

        {/* ==========================================
            SECTION 1: FACEBOOK MARKETING (2 Packages)
           ========================================== */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                 <MegaphoneIcon />
              </div>
              <div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">ফেসবুক মার্কেটিং সল্যুশন</h2>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">সেলস এবং ROI ফোকাসড ক্যাম্পেইন ম্যানেজমেন্ট</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Plan 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
                 <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
                       CLIENT LED
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Priority Execution</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">আপনার স্ট্র্যাটেজি + আমাদের এক্সিকিউশন</p>
                 </div>
                 
                 <div className="mb-6 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">১৪৫ টাকা</span>
                        <span className="text-sm font-bold text-slate-500">/ ডলার</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-1 flex items-center gap-1"><Check size={12}/> কোনো সার্ভিস চার্জ নেই</p>
                 </div>

                 <ul className="space-y-3 mb-8">
                    {[
                       "ফ্ল্যাক্সিবল বাজেট (Start from $10)",
                       "লস হওয়ার আগেই ক্যাম্পেইন স্টপ সুবিধা",
                       "প্রফেশনাল অ্যাড রান ও মনিটরিং",
                       "অডিয়েন্স টার্গেটিং সেটআপ",
                       "৩ দিন পরপর পারফরম্যান্স রিপোর্ট"
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                          <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" /> {item}
                       </li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full justify-center" onClick={() => handleOrderClick("FB Marketing: Priority Execution", "145 BDT/Dollar")}>প্যাকেজটি নিন</Button>
              </div>

              {/* Plan 2 */}
              <div className="bg-slate-900 dark:bg-black rounded-3xl p-8 border-2 border-indigo-600 relative overflow-hidden transform md:-translate-y-4 shadow-2xl">
                 <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">RECOMMENDED</div>
                 <div className="mb-6 relative z-10">
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 rounded-md text-xs font-bold text-indigo-300 mb-4 uppercase tracking-wider">
                       AGENCY LED
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Growth Partner</h3>
                    <p className="text-indigo-200 text-sm">বিজনেসের A-to-Z সব দায়িত্ব আমাদের</p>
                 </div>
                 
                 <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/10 relative z-10">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">৫,০০০ টাকা</span>
                        <span className="text-sm font-bold text-slate-400">/ মাস</span>
                    </div>
                    <p className="text-xs text-indigo-300 font-bold mt-1">+ ১৪৫ টাকা ডলার রেট</p>
                 </div>

                 <ul className="space-y-3 mb-8 relative z-10">
                    {[
                       "Winning Product & Offer Research",
                       "Competitor Budget & Strategy Spy",
                       "ফ্রি ল্যান্ডিং পেজ ডিজাইন (Bonus)",
                       "Advanced CPA Reduction Strategy",
                       "Business Scaling Consultation",
                       "A/B Testing & Scaling"
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                          <Star size={16} className="text-yellow-400 shrink-0 mt-0.5" fill="currentColor" /> {item}
                       </li>
                    ))}
                 </ul>
                 <Button variant="primary" className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 border-none relative z-10" onClick={() => handleOrderClick("FB Marketing: Premium Growth", "5000 Monthly + 145 Rate")}>গ্রোথ পার্টনার হোন</Button>
              </div>
           </div>
        </div>

        {/* ==========================================
            SECTION 2: E-COMMERCE WEBSITE (UPDATED AS REQUESTED)
           ========================================== */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                 <GlobeIcon />
              </div>
              <div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">আমাদের ই-কমার্স ওয়েবসাইট <br/> প্যাকেজগুলো দেখুন</h2>
              </div>
           </div>
           
           <div className="mb-10 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/30 text-center">
              <p className="text-lg text-indigo-800 dark:text-indigo-200 font-medium">
                 প্রতিটি প্যাকেজেই থাকছে <span className="font-bold text-red-500">ফেক অর্ডার ফিল্টারিং</span> এবং অ্যাড কস্ট কমানোর জন্য <span className="font-bold text-green-600">সার্ভার সাইড ট্র্যাকিং</span> সল্যুশন।
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              
              {/* Package 1: New Entrepreneur */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 transition-all h-full">
                 <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">STARTER</div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">নতুন উদ্যোক্তা</h3>
                    <p className="text-xs text-slate-500">ছোট পরিসরে শুরু করার জন্য</p>
                 </div>
                 <div className="mb-6">
                    <span className="text-sm text-slate-400 line-through">৳২৯,০০০</span>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">৳১৯,৯০০</div>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)",
                       "সুপার ফাস্ট লোডিং (১.৫ সেকেন্ড)",
                       "ফেক অর্ডার & ফ্রড চেকার",
                       "ইনকমপ্লিট অর্ডার রিকভারি",
                       "১-ক্লিক কুরিয়ার এন্ট্রি",
                       "সার্ভার সাইড ট্র্যাকিং",
                       "১ মাস ফ্রি সাপোর্ট"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"><Check size={14} className="text-green-500 mt-1 shrink-0"/> {f}</li>
                    ))}
                 </ul>
                 <Button variant="outline" size="sm" className="w-full justify-center" onClick={() => handleOrderClick("Web: New Entrepreneur", "19,900 BDT")}>অর্ডার করুন</Button>
              </div>

              {/* Package 2: Business Growth */}
              <div className="bg-indigo-600 p-6 rounded-2xl border-2 border-indigo-400 shadow-2xl relative transform xl:-translate-y-2 z-10 flex flex-col h-full text-white">
                 <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">
                    BEST SELLING
                 </div>
                 <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-lg text-xs font-bold text-white mb-2">GROWTH</div>
                    <h3 className="text-lg font-bold text-white">বিজনেস গ্রোথ</h3>
                    <p className="text-xs text-indigo-200">সেলস বৃদ্ধির জন্য সেরা চয়েস</p>
                 </div>
                 <div className="mb-6">
                    <span className="text-sm text-indigo-200 line-through">৳৪৫,০০০</span>
                    <div className="text-3xl font-black text-white">৳৩০,০০০</div>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)",
                       "ল্যান্ডিং পেজ বিল্ডার",
                       "পিক্সেল ও CAPI সেটআপ (Advanced)",
                       "স্টক ম্যানেজমেন্ট & অটো ইনভয়েস",
                       "অ্যামাউন্ট অ্যাডজাস্টমেন্ট",
                       "৪১+ প্রয়োজনীয় কি-ফিচার",
                       "৩ মাস প্রায়োরিটি সাপোর্ট"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-indigo-100"><Check size={14} className="text-yellow-400 mt-1 shrink-0"/> {f}</li>
                    ))}
                 </ul>
                 <Button variant="white" size="sm" className="w-full justify-center font-bold text-indigo-900" onClick={() => handleOrderClick("Web: Business Growth", "30,000 BDT")}>অর্ডার করুন</Button>
              </div>

              {/* Package 3: Brand Ecommerce */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 transition-all h-full">
                 <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-xs font-bold text-purple-600 dark:text-purple-400 mb-2">PREMIUM</div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">ব্র্যান্ড ই-কমার্স</h3>
                    <p className="text-xs text-slate-500">বড় পরিসরের অটোমেশন</p>
                 </div>
                 <div className="mb-6">
                    <span className="text-sm text-slate-400 line-through">৳৬০,০০০</span>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">৳৪৫,০০০</div>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "বিজনেস গ্রোথ এর সব ফিচার",
                       "মাল্টি-ভেন্ডর সিস্টেম অপশন",
                       "অ্যাডভান্সড রিপোর্টিং & অ্যানালিটিক্স",
                       "ডায়নামিক অফার ম্যানেজমেন্ট",
                       "৪১+ প্রিমিয়াম কি-ফিচার",
                       "৬ মাস VIP সাপোর্ট"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"><Check size={14} className="text-green-500 mt-1 shrink-0"/> {f}</li>
                    ))}
                 </ul>
                 <Button variant="outline" size="sm" className="w-full justify-center border-purple-500 text-purple-600 dark:text-purple-400" onClick={() => handleOrderClick("Web: Brand Ecommerce", "45,000 BDT")}>অর্ডার করুন</Button>
              </div>

              {/* Package 4: Custom Solution */}
              <div className="bg-slate-900 dark:bg-black p-6 rounded-2xl border border-slate-700 dark:border-slate-800 flex flex-col hover:border-indigo-500 transition-all h-full relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10">
                    <div className="mb-4">
                       <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 mb-2">ENTERPRISE</div>
                       <h3 className="text-lg font-bold text-white">কাস্টম রিকোয়ারমেন্ট</h3>
                       <p className="text-xs text-slate-400">স্পেশাল ফিচারের জন্য</p>
                    </div>
                    <div className="mb-6">
                       <div className="text-2xl font-black text-white">আলোচনা সাপেক্ষে</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                       {[
                          "React/Next.js কাস্টম কোডিং", 
                          "ডেডিকেটেড সার্ভার সেটআপ", 
                          "মাল্টি-ভেন্ডর সিস্টেম", 
                          "ERP ইন্টিগ্রেশন", 
                          "হাই-ট্রাফিক ম্যানেজমেন্ট",
                          "লাইফটাইম সাপোর্ট"
                       ].map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300"><Handshake size={14} className="text-indigo-500 mt-1 shrink-0"/> {f}</li>
                       ))}
                    </ul>
                    <Button variant="secondary" size="sm" className="w-full justify-center" onClick={() => handleOrderClick("Web: Custom Solution", "Discuss")}>কথা বলুন</Button>
                 </div>
              </div>

           </div>
        </div>

        {/* ==========================================
            SECTION 3: LANDING PAGE (3 Packages - UPDATED FROM SERVICE PAGE)
           ========================================== */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                 <LayoutIcon />
              </div>
              <div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">ল্যান্ডিং পেজ ডিজাইন</h2>
                 <p className="text-slate-500 dark:text-slate-400 text-sm">সিঙ্গেল প্রোডাক্ট সেল করার সেরা মাধ্যম</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
              {/* Basic (6500) */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">বেসিক প্যাকেজ</h3>
                 <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">৳৬,৫০০</span>
                    <span className="text-sm text-slate-400 line-through">৳১৫,০০০</span>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "১টি প্রফেশনাল ডিজাইন", 
                       "ফ্রি .com ডোমেইন ও হোস্টিং (আপনার নামে)", 
                       "সার্ভার সাইড ট্র্যাকিং (Pixel/CAPI)",
                       "ফেক অর্ডার ডিটেকশন সিস্টেম", 
                       "ইনকমপ্লিট অর্ডার রিকভারি",
                       "স্টক ম্যানেজমেন্ট সিস্টেম",
                       "অটো ইনভয়েস জেনারেটর",
                       "৩ মাস ফ্রি সাপোর্ট"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"><CheckCircle size={14} className="text-green-500 mt-1 shrink-0"/> {f}</li>
                    ))}
                 </ul>
                 
                 <div className="bg-slate-50 dark:bg-slate-950/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800 mb-6 text-xs text-slate-500 text-center">
                    <p>অতিরিক্ত ডিজাইন চার্জ:</p>
                    <p className="font-bold">পুরাতন ক্লায়েন্ট: ৳১,৯৫০ | নতুন: ৳২,৫০০</p>
                 </div>

                 <Button variant="outline" className="w-full justify-center mt-auto" onClick={() => handleOrderClick("LP: Basic", "6,500 BDT")}>অর্ডার করুন</Button>
              </div>

              {/* Standard (Best Value - 12500) */}
              <div className="bg-indigo-600 p-8 rounded-3xl border-4 border-indigo-400 shadow-2xl relative transform scale-105 z-10 text-white h-full flex flex-col">
                 <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                 <h3 className="text-xl font-bold mb-2">স্ট্যান্ডার্ড প্যাকেজ</h3>
                 <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black">৳১২,৫০০</span>
                    <span className="text-sm text-indigo-200 line-through">৳২৫,০০০</span>
                 </div>
                 <div className="bg-indigo-700/50 p-3 rounded-lg border border-indigo-500 mb-6 text-sm">
                    <p className="flex items-center gap-2 font-bold text-yellow-300">
                       <Zap size={14} fill="currentColor" /> ফেসবুক অ্যাডের খরচ বাঁচাতে রেকমেন্ডেড
                    </p>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "বেসিক প্যাকেজের সব ফিচার", 
                       "৩টি প্রফেশনাল ডিজাইন (ফানেল স্ট্র্যাটেজি)", 
                       "অ্যাডভান্সড অ্যানালিটিক্স সিস্টেম", 
                       "SMS নোটিফিকেশন সিস্টেম ইন্টিগ্রেশন",
                       "Facebook Ads কস্টিং কমানোর স্ট্রাকচার",
                       "৬ মাস ফ্রি সাপোর্ট", 
                       "A/B টেস্টিং সুবিধা"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-indigo-100"><Star size={14} className="text-yellow-400 mt-1 shrink-0" fill="currentColor"/> {f}</li>
                    ))}
                 </ul>
                 <Button variant="white" className="w-full justify-center text-indigo-900 font-bold hover:bg-indigo-50" onClick={() => handleOrderClick("LP: Standard", "12,500 BDT")}>অর্ডার করুন</Button>
              </div>

              {/* Premium (18500) */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">প্রিমিয়াম প্যাকেজ</h3>
                 <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black text-purple-600 dark:text-purple-400">৳১৮,৫০০</span>
                    <span className="text-sm text-slate-400 line-through">৳৪০,০০০</span>
                 </div>
                 <ul className="space-y-3 mb-8 flex-grow">
                    {[
                       "স্ট্যান্ডার্ড প্যাকেজের সব ফিচার", 
                       "৪টি প্রফেশনাল ডিজাইন (হাই-কনভার্টিং)", 
                       "CRM সফটওয়্যার ইন্টিগ্রেশন", 
                       "SMS Automation & Marketing", 
                       "অ্যাডভান্সড বিজনেস অটোমেশন ফিচার",
                       "১ বছর প্রায়োরিটি সাপোর্ট"
                    ].map((f, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"><CheckCircle size={14} className="text-purple-500 mt-1 shrink-0"/> {f}</li>
                    ))}
                 </ul>
                 <Button variant="outline" className="w-full justify-center mt-auto hover:border-purple-500 hover:text-purple-500" onClick={() => handleOrderClick("LP: Premium", "18,500 BDT")}>অর্ডার করুন</Button>
              </div>
           </div>
        </div>

        {/* ==========================================
            SECTION 4: BUSINESS SETUP (Grand Finale)
           ========================================== */}
        <div className="mb-24">
           <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border-4 border-indigo-600/30">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 text-center mb-10">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-500/30">
                    <Crown size={14} className="fill-current" /> Ultimate Solution
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                    রেডি বিজনেস সেটআপ প্যাকেজ (A-Z)
                 </h2>
                 <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                    আমরা আপনার জন্য একটি কমপ্লিট লাভজনক ব্যবসার ভিত তৈরি করে দিব। প্রোডাক্ট সোর্সিং থেকে ওয়েবসাইট—সব রেডি থাকবে। আপনি শুধু সেল করবেন।
                 </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                 {/* Features */}
                 <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                    <ul className="space-y-4">
                       {[
                          "প্রিমিয়াম ই-কমার্স ওয়েবসাইট (লাইফটাইম)",
                          "৫-৬টি উইনিং প্রোডাক্ট রিসার্চ (গ্যারান্টিড)",
                          "মার্কেটিং স্ট্র্যাটেজি & কনটেন্ট গাইডলাইন",
                          "বিজনেস হ্যাকস & সিক্রেট ব্লুপ্রিন্ট",
                          "লাইফটাইম টেকনিক্যাল সাপোর্ট",
                          "কম্পিটিটর বিট করার মাস্টারপ্ল্যান"
                       ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-lg text-slate-200">
                             <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-400">
                                <Check size={16} strokeWidth={3} />
                             </div>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>

                 {/* Pricing Card */}
                 <div className="text-center bg-indigo-600 rounded-3xl p-8 border-4 border-indigo-400 shadow-2xl relative">
                    <div className="text-indigo-200 text-lg line-through font-bold mb-2">১,৩০,০০০ টাকা</div>
                    <div className="text-5xl md:text-6xl font-black text-white mb-4">৬৫,০০০ টাকা</div>
                    <p className="text-indigo-100 text-sm mb-8 font-medium bg-indigo-800/50 inline-block px-4 py-1 rounded-full">
                       সীমিত সময়ের জন্য ৫০% ছাড়!
                    </p>
                    <Button 
                       variant="white" 
                       size="lg" 
                       className="w-full text-xl font-black text-indigo-900 hover:bg-white hover:scale-105 shadow-xl"
                       onClick={() => handleOrderClick("Full Business Setup (A-Z)", "65,000 BDT")}
                    >
                       বিজনেসের দায়িত্ব আমাদের দিন <Rocket className="ml-2" />
                    </Button>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

// Simple Icons for headers
const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
)
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
)
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
)

export default PricingPage;