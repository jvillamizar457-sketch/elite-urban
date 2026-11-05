import React from 'react';

interface BrandLogoProps {
  variant?: 'navbar' | 'hero' | 'footer' | 'badge';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'navbar', className = '' }) => {
  if (variant === 'badge' || variant === 'hero') {
    return (
      <div className={`relative flex flex-col items-center justify-center ${className}`}>
        <div className="relative w-full max-w-[460px] aspect-square rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="/assets/brand/elite_urban_first_logo_circular.png"
            alt="ELITE URBAN - Logotipo Oficial Circular"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(217,161,59,0.35)] select-none hover:scale-105 transition-transform duration-500 rounded-full"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <a href="#" className={`flex items-center gap-3 select-none ${className}`}>
        <img
          src="/assets/brand/elite_urban_first_logo_circular.png"
          alt="ELITE URBAN"
          className="w-14 h-14 object-contain rounded-full border border-[#D9A13B]/60 filter drop-shadow-[0_0_15px_rgba(217,161,59,0.4)]"
        />
        <div className="flex items-baseline tracking-wider">
          <span className="font-bebas text-3xl text-white font-bold">
            0ELITE
          </span>
          <span className="font-bebas text-3xl text-[#D90404] font-bold ml-1.5">
            URBAN
          </span>
        </div>
      </a>
    );
  }

  // Navbar default: circular emblem + wordmark
  return (
    <a href="#" className={`group flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/assets/brand/elite_urban_first_logo_circular.png"
        alt="ELITE URBAN Logo Circular"
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-full border border-[#D9A13B]/70 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_12px_rgba(217,161,59,0.45)]"
      />
      <div className="flex items-baseline tracking-wider">
        <span className="font-bebas text-2xl sm:text-3xl text-white font-black group-hover:text-[#F2CB57] transition-colors">
          0ELITE
        </span>
        <span className="font-bebas text-2xl sm:text-3xl text-[#D90404] font-black ml-1 group-hover:text-[#FF3838] transition-colors">
          URBAN
        </span>
      </div>
    </a>
  );
};
