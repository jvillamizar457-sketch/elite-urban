import React from 'react';
import { Sparkles, Compass, Flame, Users2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { STORE_INSTAGRAM } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#090909] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 red-radial-glow filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 gold-radial-glow filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D9A13B] font-bebas text-lg tracking-[0.25em] uppercase block mb-2">
            01 / ESENCIA DE MARCA
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-4">
            UNA MARCA. MUCHOS ESTILOS.
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] font-montserrat leading-relaxed">
            ELITE URBAN es el proyecto y emprendimiento de moda urbana liderado por{' '}
            <strong className="text-white font-semibold">Diego Misas</strong>. Una propuesta que reúne
            prendas y accesorios para hombres, mujeres y niños, combinando fuerza visual, actitud y
            versatilidad para que cada persona exprese su identidad en las calles.
          </p>
        </div>

        {/* 4 Brand Pillars from PDF Brand Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#121212] border border-[#242424] hover:border-[#D9A13B]/60 p-6 sm:p-7 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center mb-5 text-[#D9A13B] group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bebas text-2xl text-white tracking-wide mb-2 group-hover:text-[#F2CB57] transition-colors">
              URBANA
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Actual y conectada con las tendencias globales del streetwear, hip-hop y moda contemporánea.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#242424] hover:border-[#D9A13B]/60 p-6 sm:p-7 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center mb-5 text-[#D9A13B] group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bebas text-2xl text-white tracking-wide mb-2 group-hover:text-[#F2CB57] transition-colors">
              VERSÁTIL
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Prendas y complementos para distintas edades, gustos, géneros y momentos del día a día.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#242424] hover:border-[#D9A13B]/60 p-6 sm:p-7 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center mb-5 text-[#D90404] group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-bebas text-2xl text-white tracking-wide mb-2 group-hover:text-[#D90404] transition-colors">
              ATREVIDA
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Contrastes fuertes, colores dorados y rojos intensos, presencia y seguridad al vestir.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#242424] hover:border-[#D9A13B]/60 p-6 sm:p-7 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center mb-5 text-[#F2CB57] group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bebas text-2xl text-white tracking-wide mb-2 group-hover:text-[#F2CB57] transition-colors">
              CERCANA
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Atención personalizada vía WhatsApp, asesoría directa de talla y variedad de opciones para todos.
            </p>
          </div>
        </div>

        {/* Brand Mission Callout */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1A1310] to-[#141414] border border-[#2B2215] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[#D9A13B] text-xs font-semibold tracking-widest uppercase block mb-3">
              PROPÓSITO & FILOSOFÍA
            </span>
            <p className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-4">
              "MODA QUE SE EXPRESA. ESTILO QUE SE RECONOCE."
            </p>
            <p className="text-sm sm:text-base text-[#D1D5DB] mb-6 font-montserrat">
              Ofrecer ropa y complementos que ayuden a expresar la personalidad, combinar estilos y darle carácter a cada look.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0D0D0D] border border-[#333] px-5 py-2 text-xs font-semibold text-[#F2CB57] tracking-wider uppercase">
              <span>TU ESTILO, TU IDENTIDAD</span>
              <span className="text-neutral-500">·</span>
              <span className="text-white">{STORE_INSTAGRAM}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
