import { CartIcon } from '../../assets';
import { useAppDispatch } from '../../app/hooks';
import { toggleCartHidden } from '../../features/cart/cartSlice';

import { CartDisplayProps } from '../../constants/types';

import { CartContainer, CartCounter } from './styles';

const Cart = ({ count }: CartDisplayProps) => {
  const dispatch = useAppDispatch();
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <CartIcon fill="#43464E" />
      <CartCounter hidden={!count}>{count}</CartCounter>
    </CartContainer>
  );
};

export default Cart;
