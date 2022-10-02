import { Wrapper } from './styles';

import ProductCard from './../ProductCard';
import { Product } from '../../constants/types';

interface ProductListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <Wrapper>
      {products.length
        ? products
          .slice(0, 6)
          .map(product => <ProductCard key={product.id} product={product} />)
        : null}
    </Wrapper>
  );
};

export default ProductsList;
