import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 active:scale-95 overflow-hidden group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // High contrast, solid colors as requested
  const variants = {
    primary: "bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 hover:opacity-90 border border-indigo-400/20",
    secondary: "bg-slate-800 text-white border border-slate-700 shadow-md hover:bg-slate-700",
    outline: "bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-500",
    white: "bg-white text-slate-900 shadow-xl border border-slate-100 hover:bg-slate-50",
    gradient: "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] text-white shadow-xl shadow-purple-500/30 animate-shine" 
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {/* Shine/Glare effect for primary/gradient */}
      {(variant === 'primary' || variant === 'gradient') && (
         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
      )}
      
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </button>
  );
};

export default Button;