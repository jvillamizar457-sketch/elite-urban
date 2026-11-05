export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'hombre' | 'mujer' | 'ninos' | 'camisetas-pantalones' | 'zapatos' | 'accesorios';
  categoryLabel: string;
  description: string;
  price: number;
  previousPrice?: number;
  badge?: 'NUEVO' | 'DESCUENTO' | 'OFERTA';
  discountPercentage?: number;
  sizes: string[];
  image: string;
  bgOutlineWord: string;
  isNewLaunch?: boolean;
  isOffer?: boolean;
  isCap?: boolean;
  audience: ('hombre' | 'mujer' | 'ninos')[];
}

export interface CartItem {
  id: string; // unique item key: productId-selectedSize
  product: Product;
  selectedSize: string;
  quantity: number;
}

export type FilterCategory =
  | 'todo'
  | 'gorras'
  | 'hombre'
  | 'mujer'
  | 'ninos'
  | 'camisetas-pantalones'
  | 'zapatos'
  | 'accesorios'
  | 'nuevos'
  | 'ofertas';

export type PriceSort = 'default' | 'asc' | 'desc';
