import React from 'react';
import { Tag, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface SpecialOffersSectionProps {
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
  onQuickView: (product: Product) => void;
  onExploreAllOffers: () => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onExploreAllOffers,
}) => {
  const offerProducts = products.filter(p => p.isOffer).slice(0, 3);

  if (offerProducts.length === 0) return null;

  return (
    <section id="ofertas" className="py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#D90404] text-white font-bebas text-xs px-2.5 py-0.5 tracking-wider">
                PROMOCIONES LIMITADAS
              </span>
              <span className="text-xs text-[#D9A13B] font-semibold tracking-widest uppercase">
                OFERTAS DE TEMPORADA
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-tight">
              DROPS CON DESCUENTO
            </h2>
          </div>

          <button
            onClick={onExploreAllOffers}
            className="group flex items-center gap-2 text-sm font-bebas tracking-wider text-[#F2CB57] hover:text-white transition-colors cursor-pointer self-start md:self-end"
          >
            <span>VER TODAS LAS OFERTAS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Sale Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offerProducts.map((product) => (
            <ProductCard
              key={`offer-${product.id}`}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
