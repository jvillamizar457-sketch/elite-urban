import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_PHONE_NUMBER } from '../data/products';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      '¡Hola! Me comunico desde la tienda online de ELITE URBAN. Quisiera recibir asesoría personalizada sobre productos, tallas y envíos.'
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Atención por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-[#141414] border border-[#262626] text-white text-xs px-3 py-1.5 shadow-xl whitespace-nowrap">
          Asesoría oficial <span className="text-[#22C55E] font-semibold">WhatsApp 304 263 7183</span>
        </div>
      </div>

      <button
        onClick={handleClick}
        aria-label="Chatear por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform group-hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-[#22C55E] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </button>
    </aside>
  );
};
