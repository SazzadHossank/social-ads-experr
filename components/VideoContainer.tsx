import React, { useState } from 'react';
import { TrendingUp, Users, Volume2, X, Play } from 'lucide-react';
import { TEXT } from '../constants';
import { useAdmin } from '../contexts/AdminContext';

const VideoContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Change here: access videoUrls object
  const { videoUrls } = useAdmin();
  const currentVideo = videoUrls.hero;

  return (
    <>
      <div 
        className="relative group perspective-1000 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        
        {/* Background Ambient Glow for Video */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />

        {/* 3D Glass Container */}
        <div 
          className="relative rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1"
        >
          
          {/* Video Element - HTML5 Video with Custom Height (600px on desktop) */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-slate-950 overflow-hidden rounded-t-2xl">
            <div className="absolute inset-0">
               <video
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                 src={currentVideo}
                 poster="https://new.socialadsexpert.com/image/Untitled%20design%20%2814%29.png"
                 autoPlay
                 loop
                 muted
                 playsInline
               />
            </div>

            {/* Overlay Grid on Video for Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

            {/* Live Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md shadow-lg animate-pulse">
               <div className="w-2 h-2 bg-white rounded-full animate-ping" />
               Live Preview
            </div>

            {/* Sound Button (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
               <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-indigo-500/30 rounded-full animate-ping"></div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl">
                     <Volume2 className="text-white fill-white" size={32} />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 text-white text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/10">
                      Click to Unmute
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Info Bar inside Glass */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-100/90 to-white/90 dark:from-slate-900/90 dark:to-slate-800/90 border-t border-slate-200 dark:border-slate-700/50 flex justify-between items-center relative z-10">
             <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-slate-600 dark:text-indigo-300">SYSTEM STATUS: OPTIMAL</span>
             </div>
             <div className="flex gap-2">
                <span className="h-1 w-8 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                <span className="h-1 w-4 rounded-full bg-slate-300 dark:bg-slate-700"></span>
             </div>
          </div>
        </div>

        {/* Floating Pills - Animated Elements */}
        
        {/* Pill 1: ROI */}
        <div className="absolute -top-6 -right-6 lg:-right-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 dark:border-indigo-500/30 p-4 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/50 animate-float" style={{ animationDelay: '0s' }}>
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400">
                 <TrendingUp size={20} />
              </div>
              <div>
                 <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{TEXT.video_overlay.stat_1}</p>
                 <p className="text-lg font-bold text-slate-800 dark:text-white">{TEXT.video_overlay.stat_value_1}</p>
              </div>
           </div>
        </div>

        {/* Pill 2: Active Users */}
        <div className="absolute -bottom-8 -left-6 lg:-left-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 dark:border-purple-500/30 p-4 rounded-xl shadow-xl shadow-black/10 dark:shadow-black/50 animate-float" style={{ animationDelay: '2s' }}>
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                 <Users size={20} />
              </div>
              <div>
                 <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{TEXT.video_overlay.stat_2}</p>
                 <p className="text-lg font-bold text-slate-800 dark:text-white">{TEXT.video_overlay.stat_value_2}</p>
              </div>
           </div>
        </div>

      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/95 backdrop-blur-xl animate-fade-in" onClick={() => setIsOpen(false)}>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors z-50 border border-slate-700 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
          </button>
          
          <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-800 bg-black relative" onClick={(e) => e.stopPropagation()}>
             <video 
                src={currentVideo} 
                className="w-full h-full object-contain"
                controls 
                autoPlay
             />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoContainer;