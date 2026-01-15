import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, ChevronRight, HelpCircle } from 'lucide-react';
import { TEXT } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 shadow-lg dark:shadow-2xl text-indigo-600 dark:text-indigo-500">
              <HelpCircle size={32} />
           </div>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
              {TEXT.faq.headline}
           </h2>
           <p className="text-slate-600 dark:text-slate-400 text-lg">
              সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্ন এবং উত্তর
           </p>
        </div>

        {/* --- NEW LAYOUT: GRID CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {TEXT.faq.items.map((item, idx) => (
              <div 
                 key={idx} 
                 className={`group rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                    openIndex === idx 
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.1)]' 
                    : 'bg-white dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                 }`}
                 onClick={() => toggleFAQ(idx)}
              >
                 <div className="p-6 md:p-8 flex items-start gap-4">
                    <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                       openIndex === idx ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    }`}>
                       {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                    
                    <div className="flex-grow">
                       <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${
                          openIndex === idx ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                       }`}>
                          {item.q}
                       </h3>
                       
                       <div className={`grid transition-all duration-500 ease-in-out ${
                          openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                       }`}>
                          <div className="overflow-hidden">
                             <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-indigo-500/30 pl-4">
                                {item.a}
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* Support Link */}
        <div className="mt-16 text-center">
           <p className="text-slate-500 dark:text-slate-500 mb-4 font-mono text-sm">উত্তর খুঁজে পাননি?</p>
           <button 
             onClick={() => window.open('https://wa.me/8801798205143', '_blank')}
             className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b border-slate-900 dark:border-white pb-1 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
           >
              <MessageSquare size={18} /> টিমের সাথে চ্যাট করুন <ChevronRight size={16} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;