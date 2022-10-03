import { useParams } from 'react-router-dom';

import ProductDisplay from '../../components/ProductDisplay';

import { useAppSelector } from '../../app/hooks';
import { selectProductState } from '../../features/products/productsSlice';

import { Container, NoProductContainer } from './styles';

const ProductDisplayPage = () => {
  const { id } = useParams();
  const { products } = useAppSelector(selectProductState);
  const product = products.find(p => p.id === Number(id));

  return product ? (
    <Container>
      <ProductDisplay product={product} />
    </Container>
  ) : (
    <Container>
      <NoProductContainer>Product not found</NoProductContainer>
    </Container>
  );
};

export default ProductDisplayPage;
