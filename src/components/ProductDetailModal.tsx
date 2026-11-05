import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Truck, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';
import { formatCOP, STORE_PHONE_NUMBER } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `¡Hola ELITE URBAN! Quiero consultar la disponibilidad del siguiente producto:\n\n• Producto: *${product.name}*\n• Talla: ${selectedSize}\n• Cantidad: ${quantity}\n• Precio: ${formatCOP(product.price * quantity)}\n\n¿Tienen disponibilidad para despacho inmediato? ¡Gracias!`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-6 sm:py-12">
        <div 
          onClick={(e) => e.stopPropagation()}
          className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-[#121212] border border-[#2E2E2E] shadow-2xl relative text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-[#1A1A1A] hover:bg-[#262626] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Showcase */}
            <div className="relative bg-[#0A0A0A] aspect-square flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#222222]">
              <span className="absolute inset-0 flex items-center justify-center font-bebas text-9xl font-black text-stroke-subtle opacity-30 select-none pointer-events-none">
                {product.bgOutlineWord}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                  {product.badge === 'DESCUENTO' ? (
                    <span className="bg-[#D90404] text-white font-bebas text-base px-3 py-1 shadow-md">
                      -{product.discountPercentage}% OFF
                    </span>
                  ) : (
                    <span className="bg-white text-black font-bebas text-base px-3 py-1 shadow-md font-bold">
                      {product.badge}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Product Details & Purchase Form */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#D9A13B] font-semibold tracking-widest uppercase block mb-2">
                  {product.categoryLabel}
                </span>

                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-3">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-bebas text-3xl sm:text-4xl text-[#F2CB57] tabular-nums font-bold">
                    {formatCOP(product.price)}
                  </span>
                  {product.previousPrice && (
                    <span className="text-sm text-[#6B7280] line-through tabular-nums">
                      {formatCOP(product.previousPrice)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6 font-montserrat">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-2 uppercase font-medium">
                    <span>Selecciona tu talla:</span>
                    <span className="text-white font-semibold">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-10 h-10 px-3 flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'bg-[#1C1C1C] text-[#9CA3AF] border border-[#2E2E2E] hover:border-[#D9A13B] hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-xs text-[#9CA3AF] uppercase font-medium">Cantidad:</span>
                  <div className="flex items-center border border-[#333333] bg-[#0E0E0E]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-[#9CA3AF] hover:text-white"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-semibold tabular-nums text-white">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#9CA3AF] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-[#222222]">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full py-3.5 px-4 font-bebas text-xl tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#D90404] hover:bg-[#B70303] text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>¡AÑADIDO AL CARRITO!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>AÑADIR AL CARRITO</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-4 bg-transparent border border-[#333333] hover:border-[#22C55E] text-[#22C55E] font-bebas text-lg tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>CONSULTAR POR WHATSAPP</span>
                </button>

                <div className="flex items-center justify-around text-[11px] text-[#9CA3AF] pt-2">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#D9A13B]" />
                    Envíos a toda Colombia
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9A13B]" />
                    Prendas 100% garantizadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
