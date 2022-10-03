import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import CartItem from '../CartItem';

import {
  Container,
  TotalContainer,
  ButtonContainer,
  Label,
  CartItemsContainer,
  EmptyCartMessage,
} from './styles';
import { darkColor } from '../../constants/variables.styles';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCartStateTotal, toggleCartHidden } from '../../features/cart/cartSlice';

import { CartDisplayProps } from '../../constants/types';
import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';
import { selectCurrencyState } from '../../features/currency/currencySlice';

const CartDropdown = ({ count, products }: CartDisplayProps) => {
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const total = useAppSelector(selectCartStateTotal);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const displayPrice =
    symbol +
    (products?.length
      ? affixDecimals(
        convertCurrencyValue(total, products[0].priceCurrency, currency)
      )
      : '0.00');

  const directToCheckout = () => {
    if (!products?.length)
      return alert('Please add at least one product to checkout');

    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <Container>
      <Label>My Bag, {count} items</Label>
      <CartItemsContainer>
        {products?.length ? (
          products.map(product => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        )}
      </CartItemsContainer>
      <TotalContainer>
        Total
        <span>{displayPrice}</span>
      </TotalContainer>
      <ButtonContainer>
        <Button
          name="View bag"
          color={darkColor}
          onClick={directToCheckout}
          inverted
        >
          VIEW BAG
        </Button>
        <Button name="Checkout" onClick={directToCheckout}>
          CHECK OUT
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default CartDropdown;
