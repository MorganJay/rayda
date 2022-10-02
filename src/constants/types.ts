export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  priceCurrency: string;
  quantity: number;
  selectedSize?: string;
  sizes?: string[];
  colours?: string[];
  selectedColour?: string;
}

export interface ProductCardProps {
  product: Product;
  currencySymbol?: string;
}

export type Currency = 'USD' | 'EUR' | 'JPY';

export interface CartDisplayProps {
  count: number;
  products?: Product[];
}
export interface ProductDetailProps
  extends React.ComponentPropsWithoutRef<'span'> {
  choice?: string;
  color?: string;
}
