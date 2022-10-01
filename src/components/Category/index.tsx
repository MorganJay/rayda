import ProductsList from '../ProductList';

import { useAppSelector } from '../../app/hooks';
import { selectProductState } from '../../features/products/productsSlice';

import { Wrapper, Heading } from './styles';

const CategoryName = () => {
  const { products } = useAppSelector(selectProductState);

  return (
    <Wrapper>
      <Heading>Category name</Heading>
      <ProductsList products={products} />
    </Wrapper>
  );
};

export default CategoryName;
