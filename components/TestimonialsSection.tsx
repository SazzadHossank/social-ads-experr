import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Play, ChevronLeft, ChevronRight, TrendingUp, ShieldCheck, BarChart3, MessageCircle } from 'lucide-react';
import { TEXT } from '../constants';
import Button from './Button';
import { useAdmin } from '../contexts/AdminContext';

const TestimonialsSection: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<{type: 'image' | 'video', url: string} | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { videoUrls } = useAdmin();

  // Data Sources
  const screenshots = TEXT.testimonials.success_screenshots;
  // Use dynamic video instead of static list
  const featuredVideoUrl = videoUrls.testimonial;
  const featuredVideoImage = TEXT.testimonials.list[0].image;

  // Slider Logic
  const totalSlides = screenshots.length;
  
  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);

  const handleConsultation = () => {
    window.open('https://wa.me/8801798205143?text=I%20want%20to%20know%20more%20about%20your%20campaign%20results', '_blank');
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            PART 1: IMAGE SLIDER SECTION
           ========================================== */}
        <div className="mb-24">
            {/* Header Text */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-mono text-xs uppercase tracking-widest mb-4 border border-green-500/30 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 animate-pulse">
                    <ShieldCheck size={14} /> Verified Results
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    আমাদের ক্লায়েন্টের <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Facebook Sales</span> <br/>
                    ও ক্যাম্পেইনের রেজাল্টগুলো দেখুন
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
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* ==========================================
            PART 2: FEATURED VIDEO SECTION
           ========================================== */}
        <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl relative">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Video Player Side */}
                    <div className="relative group cursor-pointer bg-black h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800" onClick={() => setActiveMedia({type: 'video', url: featuredVideoUrl})}>
                        <img 
                            src={featuredVideoImage} 
                            alt="Case Study Video" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <Play fill="white" className="text-white ml-1" size={32} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded animate-pulse">
                            LIVE RECORDING
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                                <BarChart3 size={24} />
                            </div>
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-sm">Case Study Analysis</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            দেখুন কিভাবে এই ক্লায়েন্ট <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-500">
                                ৩০০% সেলস গ্রোথ
                            </span> পেলেন?
                        </h3>

                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            ভিডিওতে বিস্তারিত আলোচনা করা হয়েছে কিভাবে আমরা স্ট্র্যাটেজি সাজিয়েছি, অ্যাড রান করেছি এবং স্কেলিং করেছি। আপনার বিজনেসের জন্যও সেইম স্ট্র্যাটেজি কাজ করবে।
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-500 shrink-0">
                                    <TrendingUp size={16} />
                                </div>
                                <span className="font-medium">সেলস ভলিউম: <strong className="text-slate-900 dark:text-white">৳৩৫ লাখ+/মাস</strong></span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0">
                                    <ShieldCheck size={16} />
                                </div>
                                <span className="font-medium">ডেলিভারি রেশিও: <strong className="text-slate-900 dark:text-white">৯৫%</strong></span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" className="font-bold shadow-lg bg-indigo-600 text-white" onClick={handleConsultation}>
                                বিস্তারিত কথা বলুন <MessageCircle className="ml-2 w-4 h-4" />
                            </Button>
                            <button 
                                onClick={() => setActiveMedia({type: 'video', url: featuredVideoUrl})}
                                className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                ভিডিওটি দেখুন
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      </div>

      {/* Fullscreen Media Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fade-in" onClick={() => setActiveMedia(null)}>
           <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors p-2 bg-white/10 rounded-full border border-white/20">
              <X size={24} />
           </button>
           
           {activeMedia.type === 'video' ? (
              <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black relative">
                 <video 
                    src={activeMedia.url} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain" 
                    onClick={(e) => e.stopPropagation()} 
                 />
              </div>
           ) : (
              <img 
                src={activeMedia.url} 
                alt="Proof" 
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-800" 
                onClick={(e) => e.stopPropagation()} 
              />
           )}
        </div>
      )}

    </section>
  );
};

export default TestimonialsSection;