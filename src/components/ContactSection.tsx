import React, { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Truck, Clock, Send, Check } from 'lucide-react';
import { STORE_PHONE_NUMBER, STORE_PHONE_DISPLAY, STORE_INSTAGRAM } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `¡Hola ELITE URBAN!\nQuisiera información sobre sus productos.\n\n• Nombre: *${formName}*\n• Ciudad: *${formCity}*\n• Teléfono de contacto: *${formPhone}*\n• Consulta: ${formMessage}\n\nQuedo atento a su respuesta. ¡Gracias!`
    );
    window.open(`https://wa.me/${STORE_PHONE_NUMBER}?text=${text}`, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#0D0D0D] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#D9A13B] font-bebas text-lg tracking-[0.2em] uppercase block mb-2">
                05 / ATENCIÓN & CONTACTO
              </span>
              <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-tight mb-4">
                HABLEMOS DIRECTO
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] font-montserrat leading-relaxed">
                ¿Tienes preguntas sobre tallas, pedidos al por mayor o disponibilidad de referencias?
                Escríbenos directamente a nuestro WhatsApp oficial o síguenos en redes sociales.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <a
                href={`https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent('¡Hola ELITE URBAN! Deseo atención personalizada sobre sus productos y disponibilidad.')}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 bg-[#141414] border border-[#262626] hover:border-[#22C55E] transition-colors"
              >
                <div className="w-12 h-12 bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider">Atención WhatsApp Oficial</div>
                  <div className="font-bebas text-xl text-white tracking-wide group-hover:text-[#22C55E] transition-colors">
                    {STORE_PHONE_DISPLAY}
                  </div>
                </div>
              </a>

              {/* Instagram card */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 bg-[#141414] border border-[#262626] hover:border-[#D90404] transition-colors"
              >
                <div className="w-12 h-12 bg-[#D90404]/10 border border-[#D90404]/30 flex items-center justify-center text-[#D90404] group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider">Instagram Oficial</div>
                  <div className="font-bebas text-xl text-white tracking-wide group-hover:text-[#D90404] transition-colors">
                    {STORE_INSTAGRAM}
                  </div>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-center gap-4 p-4 bg-[#141414] border border-[#262626]">
                <div className="w-12 h-12 bg-[#D9A13B]/10 border border-[#D9A13B]/30 flex items-center justify-center text-[#D9A13B]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider">Cobertura</div>
                  <div className="font-bebas text-xl text-white tracking-wide">
                    Envíos a todo el territorio colombiano
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact / Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#262626] p-6 sm:p-10">
            <h3 className="font-bebas text-3xl text-white tracking-wide mb-2">
              MENSAJE RÁPIDO A DIEGO MISAS
            </h3>
            <p className="text-xs text-[#9CA3AF] mb-6">
              Diligencia este formulario y se abrirá tu WhatsApp con el mensaje estructurado de inmediato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-[#9CA3AF] font-medium mb-1.5">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ej: Andrés Morales"
                    className="w-full bg-[#1A1A1A] border border-[#2C2C2C] focus:border-[#D9A13B] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-[#9CA3AF] font-medium mb-1.5">
                    WhatsApp o Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="Ej: 300 123 4567"
                    className="w-full bg-[#1A1A1A] border border-[#2C2C2C] focus:border-[#D9A13B] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-[#9CA3AF] font-medium mb-1.5">
                  Ciudad / Municipio *
                </label>
                <input
                  type="text"
                  required
                  value={formCity}
                  onChange={(e) => setFormCity(e.target.value)}
                  placeholder="Ej: Medellín / Cali / Bogotá"
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] focus:border-[#D9A13B] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-[#9CA3AF] font-medium mb-1.5">
                  ¿En qué prenda o duda te podemos colaborar? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Cuéntanos qué referencia buscas o tu consulta..."
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] focus:border-[#D9A13B] p-4 text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D90404] hover:bg-[#B70303] text-white font-bebas text-xl tracking-wider py-4 px-6 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {sentSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>¡ENVIANDO A WHATSAPP...!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>ENVIAR MENSAJE POR WHATSAPP</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
