import React, { useState } from 'react';
import { Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { formatCOP, STORE_PHONE_NUMBER } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleConsultWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `¡Hola ELITE URBAN! Quiero consultar la disponibilidad del siguiente producto:\n\n• Producto: *${product.name}*\n• Talla: ${selectedSize}\n• Precio: ${formatCOP(product.price)}\n\n¿Tienen disponibilidad para despacho inmediato? ¡Gracias!`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <article className="group bg-[#121212] border border-[#222222] hover:border-[#D9A13B]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg relative">
      {/* Top Media Area with product photo & outline graphic text */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full aspect-[4/3] sm:aspect-square bg-[#0E0E0E] overflow-hidden flex items-center justify-center cursor-pointer select-none"
      >
        {/* Large background streetwear outline typographic watermark */}
        <span className="absolute inset-0 flex items-center justify-center font-bebas text-7xl sm:text-8xl md:text-9xl font-black text-stroke-subtle opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none select-none tracking-tight">
          {product.bgOutlineWord}
        </span>

        {/* Product image with smooth hover zoom */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            // Fallback gracefully to subtle styled container if needed
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
          {product.badge === 'DESCUENTO' && product.discountPercentage && (
            <span className="bg-[#D90404] text-white font-bebas text-sm sm:text-base px-2.5 py-0.5 tracking-wider shadow-md">
              -{product.discountPercentage}%
            </span>
          )}
          {product.badge === 'NUEVO' && (
            <span className="bg-white text-[#0D0D0D] font-bebas text-sm sm:text-base px-2.5 py-0.5 tracking-wider shadow-md font-bold">
              NUEVO
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-[#121212]">
        <div>
          {/* Category kicker */}
          <div className="text-[11px] font-semibold text-[#8E8E8E] tracking-wider uppercase mb-1.5">
            {product.categoryLabel}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#F2CB57] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#9CA3AF] line-clamp-2 mt-1 mb-3 leading-relaxed">
            {product.description}
          </p>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-bebas text-2xl text-[#F2CB57] tracking-wider tabular-nums font-bold">
              {formatCOP(product.price)}
            </span>
            {product.previousPrice && (
              <span className="text-xs text-[#6B7280] line-through tabular-nums">
                {formatCOP(product.previousPrice)}
              </span>
            )}
          </div>

          {/* Size Selector */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-[11px] text-[#9CA3AF] mb-1.5 uppercase font-medium">
              <span>Talla: <span className="text-white font-semibold">{selectedSize}</span></span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-8 h-8 px-2 flex items-center justify-center text-xs font-semibold rounded-none transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black border border-white shadow-sm font-bold'
                        : 'bg-[#1A1A1A] text-[#9CA3AF] border border-[#2D2D2D] hover:border-[#D9A13B] hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dual Actions: AÑADIR & CONSULTAR */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1F1F1F]">
          <button
            type="button"
            onClick={handleAdd}
            className={`flex items-center justify-center gap-1.5 font-bebas text-lg tracking-wider py-2.5 px-3 transition-all duration-200 cursor-pointer ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D90404] hover:bg-[#B70303] text-white active:scale-95'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡LISTO!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>AÑADIR</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleConsultWhatsApp}
            title="Consultar por WhatsApp con Diego Misas"
            className="flex items-center justify-center gap-1.5 font-bebas text-lg tracking-wider py-2.5 px-3 bg-transparent text-white border border-[#2E2E2E] hover:border-[#D9A13B] hover:text-[#F2CB57] transition-all duration-200 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONSULTAR</span>
          </button>
        </div>
      </div>
    </article>
  );
};
