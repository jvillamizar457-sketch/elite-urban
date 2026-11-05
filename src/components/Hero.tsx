import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#0D0D0D]">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] gold-radial-glow pointer-events-none filter blur-3xl opacity-70" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] red-radial-glow pointer-events-none filter blur-3xl opacity-40" />

      {/* Subtle geometric grid background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#D9A13B] font-bebas text-lg sm:text-xl tracking-[0.2em] uppercase">
                STREETWEAR · COLOMBIA
              </span>
            </div>

            {/* Giant Title matching screenshot */}
            <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl tracking-tight leading-[0.88] font-black mb-6">
              <span className="text-white block">0ELITE</span>
              <span className="bg-gradient-to-r from-[#D90404] via-[#F53636] to-[#D90404] bg-clip-text text-transparent block">
                URBAN
              </span>
            </h1>

            {/* Slogan & Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#D1D5DB] font-montserrat max-w-xl font-normal leading-relaxed mb-8">
              <strong className="text-[#F2CB57] font-semibold">Tu estilo, tus reglas.</strong>{' '}
              Ropa, zapatos y accesorios con actitud, diseñados para destacar en cada momento.
            </p>

            {/* Main CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExplore}
                className="group inline-flex items-center justify-center gap-3 bg-[#D90404] hover:bg-[#B70303] text-white font-bebas text-xl sm:text-2xl tracking-wider px-8 py-3.5 rounded-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(217,4,4,0.35)] cursor-pointer active:translate-y-0"
              >
                <span>EXPLORAR COLECCIÓN</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#nosotros"
                className="inline-flex items-center justify-center font-bebas text-lg tracking-wider text-[#A3A3A3] hover:text-white border border-[#2E2E2E] hover:border-[#D9A13B] px-6 py-3.5 rounded-sm transition-colors"
              >
                CONOCER LA MARCA
              </a>
            </div>

            {/* Three key trust pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#222222] w-full text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#D9A13B] shrink-0" />
                <span>Envíos rápidos a toda Colombia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D9A13B] shrink-0" />
                <span>Pago contra entrega disponible</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D9A13B] shrink-0" />
                <span>Prendas & accesorios exclusivos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Emblem */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-96 md:w-[420px] lg:w-[460px] aspect-square flex items-center justify-center">
              {/* Outer decorative glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#D9A13B]/20 animate-pulse pointer-events-none scale-105" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#D90404]/20 via-[#D9A13B]/20 to-transparent blur-2xl pointer-events-none" />

              {/* The high-res medallion emblem */}
              <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                <BrandLogo variant="badge" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
