import React from 'react';

import { CartIcon } from '../../assets';
import { CartContainer, CartCounter } from './styles';

const Cart = () => {
  return (
    <CartContainer>
      <CartIcon />
      <CartCounter hidden>3</CartCounter>
    </CartContainer>
  );
};

export default Cart;
