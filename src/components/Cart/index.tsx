import React from 'react';

import { CartIcon } from '../../assets';
import { CartContainer, CartCounter } from './styles';

const Cart = () => {
  return (
    <CartContainer>
      <CartIcon fill="#43464E" />
      <CartCounter hidden>3</CartCounter>
    </CartContainer>
  );
};

export default Cart;
