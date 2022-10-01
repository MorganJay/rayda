import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/cart/cartSlice';
import { Product } from '../../constants/types';

import {
  Wrapper,
  DetailsContainer,
  CartContainer,
  StockWarning,
  Image,
} from './styles';

import { CartIcon } from '../../assets';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const { image, name, price, priceCurrency, quantity } = product;

  const currencySymbol = priceCurrency === 'USD' ? '$' : '#';

  return (
    <Wrapper quantity={quantity}>
      {quantity <= 0 ? (
        <StockWarning>OUT OF STOCK</StockWarning>
      ) : (
        <CartContainer onClick={() => dispatch(addProduct(product))}>
          <CartIcon fill="#ffffff" />
        </CartContainer>
      )}
      <Image src={image} alt="product" />
      <DetailsContainer quantity={quantity}>
        {name} <br />
        <span>
          {currencySymbol}
          {price}
        </span>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductCard;
