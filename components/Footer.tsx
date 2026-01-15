import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Linkedin, Youtube, 
  MapPin, Phone, Mail, ArrowRight, Lock
} from 'lucide-react';
import AdminDashboard from './AdminDashboard';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLink = "https://www.facebook.com/socialadsexpert/";
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-slate-900 relative overflow-hidden font-sans">
      
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
         <h1 className="text-[15vw] font-black text-white leading-none whitespace-nowrap text-center select-none">
            SOCIAL ADS
         </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-20">
           
           {/* Column 1: Brand Info */}
           <div className="space-y-6">
              <Link to="/" className="inline-block group">
                 <div className="text-2xl font-black text-white tracking-tighter group-hover:text-indigo-500 transition-colors">
                    SOCIAL ADS <span className="text-indigo-600">.</span> EXPERT
                 </div>
                 <div className="h-1 w-12 bg-indigo-600 mt-2 rounded-full"></div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed pr-4">
                 আমরা শুধু সার্ভিস দেই না, আমরা আপনার ব্যবসার গ্রোথ পার্টনার। ডাটা-ড্রিভেন স্ট্র্যাটেজি দিয়ে আপনার বিজনেসকে নেক্সট লেভেলে নিয়ে যাওয়াই আমাদের লক্ষ্য।
              </p>
              
              {/* Social Icons moved here */}
              <div className="flex gap-3 pt-2">
                  {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                     <a key={i} href={socialLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300">
                        <Icon size={18} />
                     </a>
                  ))}
              </div>
           </div>

           {/* Column 2: Quick Links */}
           <div className="lg:pl-8">
              <h4 className="text-white font-bold text-lg mb-6">কুইক লিংকস</h4>
              <ul className="space-y-3">
                 {[
                    {l: "হোম", to: "/"},
                    {l: "আমাদের সম্পর্কে", to: "/about"},
                    {l: "প্রাইসিং প্ল্যান", to: "/pricing"},
                    {l: "সাকসেস স্টোরি", to: "/success-stories"},
                    {l: "ফ্রি কনসালটেশন", to: "/#contact"},
                 ].map((link, i) => (
                    <li key={i}>
                       <Link to={link.to} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm font-medium inline-flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                          {link.l}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3: Services */}
           <div>
              <h4 className="text-white font-bold text-lg mb-6">আমাদের সার্ভিসসমূহ</h4>
              <ul className="space-y-3">
                 {[
                    {l: "Facebook Marketing", to: "/service/meta-ads"},
                    {l: "Ecommerce Website", to: "/service/ecommerce-website"},
                    {l: "Landing Page Design", to: "/service/landing-page-design"},
                    {l: "Fake Order Filter", to: "/service/fake-order-filtering"},
                    {l: "Full Business Setup", to: "/service/full-business-setup"},
                 ].map((link, i) => (
                    <li key={i}>
                       <Link to={link.to} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm font-medium inline-flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          {link.l}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 4: Contact */}
           <div>
              <h4 className="text-white font-bold text-lg mb-6">যোগাযোগ করুন</h4>
              <ul className="space-y-5">
                 <li className="flex gap-4 items-start text-slate-400 text-sm group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 group-hover:border-indigo-500 transition-colors">
                        <MapPin size={16} className="text-indigo-500" />
                    </div>
                    <span className="leading-relaxed">চন্দ্রিমা মডেল টাউন, মোহাম্মদপুর, <br/> ঢাকা-১২০৭</span>
                 </li>
                 <li className="flex gap-4 items-center text-slate-400 text-sm group">
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 group-hover:border-indigo-500 transition-colors">
                        <Phone size={16} className="text-indigo-500" />
                    </div>
                    <div className="flex flex-col">
                       <span className="font-mono text-base">01798-205143</span>
                       <span className="font-mono text-base">01935-252007</span>
                    </div>
                 </li>
                 <li className="flex gap-4 items-center text-slate-400 text-sm group">
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 group-hover:border-indigo-500 transition-colors">
                        <Mail size={16} className="text-indigo-500" />
                    </div>
                    <span className="font-mono">sheikhhasan749@gmail.com</span>
                 </li>
              </ul>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative">
           <div className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} Social Ads Expert. All rights reserved.
           </div>
           <div className="flex gap-6 text-sm font-medium text-slate-500 items-center">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <button 
                onClick={() => setShowAdmin(true)} 
                className="opacity-10 hover:opacity-100 transition-opacity p-1 text-slate-600"
                title="Admin Access"
              >
                 <Lock size={12} />
              </button>
           </div>
        </div>

      </div>

      {/* Admin Dashboard Modal */}
      {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}
    </footer>
  );
};

export default Footer;