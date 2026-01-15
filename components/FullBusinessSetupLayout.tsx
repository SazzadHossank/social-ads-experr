import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, XCircle, TrendingUp, Rocket, 
  ShieldAlert, Target, Award, Crown, 
  Briefcase, Search, Palette, Globe, Layout, Megaphone, 
  Video, GraduationCap, LifeBuoy, Activity, AlertTriangle,
  Check, X, Play, MonitorSmartphone, Database, Truck, Receipt, HelpCircle,
  Layers, Package, Zap, BarChart, ChevronDown, Plus, Minus,
  Lock, Clock, CreditCard
} from 'lucide-react';
import Button from './Button';
import ResultsSlider from './ResultsSlider';
import ClientReviews from './ClientReviews';
import { useAdmin } from '../contexts/AdminContext';

// StepCard Component Definition
interface StepCardProps {
  number: string;
  title: string;
  icon: React.ElementType;
  items: string[];
  highlight: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, icon: Icon, items, highlight }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col relative group">
       <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full -mr-px -mt-px pointer-events-none"></div>
       
       <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
             <Icon size={28} />
          </div>
          <div className="text-4xl font-black text-slate-200 dark:text-slate-800">{number}</div>
       </div>
       
       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
       
       <ul className="space-y-3 mb-6 flex-grow">
          {items.map((item, idx) => (
             <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                <span>{item}</span>
             </li>
          ))}
       </ul>
       
       <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-sm font-bold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-900/10 px-3 py-2 rounded-lg">
             {highlight}
          </p>
       </div>
    </div>
  );
};

