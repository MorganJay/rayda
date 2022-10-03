import DetailSelector from '../ProductDetailSelector';
import QuantityToggler from '../QuantityCounter';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product, ProductCardProps } from '../../constants/types';
import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  ItemDetails,
} from './styles';
import {
  addProduct,
  removeProduct,
  updateProduct,
} from '../../features/cart/cartSlice';
import { selectCurrencyState } from '../../features/currency/currencySlice';

const CartItem = ({ product }: ProductCardProps) => {
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const dispatch = useAppDispatch();
  const {
    image,
    name,
    price,
    priceCurrency,
    quantity,
    sizes,
    colours,
    selectedColour,
    selectedSize,
  } = product;

  const overallPrice = price * quantity;

  const displayPrice = `${symbol}${affixDecimals(
    convertCurrencyValue(overallPrice, priceCurrency, currency)
  )}`;

  const restItemName =
    name.split(' ').length > 1 ? name.split(' ').slice(1).join(' ') : '';

  const handleColourSelect = (colour: string) => {
    const productToUpdate: Product = { ...product, selectedColour: colour };
    dispatch(updateProduct(productToUpdate));
  };

  const handleSizeSelect = (size: string) => {
    const productToUpdate: Product = { ...product, selectedSize: size };
    dispatch(updateProduct(productToUpdate));
  };

  return (
    <CartItemContainer>
      {/* Item details */}
      <ItemDetailsContainer>
        <ItemDetails>
          {name.split(' ')[0]}
          <br />
          {restItemName}
          <br />
          <span>{displayPrice}</span>
        </ItemDetails>

        {/* Size selector and indicator */}
        {sizes && (
          <DetailSelector
            label="size"
            items={sizes}
            selectedItem={selectedSize}
            onSelect={handleSizeSelect}
          />
        )}

        {/* Color indicator and selector */}
        {colours && (
          <DetailSelector
            label="color"
            items={colours}
            selectedItem={selectedColour}
            onSelect={handleColourSelect}
          />
        )}
      </ItemDetailsContainer>

      {/* Quantity toggler */}
      <QuantityToggler
        quantity={quantity}
        onIncrement={() => dispatch(addProduct(product))}
        onDecrement={() => dispatch(removeProduct(product))}
      />

      {/* Item image display */}
      <CartItemImage src={image} alt={name} />
    </CartItemContainer>
  );
};

export default CartItem;
