import React from 'react';

const ITEMS = [
  '0ELITE URBAN',
  'TU ESTILO, TUS REGLAS',
  'ENVÍOS A TODA COLOMBIA',
  'NUEVOS LANZAMIENTOS',
  'MODA Y ACCESORIOS URBANOS',
  'CALIDAD & EXCLUSIVIDAD',
  'ROPA PARA HOMBRES, MUJERES Y NIÑOS',
  '@0ELITE_URBAN',
];

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#121212] border-y border-[#262626] overflow-hidden py-2 select-none relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* First repetition */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-bebas tracking-widest text-[#E5E7EB]">
          {ITEMS.map((item, idx) => (
            <React.Fragment key={`rep1-${idx}`}>
              <span className="hover:text-[#F2CB57] transition-colors">{item}</span>
              <span className="text-[#D9A13B] text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
        {/* Second repetition for infinite seamless loop */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm font-bebas tracking-widest text-[#E5E7EB] pl-6 sm:pl-8">
          {ITEMS.map((item, idx) => (
            <React.Fragment key={`rep2-${idx}`}>
              <span className="hover:text-[#F2CB57] transition-colors">{item}</span>
              <span className="text-[#D9A13B] text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