const FullBusinessSetupLayout: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { videoUrls } = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    const message = "Hello, I am interested in the 'Ready Business Setup Package' (Offer Price: 65,000 BDT). Please provide more details.";
    window.open(`https://wa.me/8801798205143?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Website Features Data
  const websiteFeatures = [
    { title: "সুপার ফাস্ট লোডিং", desc: "১.৫ সেকেন্ডে লোড হয়, তাই কাস্টমার বাউন্স করে না।", icon: Activity, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { title: "মোবাইল ফ্রেন্ডলি UI", desc: "৯৫% কাস্টমার মোবাইল ইউজার, তাই মোবাইল ফোকাসড ডিজাইন।", icon: MonitorSmartphone, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { title: "স্টক ম্যানেজমেন্ট", desc: "কোন প্রডাক্ট কত পিস আছে, অটোমেটিক আপডেট থাকবে।", icon: Database, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { title: "কুরিয়ার ইন্টিগ্রেশন", desc: "পাঠাও/স্টিডফাস্ট এ এক ক্লিকে অর্ডার বুকিং।", icon: Truck, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-900/20" },
    { title: "ফেক অর্ডার ডিটেকশন", desc: " আইপি ও নাম্বার ট্র্যাক করে ফেক অর্ডার ধরিয়ে দেবে।", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
    { title: "অটো ইনভয়েস", desc: "অর্ডার করার সাথে সাথে কাস্টমার ইনভয়েস পাবে।", icon: Receipt, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
    { title: "Pixel & CAPI Setup", desc: "Data Tracking এর জন্য অ্যাডভান্সড সেটআপ ফ্রি।", icon: Target, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
    { title: "Life-time Support", desc: "টেকনিক্যাল যেকোনো সমস্যায় আমরা আছি।", icon: HelpCircle, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" }
  ];

  // Specific FAQs for Business Setup
  const setupFaqs = [
      { q: "আমি কি প্রোডাক্ট সিলেকশনে সাহায্য পাবো?", a: "হ্যাঁ, অবশ্যই। আমরা মার্কেট রিসার্চ করে আপনাকে ৫-৬টি উইনিং প্রোডাক্টের লিস্ট দেব এবং সোর্সিং সোর্সও বলে দেব।" },
      { q: "ওয়েবসাইট কি আমার নিজের নামে হবে?", a: "হ্যাঁ, ডোমেইন এবং হোস্টিং সম্পূর্ণ আপনার নামে কেনা হবে এবং আপনাকে ফুল এক্সেস বুঝিয়ে দেওয়া হবে।" },
      { q: "মার্কেটিং বাজেট কি প্যাকেজে অন্তর্ভুক্ত?", a: "না, প্যাকেজ প্রাইস শুধুমাত্র আমাদের সার্ভিস চার্জ। ফেসবুক অ্যাড বা মার্কেটিং বাজেট (ডলার খরচ) আপনাকে বহন করতে হবে।" },
      { q: "সেলস এর গ্যারান্টি কতটুকু?", a: "আমরা প্রুভেন মেথড ও স্ট্র্যাটেজি সেটআপ করে দেব যা আমাদের অন্যান্য ক্লায়েন্টদের জন্য কাজ করছে। আপনি আমাদের গাইডলাইন ফলো করলে সেলস আসবেই ইনশাআল্লাহ।" },
      { q: "পেমেন্ট সিস্টেম কি?", a: "৫০% অগ্রিম দিয়ে কাজ শুরু করতে হবে। কাজ শেষে বাকি ৫০% পেমেন্ট করবেন।" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans selection:bg-indigo-500/30">
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
           <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s'}} />
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

           {/* ====================================================================================
               SECTION 1: HERO (The Promise)
               ==================================================================================== */}
           <div className="text-center max-w-5xl mx-auto mb-24 relative">
              {/* Floating Elements */}
              <div className="absolute top-10 left-0 animate-float hidden lg:block" style={{ animationDuration: '4s' }}>
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 transform -rotate-12">
                    <Rocket className="text-orange-500 w-8 h-8" />
                 </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-indigo-500/30 animate-fade-in-up">
                 <Crown size={14} className="fill-white animate-pulse" />
                 Premium Business Solution
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                 অভিজ্ঞতা ০—কিন্তু প্রথম মাসেই <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                    ১০-১৫ লাখ টাকা সেল চান?
                 </span>
              </h1>

              <div className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 rounded-xl inline-block mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                 <p className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-200">
                    "রেডি-টু-সেল" কমপ্লিট বিজনেস সলিউশন <br/>
                    <span className="text-indigo-600 dark:text-indigo-400">আমরা সবকিছু সেটআপ করে দিচ্ছি—আপনি শুধু সেল করুন!</span>
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                 <Button variant="primary" size="lg" className="w-full sm:w-auto h-16 px-10 text-xl rounded-full shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform font-black bg-gradient-to-r from-indigo-600 to-purple-600 border-none" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                    অফার প্রাইস দেখুন <ArrowRight className="ml-2 w-6 h-6" />
                 </Button>
              </div>
           </div>

           {/* ====================================================================================
               SECTION 2: THE REALITY CHECK (Pain Points & Warning)
               ==================================================================================== */}
           <div className="mb-24 bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
              
              <div className="text-center mb-10">
                 <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                    <ShieldAlert className="text-red-500 animate-pulse" size={32} />
                    আপনি কি এই ভুলগুলো করতে যাচ্ছেন?
                 </h2>
                 <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    ৮৭% নতুন উদ্যোক্তা প্রথম ৬ মাসেই ৩-৫ লাখ টাকা হারান কারণ তারা নিচের ভুলগুলো করেন:
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                 {[
                    "ভুল প্রোডাক্ট সিলেক্ট করেছেন—মার্কেটে চাহিদা নেই",
                    "সস্তা ওয়েবসাইট (৫-১০ হাজারে)—কাস্টমার ট্রাস্ট করে না",
                    "ভুল মার্কেটিং স্ট্র্যাটেজি—টাকা পুড়ছে, সেল আসছে না",
                    "টেকনিক্যাল সমস্যা—পেমেন্ট গেটওয়ে, পিক্সেল কাজ করছে না",
                    "ফেক অর্ডারে দিনে ৫ হাজার টাকা লস—কোনো প্রতিরোধ নেই"
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm hover:shadow-md transition-shadow">
                       <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                       <span className="font-medium text-slate-700 dark:text-slate-200">{item}</span>
                    </div>
                 ))}
              </div>

              <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-2xl text-center border border-red-200 dark:border-red-800/50 max-w-3xl mx-auto">
                 <h3 className="font-bold text-red-700 dark:text-red-400 text-lg mb-2">💔 ফলাফল:</h3>
                 <p className="text-slate-700 dark:text-slate-300 font-medium">
                    প্রথম ৩ মাসে ৩-৫ লাখ টাকা বিনিয়োগ, কিন্তু সেল মাত্র ৫০-৮০ হাজার! <br/>
                    হতাশ হয়ে ৬ মাসে ব্যবসা বন্ধ। স্বপ্ন ভেঙে আবার চাকরি খোঁজা।
                 </p>
              </div>
           </div>

           {/* ====================================================================================
               SECTION 3: THE STRATEGY (3 Pillars of Success)
               ==================================================================================== */}
           <div className="mb-24">
              <div className="text-center mb-16">
                 <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
                    <Layers size={32} />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    আমাদের "সিক্রেট সাকসেস ফর্মুলা" <br/> <span className="text-indigo-600 dark:text-indigo-500">৩টি প্রধান স্তম্ভ</span>
                 </h2>
                 <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                    কেন আমাদের ক্লায়েন্টরা ব্যর্থ হয় না? কারণ আমরা অনুমানের ওপর ভিত্তি করে ব্যবসা করি না। আমরা এই ৩টি বিষয় নিশ্চিত করি:
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Pillar 1 */}
                 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                       <Package size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">১. উইনিং প্রোডাক্ট</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       আমরা মার্কেট রিসার্চ করে এমন প্রোডাক্ট সিলেক্ট করি যার চাহিদা প্রচুর কিন্তু কম্পিটিশন কম। সঠিক প্রোডাক্ট মানেই অর্ধেক কাজ শেষ।
                    </p>
                 </div>

                 {/* Pillar 2 */}
                 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden transform md:-translate-y-4 shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                       <Globe size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">২. হাই-কনভার্টিং অ্যাসেট</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       ৫-১০ হাজার টাকার ওয়েবসাইট নয়। আমরা দিচ্ছি সুপার ফাস্ট, সাইকোলজিক্যাল সেলস ফানেল যুক্ত ওয়েবসাইট যা ভিজিটরকে কাস্টমারে রূপান্তর করে।
                    </p>
                 </div>

                 {/* Pillar 3 */}
                 <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 text-center group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                       <BarChart size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">৩. স্ট্র্যাটেজিক মার্কেটিং</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       শুধু বুস্টিং নয়। আমরা সেটআপ করি অ্যাডভান্সড ট্র্যাকিং, রিটার্গেটিং এবং অফার স্ট্র্যাটেজি—যাতে কম খরচে সর্বোচ্চ সেল আসে।
                    </p>
                 </div>
              </div>
           </div>

           {/* ====================================================================================
               SECTION 4: PROOF (Results Slider)
               ==================================================================================== */}
           <ResultsSlider 
              badgeText="Proven Results"
              headline={
                <span>
                  সঠিক মার্কেটিং স্ট্র্যাটেজি ফলো করে আপনিও প্রতি মাসে <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">৪০-৫০ লাখ টাকার প্রোডাক্ট</span> ডেলিভারি করতে পারবেন!
                </span>
              }
              subheadline="আমাদের ক্লায়েন্টরা ৫,০০০% থেকে ৬,০০০% পর্যন্ত ROI পাচ্ছেন। ৫-১০ হাজার টাকার সাধারণ ওয়েবসাইটে এই রেজাল্ট আশা করা বোকামি—নিচে প্রফেশনাল সেটআপের রিয়েল প্রুফ দেখুন।"
           />

           {/* ====================================================================================
               SECTION 5: THE ASSET (Website Features)
               ==================================================================================== */}
           <div className="mb-20">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-200 dark:border-indigo-500/30">
                     <Layout size={14} /> Included in Package
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                      আমাদের এই প্যাকেজের মধ্যে আপনি পাবেন এই ফিচার যুক্ত একটা <span className="text-indigo-600 dark:text-indigo-400">প্রিমিয়াম ওয়েবসাইট</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                      যেখান থেকে আমরা নিশ্চিত করব আপনার <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">কোটি টাকার সেল</span>
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {websiteFeatures.map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                            <item.icon size={20} />
                         </div>
                         <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                         <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
           </div>

           {/* ====================================================================================
               SECTION 6: VISUAL PROOF (Video Section)
               ==================================================================================== */}
           <div className="mb-24">
              <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
                      আমাদের টোটাল সিস্টেমটা সম্পর্কে জানতে আমাদের ভিডিওটি দেখুন
                  </h2>
              </div>
              
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800 group cursor-pointer aspect-video bg-slate-900" onClick={() => setIsVideoOpen(true)}>
                  <img src="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png" alt="Website Demo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform animate-pulse">
                          <Play size={32} className="ml-1 text-white fill-white" />
                      </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">
                      MUST WATCH
                  </div>
              </div>
           </div>

           {/* ====================================================================================
               SECTION 7: THE PROCESS (11 Steps)
               ==================================================================================== */}
           <div className="mb-24">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    🚀 বিজনেস সেটআপের পূর্ণাঙ্গ রূপরেখা (Roadmap)
                 </h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400">
                    আপনার ব্যবসার ধরণ ও প্রয়োজন অনুযায়ী আমাদের কাজের ধাপসমূহ
                 </p>
              </div>

              <div className="space-y-8">
                 {/* Step 1 & 2 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="১" 
                       title="প্রোডাক্ট ও মার্কেট রিসার্চ" 
                       icon={Search}
                       items={[
                          "১০০+ প্রোডাক্ট অ্যানালাইসিস—মার্কেটে কোনটা লাভজনক",
                          "কম্পিটিটর রিসার্চ—তারা কিভাবে সেল করছে, কোথায় দুর্বল",
                          "প্রফিট ম্যাপিং—প্রতিটি প্রোডাক্টে কত লাভ হবে",
                          "সাপ্লায়ার ফাইন্ডিং—সবচেয়ে কম দামে ভালো কোয়ালিটি",
                          "৫-৬টি উইনার প্রোডাক্ট সিলেক্ট—টার্গেট ১০-১৫ লাখ সেল"
                       ]}
                       highlight="✅ গ্যারান্টি: প্রমাণিত প্রোডাক্ট যা ইতিমধ্যে মার্কেটে চলছে!"
                    />
                    <StepCard 
                       number="২" 
                       title="ব্র্যান্ড তৈরি" 
                       icon={Palette}
                       items={[
                          "প্রফেশনাল ব্র্যান্ড নাম—যা মানুষ মনে রাখবে",
                          "প্রিমিয়াম লোগো ডিজাইন—মূল্য: ৫,০০০ টাকা (ফ্রি!)",
                          "Facebook পেজ সেটআপ—আকর্ষণীয় কভার, বায়ো, পিন পোস্ট",
                          "ব্র্যান্ড আইডেন্টিটি—রঙ, ফন্ট, স্টাইল গাইড",
                          "সোশ্যাল মিডিয়া কিট—পোস্ট ও স্টোরি টেমপ্লেট"
                       ]}
                       highlight="✅ ফলাফল: দেখামাত্রই বিশ্বাসযোগ্য ব্র্যান্ড!"
                    />
                 </div>

                 {/* Step 3 & 4 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="৩" 
                       title="সেলস-জেনারেটিং ওয়েবসাইট" 
                       icon={Globe}
                       items={[
                          "হাই-কনভার্টিং ল্যান্ডিং পেজ—৭৮% কনভার্সন রেট",
                          "৫-৬টি প্রোডাক্ট পেজ—সাইকোলজিক্যাল ডিজাইন",
                          "মোবাইল-ফার্স্ট ডিজাইন—৬৫% মোবাইল কনভার্সন",
                          "২.৫ সেকেন্ড লোডিং টাইম—স্লো সাইট = লস",
                          "ওয়ান-ক্লিক চেকআউট & OTP ভেরিফিকেশন"
                       ]}
                       highlight="✅ গ্যারান্টি: যে সাইট দেখলেই কাস্টমাররা অর্ডার করে!"
                    />
                    <StepCard 
                       number="৪" 
                       title="ফ্রড প্রটেকশন সিস্টেম" 
                       icon={Lock}
                       items={[
                          "AI ফেক অর্ডার ব্লকিং—৯৫% ফেক অর্ডার স্টপ",
                          "কাস্টমার হিস্ট্রি ট্র্যাকিং—কে রিপিট ক্যান্সেল করে",
                          "IP + নাম্বার ব্লকিং—কম্পিটিটর ও স্প্যামার বন্ধ",
                          "Delivery Success Rate ব্লক—যেখানে ডেলিভারি কম",
                          "ডুপ্লিকেট অর্ডার প্রোটেকশন"
                       ]}
                       highlight="✅ সাশ্রয়: মাসে ৫০,০০০-১,০০,০০০ টাকা বাঁচবে!"
                    />
                 </div>

                 {/* Step 5 & 6 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="৫" 
                       title="Facebook Pixel & CAPI সেটআপ" 
                       icon={Target}
                       items={[
                          "Facebook CAPI Integration—১০০% সঠিক ডাটা",
                          "পিক্সেল অপটিমাইজেশন—শুধু রিয়েল কাস্টমার ডাটা",
                          "কাস্টম ইভেন্ট সেটআপ—প্রতিটি অ্যাকশন ট্র্যাক",
                          "Meta Andromeda Compatible—নতুন Algorithm সাপোর্ট"
                       ]}
                       highlight="✅ ফলাফল: বিজ্ঞাপন খরচ ৪০% কম + ২x সেল!"
                    />
                    <StepCard 
                       number="৬" 
                       title="পেমেন্ট ও SMS সিস্টেম" 
                       icon={CreditCard}
                       items={[
                          "মাল্টিপল পেমেন্ট গেটওয়ে (bKash, Nagad, Card)",
                          "৩টি SMS Gateway—OTP + Bulk + Recovery",
                          "Abandoned Cart Recovery—৩৫% হারানো সেল ফেরত",
                          "Order Confirmation SMS—কাস্টমার সন্তুষ্টি"
                       ]}
                       highlight="✅ ফলাফল: পেমেন্ট সহজ = ৪০% বেশি সেল!"
                    />
                 </div>

                 {/* Step 7 & 8 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="৭" 
                       title="মার্কেটিং স্ট্র্যাটেজি তৈরি" 
                       icon={BarChart}
                       items={[
                          "আকর্ষণীয় অফার ডিজাইন—কোন অফারে বেশি সেল হয়",
                          "প্রাইসিং স্ট্র্যাটেজি—সাইকোলজিক্যাল প্রাইসিং",
                          "কম্বো প্যাকেজ তৈরি—Average Order Value ৬০% বেশি",
                          "সিজনাল ক্যাম্পেইন প্ল্যান—ঈদ, পূজা, নববর্ষ",
                          "Funnel ডিজাইন—Awareness → Interest → Purchase"
                       ]}
                       highlight="✅ ফলাফল: সর্বোচ্চ লাভের জন্য পারফেক্ট স্ট্র্যাটেজি!"
                    />
                    <StepCard 
                       number="৮" 
                       title="কন্টেন্ট তৈরি" 
                       icon={Video}
                       items={[
                          "আমরা আপনাকে কনটেন্ট আইডিয়া থেকে শুরু করে সবকিছু বলে দিব",
                          "আপনাকে কন্টেন্ট তৈরি করে দিতে হবে",
                          "ভিডিও/ইমেজ মেকিং গাইডলাইন",
                          "স্ক্রিপ্ট ও হুক লাইন আইডিয়া",
                          "ফাইনাল রিভিউ ও কারেকশন"
                       ]}
                       highlight="✅ ফলাফল: কন্টেন্ট নিয়ে আর চিন্তা নেই—সঠিক গাইডলাইন!"
                    />
                 </div>

                 {/* Step 9 & 10 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="৯" 
                       title="প্রথম ক্যাম্পেইন সেটআপ" 
                       icon={Megaphone}
                       items={[
                          "আমরা সকল কিছু বুঝে শুনে ক্যাম্পেইন সেটআপ করব",
                          "আমাদের অ্যাড ম্যানেজার থেকে রান করা যাবে",
                          "অথবা, আপনি চাইলে আপনার বিজনেস ম্যানেজার থেকেও রান করতে পারবেন",
                          "বাজেট এলোকেশন ও টার্গেটিং স্ট্র্যাটেজি",
                          "ক্যাম্পেইন অপ্টিমাইজেশন সাপোর্ট"
                       ]}
                       highlight="✅ ফলাফল: সঠিক সেটআপে অর্ডার আসা শুরু!"
                    />
                    <StepCard 
                       number="১০" 
                       title="হ্যান্ড-হোল্ডিং ট্রেনিং" 
                       icon={GraduationCap}
                       items={[
                          "আমাদের টিমের সাথে কিছু সেশন ও মিটিং হবে",
                          "আপনি কিভাবে কাজ করবেন তা বুঝিয়ে দেওয়া হবে",
                          "আপনার দায়িত্ব কি কি থাকবে তা ক্লিয়ার করা হবে",
                          "অর্ডার ম্যানেজমেন্ট ও কাস্টমার হ্যান্ডলিং গাইডলাইন"
                       ]}
                       highlight="✅ ফলাফল: আপনি পুরো সিস্টেম বুঝে যাবেন!"
                    />
                 </div>

                 {/* Step 11 */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <StepCard 
                       number="১১" 
                       title="৩০ দিন ডেডিকেটেড সাপোর্ট" 
                       icon={LifeBuoy}
                       items={[
                          "দৈনিক পারফরম্যান্স চেক—কী ঠিক আছে, কী না",
                          "Ad Optimization—কোন Ad বন্ধ/চালু করবেন",
                          "যেকোনো টেকনিক্যাল বা বিজনেস সমস্যার সমাধান",
                          "Weekly Review Meeting—সপ্তাহে ১ বার ১ ঘণ্টা",
                          "24/7 Emergency Support"
                       ]}
                       highlight="✅ গ্যারান্টি: প্রথম মাসে আপনি একা নন—আমরা সাথে আছি!"
                    />
                 </div>
              </div>
           </div>

           {/* ====================================================================================
               SECTION 8: COMPARISON (DIY vs US)
               ==================================================================================== */}
           <div className="mb-24 relative max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    নিজে করা vs <span className="text-indigo-600 dark:text-indigo-400">আমাদের সেটআপ</span>
                 </h2>
                 <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto">
                    পার্থক্যটা দেখুন এবং সিদ্ধান্ত নিন আপনি কোন পথে হাঁটবেন।
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                 
                 {/* The Wrong Way (Red) */}
                 <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                       <Zap size={120} className="text-red-500" />
                    </div>
                    
                    <div className="relative z-10">
                       <h3 className="text-2xl font-bold text-red-600 dark:text-red-500 mb-6 flex items-center gap-3">
                          <XCircle className="fill-current text-red-100 dark:text-red-900" size={32} />
                          সাধারণ এজেন্সি / নিজে করা
                       </h3>
                       
                       <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                             <div className="bg-red-200 dark:bg-red-900/50 p-2 rounded-full text-red-700 dark:text-red-400 shrink-0 mt-1">
                                <X size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">৫-১০ হাজার টাকার ওয়েবসাইট</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   স্লো লোডিং, দেখতে আনপ্রফেশনাল। কাস্টমার ট্রাস্ট পায় না, অর্ডার না করেই চলে যায়।
                                </p>
                             </div>
                          </li>
                          <li className="flex items-start gap-4">
                             <div className="bg-red-200 dark:bg-red-900/50 p-2 rounded-full text-red-700 dark:text-red-400 shrink-0 mt-1">
                                <X size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">ভুল প্রোডাক্ট সিলেকশন</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   মার্কেট রিসার্চ ছাড়া প্রোডাক্ট আনলে সেটা সেল হবে না। সারাদিন মার্কেটিং করলেও টাকা জলে যাবে।
                                </p>
                             </div>
                          </li>
                          <li className="flex items-start gap-4">
                             <div className="bg-red-200 dark:bg-red-900/50 p-2 rounded-full text-red-700 dark:text-red-400 shrink-0 mt-1">
                                <X size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">কনটেন্ট স্ট্র্যাটেজির অভাব</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   কোন প্রোডাক্টে ভিডিও লাগবে, কোনটায় ইমেজ—না বুঝলে ফেসবুকে অযথা ডলার নষ্ট হবে।
                                </p>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>

                 {/* The Right Way (Green/Indigo) */}
                 <div className="bg-white dark:bg-slate-900 border-2 border-indigo-500 dark:border-indigo-500 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                       RECOMMENDED
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                       <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3">
                          <CheckCircle className="fill-current text-indigo-100 dark:text-indigo-900" size={32} />
                          Social Ads Expert সেটআপ
                       </h3>
                       
                       <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                             <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-700 dark:text-green-400 shrink-0 mt-1">
                                <Check size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">হাই-কনভার্টিং প্রিমিয়াম ওয়েবসাইট</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   সুপার ফাস্ট, সাইকোলজিক্যাল ডিজাইন। কাস্টমার দেখলেই ট্রাস্ট করবে এবং অর্ডার করবে।
                                </p>
                             </div>
                          </li>
                          <li className="flex items-start gap-4">
                             <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-700 dark:text-green-400 shrink-0 mt-1">
                                <Check size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">উইনিং প্রোডাক্ট গ্যারান্টি</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   আমরা ডাটা এনালাইসিস করে এমন প্রোডাক্ট দিব যা মার্কেটে হট কেকের মতো সেল হবে।
                                </p>
                             </div>
                          </li>
                          <li className="flex items-start gap-4">
                             <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-700 dark:text-green-400 shrink-0 mt-1">
                                <Check size={16} strokeWidth={3} />
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-lg">কমপ্লিট মার্কেটিং ব্লুপ্রিন্ট</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                   কনটেন্ট থেকে অ্যাড রান—পুরো গাইডলাইন রেডি থাকবে। আপনাকে ভাবতে হবে না।
                                </p>
                             </div>
                          </li>
                       </ul>
                    </div>
                 </div>

              </div>
           </div>

           {/* ====================================================================================
               SECTION 9: PRICING (Value Stack)
               ==================================================================================== */}
           <div id="pricing" className="mb-24 relative z-10">
              <div className="bg-indigo-900/5 dark:bg-slate-900/50 rounded-[3rem] p-8 md:p-16 border border-indigo-100 dark:border-slate-800 text-center relative overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                 
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                    এক প্যাকেজে সব সল্যুশন
                 </h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                    আলাদা আলাদা সার্ভিস নিলে খরচ হতো ১.৫ লাখ টাকা। আমরা দিচ্ছি একটি বান্ডেল অফারে।
                 </p>

                 <div className="bg-white dark:bg-black rounded-3xl p-8 max-w-xl mx-auto border-2 border-indigo-500 shadow-2xl relative">
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Limited Offer</div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready Business Setup (A-Z)</h3>
                    <div className="flex items-center justify-center gap-3 mb-6">
                       <span className="text-slate-400 line-through text-lg">৳১,৩০,০০০</span>
                       <span className="text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">৳৬৫,০০০</span>
                    </div>

                    <ul className="space-y-4 text-left mb-8 px-4">
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> ৫-৬টি উইনিং প্রোডাক্ট সোর্সিং</li>
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> প্রিমিয়াম ই-কমার্স ওয়েবসাইট (লাইফটাইম)</li>
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> প্রফেশনাল লোগো ও ব্র্যান্ডিং</li>
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> ফেক অর্ডার ব্লকিং সিস্টেম</li>
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> মার্কেটিং স্ট্র্যাটেজি ও কনটেন্ট গাইড</li>
                       <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle className="text-green-500 shrink-0" /> ১ মাসের হ্যান্ড-হোল্ডিং সাপোর্ট</li>
                    </ul>

                    <Button variant="primary" size="lg" className="w-full text-lg font-bold bg-indigo-600 hover:bg-indigo-700" onClick={handleApplyClick}>
                       অর্ডার কনফার্ম করুন <ArrowRight className="ml-2" />
                    </Button>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Clock size={12} /> অফারটি সীমিত সময়ের জন্য
                        <span className="text-indigo-500 font-bold">| ৫০% পেমেন্ট অগ্রিম</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Client Reviews */}
           <div className="mb-24">
              <ClientReviews headline="সফল উদ্যোক্তাদের গল্প" subheadline="যারা আমাদের গাইডলাইন ফলো করে আজ সফল" />
           </div>

           {/* ====================================================================================
               SECTION 10: FAQ (Specific)
               ==================================================================================== */}
           <div className="mb-20 max-w-3xl mx-auto">
              <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">আপনার প্রশ্ন, আমাদের উত্তর</h2>
              </div>
              <div className="space-y-4">
                 {setupFaqs.map((item, idx) => (
                    <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
                       <button className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" onClick={() => toggleFaq(idx)}>
                          <span className="flex items-center gap-3">
                             <HelpCircle size={18} className="text-indigo-500 shrink-0" />
                             {item.q}
                          </span>
                          {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                       </button>
                       {openFaq === idx && (
                          <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2">
                             <div className="pt-2">{item.a}</div>
                          </div>
                       )}
                    </div>
                 ))}
              </div>
           </div>

        </div>

        {/* Video Modal */}
        {isVideoOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/95 backdrop-blur-xl animate-fade-in" onClick={() => setIsVideoOpen(false)}>
              <button 
                 onClick={(e) => { e.stopPropagation(); setIsVideoOpen(false); }}
                 className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors z-50 border border-slate-700"
              >
                 <X size={24} />
              </button>
              
              <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-800 bg-black relative" onClick={(e) => e.stopPropagation()}>
                 <video 
                    src={videoUrls.businessSetup} 
                    className="w-full h-full object-contain"
                    controls 
                    autoPlay
                 />
              </div>
           </div>
        )}
    </div>
  );
};

export default FullBusinessSetupLayout;