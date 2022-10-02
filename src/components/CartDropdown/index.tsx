import Button from '../Button';
import CartItem from '../CartItem';

import {
  Container,
  TotalContainer,
  ButtonContainer,
  Label,
  CartItemsContainer,
} from './styles';
import { darkColor, primaryColor } from '../../constants/variables.styles';

import { useAppSelector } from '../../app/hooks';
import { selectCartStateTotal } from '../../features/cart/cartSlice';
import { selectCurrencySymbol } from '../../features/products/productsSlice';

import { CartDisplayProps } from '../../constants/types';
import { affixDecimals } from '../../utils/productFunctions';

const CartDropdown = ({ count, products }: CartDisplayProps) => {
  const total = affixDecimals(useAppSelector(selectCartStateTotal));
  const currency = useAppSelector(selectCurrencySymbol);

  return (
    <Container>
      <Label>My Bag, {count} items</Label>
      <CartItemsContainer>
        {products?.length ? (
          products.map(product => (
            <CartItem
              key={product.id}
              product={product}
              currencySymbol={currency}
            />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
      </CartItemsContainer>
      <TotalContainer>
        Total
        <span>
          {currency}
          {total}
        </span>
      </TotalContainer>
      <ButtonContainer>
        <Button name="View bag" colour={darkColor} inverted>
          VIEW BAG
        </Button>
        <Button name="Checkout" colour={primaryColor}>
          CHECK OUT
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default CartDropdown;
