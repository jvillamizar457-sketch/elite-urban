import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PRODUCTS } from './data/products';
import { Product, CartItem, FilterCategory } from './types';

const CART_STORAGE_KEY = 'elite_urban_cart_v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial sample cart item for preview matching the screenshot
    }
    // Initial sample matching the user's screenshot where Hoodie Street Luxe (Talla: M, $139.000) was in cart!
    const sampleProduct = PRODUCTS.find((p) => p.id === 'hoodie-street-luxe') || PRODUCTS[0];
    return [
      {
        id: `${sampleProduct.id}-M`,
        product: sampleProduct,
        selectedSize: 'M',
        quantity: 1,
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeCatalogFilter, setActiveCatalogFilter] = useState<FilterCategory>('todo');

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, size: string, quantity = 1) => {
    const itemKey = `${product.id}-${size}`;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === itemKey);
      if (existing) {
        return prev.map((i) =>
          i.id === itemKey ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedSize: size,
          quantity,
        },
      ];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToCatalog = (category?: FilterCategory) => {
    if (category) {
      setActiveCatalogFilter(category);
    }
    const elem = document.getElementById('catalogo');
    if (elem) {
      const navOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F3F4F6] font-montserrat flex flex-col selection:bg-[#D90404] selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToCategory={(cat) => scrollToCatalog(cat)}
      />

      {/* 2. Marquee Promotion Banner */}
      <MarqueeBanner />

      {/* 3. Hero Section */}
      <main className="flex-grow">
        <Hero onExplore={() => scrollToCatalog('todo')} />

        {/* 4. Special Offers Drop Section */}
        <SpecialOffersSection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onExploreAllOffers={() => scrollToCatalog('ofertas')}
        />

        {/* 5. Complete Interactive Catalog Section */}
        <CatalogSection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          initialFilter={activeCatalogFilter}
        />

        {/* 6. Brand Story & Identity Section */}
        <AboutSection />

        {/* 7. Contact & Direct Support Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer onSelectCategory={(cat) => scrollToCatalog(cat as FilterCategory)} />

      {/* 9. Shopping Cart Lateral Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onExplore={() => scrollToCatalog('todo')}
      />

      {/* 10. Product Detail / Quick View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 11. Floating WhatsApp Contact Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
