import ProductsList from '../ProductList';

import { Wrapper, Heading } from './styles';

const CategoryName = () => {
  return (
    <Wrapper>
      <Heading>Category name</Heading>
      <ProductsList />
    </Wrapper>
  );
};

export default CategoryName;
