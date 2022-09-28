import { Wrapper, DetailsContainer, CartContainer } from './styles';

import { CartIcon, ProductD } from '../../assets';
import { Product } from '../../constants/types';

const ProductCard = () => {
  return (
    <Wrapper>
      <img src={ProductD} alt="product" />
      <CartContainer>
        <CartIcon fill='#ffffff' />
      </CartContainer>
      <DetailsContainer>
        Apollo Running Short <br />
        <span>$50.00</span>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductCard;
