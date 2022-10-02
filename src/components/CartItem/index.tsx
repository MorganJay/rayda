import DetailSelector from '../ProductDetailSelector';
import QuantityToggler from '../QuantityCounter';

import { useAppDispatch } from '../../app/hooks';
import { ProductCardProps } from '../../constants/types';
import { affixDecimals } from '../../utils/productFunctions';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  ItemDetails,
} from './styles';
import { addProduct, removeProduct } from '../../features/cart/cartSlice';

const CartItem = ({ product, currencySymbol }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const {
    image,
    name,
    price,
    quantity,
    sizes,
    colours,
    selectedColour,
    selectedSize,
  } = product;

  const overallPrice = price * quantity;

  const restItemName =
    name.split(' ').length > 1 ? name.split(' ').slice(1).join(' ') : '';

  return (
    <CartItemContainer>
      {/* Item details */}
      <ItemDetailsContainer>
        <ItemDetails>
          {name.split(' ')[0]}
          <br />
          {restItemName}
          <br />
          <span>
            {currencySymbol}
            {affixDecimals(overallPrice)}
          </span>
        </ItemDetails>

        {/* Size selector and indicator */}
        {sizes && (
          <DetailSelector
            label="size"
            items={sizes}
            selectedItem={selectedSize}
          />
        )}

        {/* Color indicator and selector */}
        {colours && (
          <DetailSelector
            label="color"
            items={colours}
            selectedItem={selectedColour}
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
