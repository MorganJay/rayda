export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  priceCurrency: string;
  quantity: number;
  notes?: string;
  selectedSize?: string;
  sizes?: string[];
  colours?: string[];
  selectedColour?: string;
}

export interface ProductCardProps {
  product: Product;
}

export type Currency = 'USD' | 'EUR' | 'JPY';

export interface CartDisplayProps {
  count: number;
  products?: Product[];
}
