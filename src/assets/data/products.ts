import { ProductA, ProductB, ProductC, ProductD, Shades } from '../';
import { Product } from '../../constants/types';
import { darkColor } from '../../constants/variables.styles';

const products: Product[] = [
  {
    id: 1,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductD,
    priceCurrency: 'USD',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Jupiter Wayfarer',
    price: 75.0,
    image: ProductB,
    priceCurrency: 'USD',
    quantity: 1,
    sizes: ['S', 'M'],
    selectedColour: '',
    selectedSize: '',
    colours: [darkColor, '#15A4C4', '#EA8120'],
  },
  {
    id: 3,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductC,
    priceCurrency: 'USD',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductA,
    priceCurrency: 'USD',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductD,
    priceCurrency: 'USD',
    quantity: 1,
    sizes: ['XS', 'S', 'M', 'L'],
    colours: ['#D3D2D5', '#2B2B2B', '#0F6450'],
    selectedSize: '',
    selectedColour: '',
  },
  {
    id: 6,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductC,
    priceCurrency: 'USD',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Jupiter Wayfarer',
    price: 75.0,
    image: Shades,
    priceCurrency: 'USD',
    quantity: 1,
    sizes: ['S', 'M'],
    selectedColour: '',
    colours: [darkColor, '#15A4C4', '#EA8120'],
  },
];

export default products;
