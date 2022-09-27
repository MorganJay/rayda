import React from 'react';
import { Wrapper } from './styles';
import ProductCard from './../ProductCard';

const ProductsList = () => {
  return (
    <Wrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Wrapper>
  );
};

export default ProductsList;
