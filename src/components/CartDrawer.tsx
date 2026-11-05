import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Send, Check } from 'lucide-react';
import { CartItem } from '../types';
import { formatCOP, STORE_PHONE_NUMBER } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onExplore,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `¡Hola! Bienvenido a ELITE URBAN. Quiero realizar el siguiente pedido:\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   • Talla: ${item.selectedSize}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio individual: ${formatCOP(item.product.price)}\n`;
      if (item.quantity > 1) {
        message += `   • Subtotal: ${formatCOP(item.product.price * item.quantity)}\n`;
      }
      message += `\n`;
    });

    message += `Total del pedido: ${formatCOP(subtotal)}\n\n`;

    if (customerName.trim() || customerCity.trim() || customerAddress.trim()) {
      message += `*Datos para envío:*\n`;
      if (customerName.trim()) message += `• Nombre: ${customerName.trim()}\n`;
      if (customerCity.trim()) message += `• Ciudad: ${customerCity.trim()}\n`;
      if (customerAddress.trim()) message += `• Dirección: ${customerAddress.trim()}\n`;
      message += `\n`;
    }

    message += `Quisiera confirmar la disponibilidad y coordinar mi compra. ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${encoded}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0E0E0E] text-white border-l border-[#242424] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F2CB57]" />
              <h2 className="font-bebas text-3xl tracking-wider text-white">
                TU CARRITO
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Cerrar carrito"
              className="text-[#9CA3AF] hover:text-white p-2 hover:bg-[#1A1A1A] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#6B7280]" />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">
                  TU CARRITO ESTÁ VACÍO
                </h3>
                <p className="text-sm text-[#9CA3AF] max-w-xs mb-6">
                  Descubre las últimas prendas, accesorios y calzado de la colección urbana y viste con actitud.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExplore();
                  }}
                  className="font-bebas text-lg tracking-wider bg-[#D90404] hover:bg-[#B70303] text-white px-6 py-3 transition-colors cursor-pointer"
                >
                  EXPLORAR CATÁLOGO
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-[#141414] border border-[#222222] rounded-none hover:border-[#333333] transition-colors"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 bg-[#1A1A1A] shrink-0 overflow-hidden relative border border-[#262626]">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bebas text-lg text-white tracking-wide line-clamp-1">
                            {item.product.name}
                          </h4>
                          <div className="text-xs text-[#9CA3AF]">
                            Talla: <span className="text-white font-medium">{item.selectedSize}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Eliminar ${item.product.name}`}
                          className="text-[#6B7280] hover:text-[#D90404] transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Steppers */}
                        <div className="flex items-center border border-[#333333] bg-[#0E0E0E]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold tabular-nums text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="font-bebas text-lg text-[#F2CB57] tabular-nums font-bold">
                          {formatCOP(item.product.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Optional Customer info accordion for WhatsApp summary */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(!showCheckoutForm)}
                    className="text-xs text-[#D9A13B] hover:underline flex items-center gap-1 font-medium"
                  >
                    {showCheckoutForm ? '− Ocultar datos de entrega' : '+ Agregar datos de envío para WhatsApp (Opcional)'}
                  </button>

                  {showCheckoutForm && (
                    <div className="mt-3 p-3 bg-[#141414] border border-[#242424] space-y-2.5 text-xs">
                      <div>
                        <label className="block text-[#9CA3AF] mb-1">Tu Nombre Completo</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Ej: Camilo Andrés"
                          className="w-full bg-[#0E0E0E] border border-[#2C2C2C] px-3 py-2 text-white focus:outline-none focus:border-[#D9A13B]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[#9CA3AF] mb-1">Ciudad / Municipio</label>
                          <input
                            type="text"
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            placeholder="Ej: Medellín / Bogotá"
                            className="w-full bg-[#0E0E0E] border border-[#2C2C2C] px-3 py-2 text-white focus:outline-none focus:border-[#D9A13B]"
                          />
                        </div>
                        <div>
                          <label className="block text-[#9CA3AF] mb-1">Dirección de Entrega</label>
                          <input
                            type="text"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="Ej: Cra 45 # 12-34"
                            className="w-full bg-[#0E0E0E] border border-[#2C2C2C] px-3 py-2 text-white focus:outline-none focus:border-[#D9A13B]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Sticky Bottom Actions matching screenshot */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#0B0B0B] border-t border-[#222222] space-y-4">
              {/* Total Row */}
              <div className="flex items-baseline justify-between">
                <span className="font-bebas text-2xl tracking-wide text-white">
                  Total
                </span>
                <span className="font-bebas text-3xl tracking-wider text-[#F2CB57] tabular-nums font-bold">
                  {formatCOP(subtotal)}
                </span>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bebas text-xl tracking-wider py-4 px-4 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-green-900/30 active:scale-[0.99]"
              >
                <span>FINALIZAR POR WHATSAPP</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Vaciar Carrito Button */}
              <button
                type="button"
                onClick={onClearCart}
                className="w-full bg-transparent hover:bg-[#1A1A1A] text-white border border-[#333333] hover:border-[#D9A13B] font-bebas text-lg tracking-wider py-3 px-4 transition-colors cursor-pointer"
              >
                VACIAR CARRITO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
