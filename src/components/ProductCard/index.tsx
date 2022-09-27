import React from 'react';
import { Wrapper, DetailsContainer } from './styles';

import { ProductD } from '../../assets';

const ProductCard = () => {
  return (
    <Wrapper>
      <img src={ProductD} alt="product" />
      <DetailsContainer>
        Apollo Running Short <br />
        <span>$50.00</span>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductCard;
