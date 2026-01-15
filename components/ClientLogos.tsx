import React from 'react';

const CLIENTS = [
  { name: "Vaivavi Fashion", url: "https://vaivavifashion.com/posadmin/ecommerce_settings/vai%20logo1747478107.png" },
  { name: "Dressiva", url: "https://dressivabd.com/_next/image?url=https%3A%2F%2Fadmin.dressclub.org%2Fpublic%2Fimages%2F1739855745_logo.png&w=96&q=75" },
  { name: "Sindabad", url: "https://m2ce.sindabad.com/media/weblogo/logo.webp" },
  { name: "Fabrilife", url: "https://fabrilife.com/img/fabrilife.svg" },
  { name: "Turaag", url: "https://cdn.shopify.com/s/files/1/0631/8397/8716/files/turaag-logo-full_white.png?v=1677657335" },
  { name: "Trendz", url: "https://www.trendzbd.com/trendz/images/Trendz-logo.png" },
  { name: "Kabuliwala", url: "https://www.kabuliwala.co/images/logos/307/Kabuliwala_Main_Logo.png" },
  { name: "Ghorer Bazar", url: "https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=500" },
  { name: "Ryans", url: "https://www.ryans.com/assets/images/ryans-logo.svg" },
  { name: "PC Builder BD", url: "https://pcbuilderbd.com/wp-content/uploads/2024/06/pcb-logo.png" },
  { name: "Gadget & Gear", url: "https://gadgetandgear.com/_next/static/media/main-logo.8743dfef.svg" },
  { name: "Gadget n Gadget", url: "https://www.gadgetngadgetbd.com/assets/images/backend/logoIcon/67370935616351731660085.png" },
  { name: "Dubai Borka", url: "https://dubaiborka.com.bd/wp-content/uploads/2023/11/logo-200x44-1.png" },
  { name: "SK Borka Bazar", url: "https://skborkabazar.com/images/website/17669891992054252156.png" },
  { name: "Akaar", url: "https://software.akaarserver.xyz/uploads/logo/W2XTjGw3UFr4unqKDbYqz431yVGz0tCf5alIVzDz.png" },
  { name: "Masculine", url: "https://masculine.com.bd/cdn/shop/files/cropped-Group-22_120x_917d589b-77b4-4d75-9376-6cbe24f3c66f_80x.png?v=1652438635" },
  { name: "Shelai", url: "https://shelai.com.bd/public/uploads/all/DrP34sITSYhphUGNOoT2LwuAjfLYpwXZJb40yuFC.webp" }
];

const ClientLogos: React.FC = () => {
  // Split clients into two rows
  const midPoint = Math.ceil(CLIENTS.length / 2);
  const firstRow = CLIENTS.slice(0, midPoint);
  const secondRow = CLIENTS.slice(midPoint);

  return (
    <section className="py-12 relative border-t border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          তারাও একদিন আপনার মতো এই সমস্যায় ছিল...
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-8">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Right to Left (Standard) */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center">
          {/* Set A */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {firstRow.map((client, idx) => (
              <div key={`r1-l1-${idx}`} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={client.url} 
                  alt={client.name}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            ))}
          </div>
          {/* Set B (Duplicate) */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {firstRow.map((client, idx) => (
              <div key={`r1-l2-${idx}`} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={client.url} 
                  alt={client.name}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right (Reverse) */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] items-center">
          {/* Set A */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {secondRow.map((client, idx) => (
              <div key={`r2-l1-${idx}`} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={client.url} 
                  alt={client.name}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            ))}
          </div>
          {/* Set B (Duplicate) */}
          <div className="flex items-center gap-16 px-8 min-w-max">
            {secondRow.map((client, idx) => (
              <div key={`r2-l2-${idx}`} className="group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={client.url} 
                  alt={client.name}
                  className="h-10 w-auto object-contain brightness-0 dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;