import React from 'react';
import { 
  Activity, MonitorSmartphone, Database, Truck, 
  ShieldAlert, Receipt, Target, HelpCircle, Crown
} from 'lucide-react';

const EcommerceFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>

      {/* Special Guarantee Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
         <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-shine rounded-2xl p-6 md:p-8 text-center shadow-2xl transform hover:-translate-y-1 transition-transform border-4 border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm animate-pulse">
                    <Crown className="text-yellow-300" size={32} fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight">
                       বাংলাদেশে একমাত্র আমরাই দিচ্ছি <span className="text-yellow-300 underline decoration-wavy decoration-white/30">১০০% সেলস গ্যারান্টি</span> ওয়েবসাইট!
                    </h3>
                    <p className="text-indigo-100 text-sm mt-1 font-medium">
                        শুধু ওয়েবসাইট নয়, আমরা দিচ্ছি বিজনেসের পূর্ণাঙ্গ সমাধান।
                    </p>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
               আপনার ই-কমার্স বিজনেসের জন্য কমপ্লিট সল্যুশন
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
               বেসিক ওয়েবসাইট নয়—সেলস মেশিন তৈরি করুন। আমাদের প্রতিটি ফিচার আপনার সেলস বাড়াতে সাহায্য করবে।
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
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                      <item.icon size={28} />
                   </div>
                   <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
             ))}
         </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;