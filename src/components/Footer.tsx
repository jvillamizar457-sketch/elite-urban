import React from 'react';
import { BrandLogo } from './BrandLogo';
import { STORE_INSTAGRAM, STORE_PHONE_NUMBER, STORE_PHONE_DISPLAY } from '../data/products';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (cat: string) => {
    onSelectCategory(cat);
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1C1C1C] text-[#9CA3AF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="navbar" />
            <p className="text-sm text-[#888888] leading-relaxed max-w-sm font-montserrat">
              Emprendimiento de <strong className="text-white">Diego Misas</strong>. Moda urbana con carácter, fuerza visual y exclusividad. Ropa, calzado y accesorios para quienes visten con actitud.
            </p>
            <div className="text-xs text-[#D9A13B] font-semibold tracking-wider uppercase">
              TU ESTILO, TUS REGLAS · TU ESTILO, TU IDENTIDAD
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('¡Hola ELITE URBAN! Me comunico desde la tienda virtual para información y pedidos.')}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Oficial ELITE URBAN"
                className="w-10 h-10 rounded-none bg-[#141414] border border-[#262626] hover:border-[#22C55E] flex items-center justify-center text-white hover:text-[#22C55E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram ELITE URBAN"
                className="w-10 h-10 rounded-none bg-[#141414] border border-[#262626] hover:border-[#D90404] flex items-center justify-center text-white hover:text-[#D90404] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-montserrat">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-3">
              CATEGORÍAS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('hombre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Moda Hombre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mujer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Moda Mujer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ninos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Colección Niños
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('zapatos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sneakers & Zapatos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('accesorios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gorras & Accesorios
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Info & Payments */}
          <div className="lg:col-span-4 space-y-3 font-montserrat">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-3">
              PAGOS & ENVÍOS COLOMBIA
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Recibimos transferencias Bancolombia, Nequi, Daviplata y disponemos de servicio de contra entrega en ciudades principales.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-neutral-300">
              <span className="bg-[#141414] border border-[#262626] px-2.5 py-1">BANCOLOMBIA</span>
              <span className="bg-[#141414] border border-[#262626] px-2.5 py-1 text-[#F2CB57]">NEQUI</span>
              <span className="bg-[#141414] border border-[#262626] px-2.5 py-1 text-[#D90404]">DAVIPLATA</span>
              <span className="bg-[#141414] border border-[#262626] px-2.5 py-1">CONTRAENTREGA</span>
            </div>
            <div className="text-xs text-[#9CA3AF] pt-2 flex flex-col gap-1">
              <div>
                Canal oficial de Instagram:{' '}
                <span className="text-white font-medium">{STORE_INSTAGRAM}</span>
              </div>
              <div>
                Atención WhatsApp Oficial:{' '}
                <a
                  href={`https://wa.me/${STORE_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#22C55E] hover:underline font-semibold"
                >
                  {STORE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <div>
            © {currentYear} <strong>ELITE URBAN</strong>. Todos los derechos reservados. Marca creada por Diego Misas.
          </div>
          <div className="flex items-center gap-1">
            <span>Streetwear Colombiano hecho con</span>
            <span className="text-[#D90404]">✦</span>
            <span>para destacar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
