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
    sizes: ['XS', 'S', 'M', 'L'],
    colours: ['#D3D2D5', '#2B2B2B', '#0F6450'],
    notes:
      'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
  },
  {
    id: 2,
    name: 'Jupiter Wayfarer',
    price: 75.0,
    image: ProductA,
    priceCurrency: 'USD',
    quantity: 1,
    sizes: ['S', 'M'],
    selectedColour: '',
    selectedSize: '',
    colours: [darkColor, '#15A4C4', '#EA8120'],
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam aperiam qui delectus voluptas incidunt voluptates! Perferendis, maiores.',
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
    image: ProductB,
    sizes: ['XS', 'S'],
    priceCurrency: 'USD',
    quantity: 1,
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae iure illum beatae in, minus, deserunt cum ipsam voluptas, corporis modi reiciendis soluta magnam veniam delectus! Rerum, iusto. In, facilis!',
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
    notes:
      'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
    selectedColour: '',
  },
  {
    id: 6,
    name: 'Apollo Running Short',
    price: 50.0,
    image: ProductC,
    priceCurrency: 'USD',
    sizes: ['XS', 'S', 'L'],
    colours: [darkColor, 'red', 'blue'],
    quantity: 1,
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam aperiam qui delectus voluptas incidunt voluptates! Perferendis, maiores.',
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
    notes:
      'Find stunning womens cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
  },
];

export default products;
