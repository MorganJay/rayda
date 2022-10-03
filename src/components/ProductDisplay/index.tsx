import { useState } from 'react';

import Button from '../Button';
import DetailSelector from '../ProductDetailSelector';
import ProductImagePreview from '../ProductImagePreview';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { addProduct } from '../../features/cart/cartSlice';
import { selectCurrencyState } from '../../features/currency/currencySlice';

import { ProductCardProps } from '../../constants/types';

import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

import {
  SelectorContainer,
  PriceContainer,
  NotesContainer,
  ProductImage,
  Wrapper,
  DetailsContainer,
  NameContainer,
} from './styles';

const ProductDisplay = ({ product }: ProductCardProps) => {
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const dispatch = useAppDispatch();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const {
    image,
    name,
    price,
    priceCurrency,
    sizes,
    selectedColour,
    notes,
    selectedSize,
    colours,
  } = product;

  const displayPrice = `${symbol}${affixDecimals(
    convertCurrencyValue(price, priceCurrency, currency)
  )}`;

  const restItemName =
    name.split(' ').length > 1 ? name.split(' ').slice(1).join(' ') : '';

  const handleSizeSelect = (size: string): void => setSize(size);

  const handleColourSelect = (colour: string): void => setColor(colour);

  const handleAddToCart = () => {
    if (!size && !color) return alert('Please select a colour and size');

    const productToAdd = {
      ...product,
      selectedSize: size,
      selectedColour: color,
    };
    dispatch(addProduct(productToAdd));
  };

  return (
    <Wrapper>
      <ProductImagePreview product={product} />
      <ProductImage src={image} alt={name} />
      <DetailsContainer>
        <NameContainer>
          <h3>{name.split(' ')[0]}</h3>
          {restItemName}
        </NameContainer>
        <SelectorContainer>
          {sizes && (
            <DetailSelector
              label="size"
              labelSize="1.125"
              labelWeight="700"
              selectorWidth="3.938"
              selectorHeight="2.813"
              textTransform="uppercase"
              fontFamily="Roboto Condensed"
              items={sizes}
              selectedItem={size || selectedSize}
              onSelect={handleSizeSelect}
            />
          )}
          {colours && (
            <DetailSelector
              label="color"
              labelSize="1.125"
              labelWeight="700"
              textTransform="uppercase"
              selectorWidth="2"
              selectorHeight="2"
              fontFamily="Roboto Condensed"
              items={colours}
              selectedItem={color || selectedColour}
              onSelect={handleColourSelect}
            />
          )}
        </SelectorContainer>
        <PriceContainer>
          PRICE:
          <h5>{displayPrice}</h5>
        </PriceContainer>
        <Button onClick={() => handleAddToCart()}>ADD TO CART</Button>
        <NotesContainer>{notes}</NotesContainer>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductDisplay;
