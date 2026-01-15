import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TEXT } from '../constants';
import Button from './Button';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSecretClick = () => {
    window.open('https://new.socialadsexpert.com/#/f/xkrt5icb4', '_blank');
  };

  // Helper to handle navigation scroll or redirect
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // If it's a hash link (e.g. /#services)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      
      if (location.pathname === '/') {
        // If we are already on home page, scroll smoothly
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash manually without reload
          window.history.pushState(null, '', `#${id}`);
        }
      } else {
        // If we are not on home page, let the Link component handle the navigation to '/'
        // The App.tsx useEffect will handle the scrolling based on the hash
      }
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-slate-200 dark:border-slate-800/50 shadow-lg shadow-indigo-500/5'
          : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300 border-2 border-indigo-500/30">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8chKP7z-vOIOw4x0ToRCVGI0GKDcRc8Japg&s" 
                alt="Social Ads Expert Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Social Ads
              </span>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.15em] uppercase">
                Expert
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {TEXT.nav.items.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2">
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-2 overflow-hidden">
                        {TEXT.solution.items.map((service, sIdx) => (
                           <Link 
                             key={sIdx}
                             to={`/service/${service.slug}`}
                             className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors"
                           >
                             {service.title}
                           </Link>
                        ))}
                        
                        {/* Custom Addition: Success Stories Link in Dropdown */}
                        <div className="my-1 border-t border-slate-100 dark:border-slate-800"></div>
                        <Link 
                             to="/success-stories"
                             className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                        >
                             <Sparkles size={14} />
                             সাকসেস স্টোরি
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Standard Link handling
              return (
                <Link
                  key={index}
                  to={item.href === '/' ? '/' : item.href.replace('/#', '#')} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button with Secret Link - STATIC GRADIENT (No Animation) */}
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleSecretClick}
              className="!bg-gradient-to-r !from-red-600 !via-yellow-500 !to-red-600 !text-white !border-none shadow-lg shadow-red-500/30 hover:shadow-red-500/50 font-black tracking-wide"
            >
              {TEXT.nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300 origin-top overflow-hidden overflow-y-auto ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {TEXT.nav.items.map((item, index) => {
            if (item.type === 'dropdown') {
               return (
                  <div key={index} className="w-full text-center">
                    <div className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.label}</div>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-4">
                       {TEXT.solution.items.map((service, sIdx) => (
                           <Link 
                             key={sIdx}
                             to={`/service/${service.slug}`}
                             className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                             onClick={() => setIsMobileMenuOpen(false)}
                           >
                             {service.title}
                           </Link>
                        ))}
                        {/* Custom Addition: Success Stories Link in Mobile Dropdown */}
                        <Link 
                             to="/success-stories"
                             className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 mt-2 flex items-center justify-center gap-2"
                             onClick={() => setIsMobileMenuOpen(false)}
                        >
                             <Sparkles size={14} />
                             সাকসেস স্টোরি
                        </Link>
                    </div>
                  </div>
               )
            }
            return (
              <Link
                key={index}
                to={item.href === '/' ? '/' : item.href.replace('/#', '#')}
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 block cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
          <Button 
            variant="primary" 
            className="w-full max-w-xs mt-4 !bg-gradient-to-r !from-red-600 !via-yellow-500 !to-red-600 !text-white !border-none shadow-lg shadow-red-500/30 font-bold" 
            onClick={handleSecretClick}
          >
            {TEXT.nav.cta}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;