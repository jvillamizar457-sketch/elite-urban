import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Product, FilterCategory } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
  onQuickView: (product: Product) => void;
  initialFilter?: FilterCategory;
}

const CATEGORY_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'todo', label: 'TODO' },
  { id: 'gorras', label: 'GORRAS' },
  { id: 'hombre', label: 'HOMBRE' },
  { id: 'mujer', label: 'MUJER' },
  { id: 'ninos', label: 'NIÑOS' },
  { id: 'camisetas-pantalones', label: 'CAMISETAS Y PANTALONES' },
  { id: 'zapatos', label: 'ZAPATOS' },
  { id: 'accesorios', label: 'ACCESORIOS' },
  { id: 'nuevos', label: 'NUEVOS LANZAMIENTOS' },
  { id: 'ofertas', label: 'OFERTAS' },
];

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  onAddToCart,
  onQuickView,
  initialFilter = 'todo',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceSortOption, setPriceSortOption] = useState<string>('all');

  // Filter and sort products reactively
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'todo') {
      if (selectedCategory === 'gorras') {
        result = result.filter(p => p.isCap || p.category === 'accesorios' && p.bgOutlineWord === 'GORRA');
      } else if (selectedCategory === 'hombre') {
        result = result.filter(p => p.audience.includes('hombre'));
      } else if (selectedCategory === 'mujer') {
        result = result.filter(p => p.audience.includes('mujer'));
      } else if (selectedCategory === 'ninos') {
        result = result.filter(p => p.audience.includes('ninos') || p.category === 'ninos');
      } else if (selectedCategory === 'camisetas-pantalones') {
        result = result.filter(p => p.category === 'camisetas-pantalones');
      } else if (selectedCategory === 'zapatos') {
        result = result.filter(p => p.category === 'zapatos');
      } else if (selectedCategory === 'accesorios') {
        result = result.filter(p => p.category === 'accesorios');
      } else if (selectedCategory === 'nuevos') {
        result = result.filter(p => p.isNewLaunch || p.badge === 'NUEVO');
      } else if (selectedCategory === 'ofertas') {
        result = result.filter(p => p.isOffer || p.badge === 'DESCUENTO');
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Price sort / filters
    if (priceSortOption === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSortOption === 'desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (priceSortOption === 'under100') {
      result = result.filter(p => p.price < 100000);
    } else if (priceSortOption === '100to200') {
      result = result.filter(p => p.price >= 100000 && p.price <= 200000);
    } else if (priceSortOption === 'over200') {
      result = result.filter(p => p.price > 200000);
    }

    return result;
  }, [products, selectedCategory, searchQuery, priceSortOption]);

  const clearFilters = () => {
    setSelectedCategory('todo');
    setSearchQuery('');
    setPriceSortOption('all');
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-[#0D0D0D] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[#D9A13B] font-bebas text-lg tracking-[0.2em] uppercase block mb-1">
            CATÁLOGO
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
              LA COLECCIÓN
            </h2>
            <div className="text-sm text-[#9CA3AF]">
              Mostrando <span className="text-[#F2CB57] font-semibold tabular-nums">{filteredProducts.length}</span> prendas y accesorios
            </div>
          </div>
        </div>

        {/* Search & Price Sort bar matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
          {/* Search box */}
          <div className="md:col-span-8 relative">
            <Search className="w-5 h-5 text-[#6B7280] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full bg-[#141414] border border-[#262626] focus:border-[#D9A13B] text-white pl-12 pr-10 py-3 text-sm focus:outline-none transition-colors rounded-none placeholder:text-[#6B7280]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Price dropdown matching screenshot */}
          <div className="md:col-span-4 relative">
            <select
              value={priceSortOption}
              onChange={(e) => setPriceSortOption(e.target.value)}
              className="w-full bg-[#141414] border border-[#262626] focus:border-[#D9A13B] text-white px-4 py-3 text-sm focus:outline-none transition-colors appearance-none cursor-pointer rounded-none"
            >
              <option value="all">Todos los precios</option>
              <option value="asc">Precio: Menor a mayor</option>
              <option value="desc">Precio: Mayor a menor</option>
              <option value="under100">Menos de $100.000 COP</option>
              <option value="100to200">$100.000 - $200.000 COP</option>
              <option value="over200">Más de $200.000 COP</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Category Tabs Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`font-bebas text-base sm:text-lg tracking-wider px-4 py-2 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-[#141414] text-[#9CA3AF] border border-[#242424] hover:border-[#D9A13B] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#141414] border border-[#262626] p-12 text-center rounded-sm">
            <SlidersHorizontal className="w-10 h-10 text-[#D9A13B] mx-auto mb-3 opacity-60" />
            <h3 className="font-bebas text-2xl text-white mb-2">
              NO SE ENCONTRARON PRODUCTOS
            </h3>
            <p className="text-sm text-[#9CA3AF] max-w-md mx-auto mb-6">
              No hay prendas o accesorios que coincidan con los filtros seleccionados. Intenta con otra categoría o término de búsqueda.
            </p>
            <button
              onClick={clearFilters}
              className="font-bebas text-base tracking-wider bg-[#D90404] hover:bg-[#B70303] text-white px-6 py-2.5 transition-colors cursor-pointer"
            >
              LIMPIAR FILTROS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
