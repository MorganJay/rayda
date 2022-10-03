import { useState } from 'react';

import QuantityToggler from '../QuantityCounter';
import DetailSelector from '../ProductDetailSelector';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  NameContainer,
  PriceContainer,
  SelectorContainer,
} from '../ProductDisplay/styles';

import { selectCurrencyState } from '../../features/currency/currencySlice';
import {
  addProduct,
  removeProduct,
  updateProduct,
} from '../../features/cart/cartSlice';

import { ProductCardProps } from '../../constants/types';

import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

import { CheckoutDetailsContainer, CheckoutItemContainer, ImageCountWrapper } from './styles';

const CheckoutItem = ({ product }: ProductCardProps) => {
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
    quantity,
    selectedSize,
    colours,
  } = product;

  const displayPrice = `${symbol}${affixDecimals(
    convertCurrencyValue(price, priceCurrency, currency)
  )}`;

  const restItemName =
    name.split(' ').length > 1 ? name.split(' ').slice(1).join(' ') : '';

  const handleColourSelect = (colour: string) => {
    setColor(colour);
    const productToUpdate = { ...product, selectedColour: colour };
    dispatch(updateProduct(productToUpdate));
  };

  const handleSizeSelect = (size: string) => {
    setSize(size);
    const productToUpdate = { ...product, selectedSize: size };
    dispatch(updateProduct(productToUpdate));
  };

  return (
    <CheckoutItemContainer>
      <CheckoutDetailsContainer>
        <NameContainer>
          <h3>{name.split(' ')[0]}</h3>
          {restItemName}
        </NameContainer>
        <PriceContainer>
          <h5>{displayPrice}</h5>
        </PriceContainer>
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
      </CheckoutDetailsContainer>
      <ImageCountWrapper>
        <QuantityToggler
          quantity={quantity}
          buttonSize='2.813'
          fontSize='2'
          onIncrement={() => dispatch(addProduct(product))}
          onDecrement={() => dispatch(removeProduct(product))}
        />
        <img src={image} alt={image} />
      </ImageCountWrapper>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
