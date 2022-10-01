import { Wrapper } from './styles';

import ProductCard from './../ProductCard';
import { Product } from '../../constants/types';

interface ProductListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <Wrapper>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default ProductsList;
