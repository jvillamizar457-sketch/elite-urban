import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateToCategory?: (category: 'gorras' | 'todo') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigateToCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGorrasClick = () => {
    if (onNavigateToCategory) {
      onNavigateToCategory('gorras');
    }
    scrollToSection('catalogo');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center">
          <BrandLogo variant="navbar" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 font-bebas text-lg tracking-wider text-[#D1D5DB]">
          <button
            onClick={() => {
              if (onNavigateToCategory) onNavigateToCategory('todo');
              scrollToSection('catalogo');
            }}
            className="hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D90404] after:transition-all"
          >
            CATÁLOGO
          </button>
          <button
            onClick={handleGorrasClick}
            className="text-[#F2CB57] hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#F2CB57] after:transition-all flex items-center gap-1 font-semibold"
          >
            <span>GORRAS</span>
            <span className="text-[10px] bg-[#D90404] text-white px-1.5 py-0.2 rounded-none font-bold">HOT</span>
          </button>
          <button
            onClick={() => scrollToSection('ofertas')}
            className="hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D90404] after:transition-all"
          >
            OFERTAS
          </button>
          <button
            onClick={() => scrollToSection('nosotros')}
            className="hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D90404] after:transition-all"
          >
            NOSOTROS
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="hover:text-white transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D90404] after:transition-all"
          >
            CONTACTO
          </button>
        </nav>

        {/* Action zone: Cart & Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de compras"
            className="group relative flex items-center gap-2 bg-[#171717] hover:bg-[#202020] text-white border border-[#2E2E2E] hover:border-[#D9A13B]/50 px-4 py-2 rounded-md transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#F2CB57] group-hover:scale-110 transition-transform" />
            <span className="font-bebas text-base tracking-wider hidden sm:inline">CARRITO</span>
            <span className="min-w-5 h-5 flex items-center justify-center rounded-full bg-[#D90404] text-white text-xs font-bold px-1.5 shadow-sm group-hover:bg-[#FF1A1A] transition-colors">
              {cartCount}
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md bg-[#171717] border border-[#2E2E2E]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#262626] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 font-bebas text-xl tracking-wider">
            <button
              onClick={() => {
                if (onNavigateToCategory) onNavigateToCategory('todo');
                scrollToSection('catalogo');
              }}
              className="text-left text-[#E5E7EB] hover:text-[#F2CB57] py-2 border-b border-[#222]"
            >
              CATÁLOGO
            </button>
            <button
              onClick={handleGorrasClick}
              className="text-left text-[#F2CB57] hover:text-white py-2 border-b border-[#222] flex items-center justify-between"
            >
              <span>COLECCIÓN GORRAS</span>
              <span className="text-xs bg-[#D90404] text-white px-2 py-0.5 font-bold">NUEVAS</span>
            </button>
            <button
              onClick={() => scrollToSection('ofertas')}
              className="text-left text-[#E5E7EB] hover:text-[#F2CB57] py-2 border-b border-[#222]"
            >
              OFERTAS
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-left text-[#E5E7EB] hover:text-[#F2CB57] py-2 border-b border-[#222]"
            >
              NOSOTROS
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-left text-[#E5E7EB] hover:text-[#F2CB57] py-2"
            >
              CONTACTO
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
