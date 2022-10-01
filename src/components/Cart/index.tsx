import { CartIcon } from '../../assets';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCartState,
  toggleCartHidden,
} from '../../features/cart/cartSlice';

import { CartContainer, CartCounter } from './styles';

const Cart = () => {
  const { products } = useAppSelector(selectCartState);
  const dispatch = useAppDispatch();
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <CartIcon fill="#43464E" />
      <CartCounter hidden={products.length === 0}>
        {products.length}
      </CartCounter>
    </CartContainer>
  );
};

export default Cart;
